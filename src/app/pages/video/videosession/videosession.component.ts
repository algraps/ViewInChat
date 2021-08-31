import Swal from 'sweetalert2'
import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { ApiUrls, OverlayStyles, SessionStatus, UIBaseUrl } from 'src/app/constants/app.constants';
import { CommonService } from 'src/app/services/common.service';
import { Room, LocalTrack, LocalVideoTrack, LocalAudioTrack, RemoteParticipant, createLocalVideoTrack } from 'twilio-video';
import { CameraComponent } from '../camera/camera.component';
import $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { VideochatService } from 'src/app/services/videochat.service';
import { isNullOrUndefined } from 'util';
import { ConnectionService } from 'ng-connection-service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { UUID } from 'angular2-uuid';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

declare global {
  interface MediaDevices {
    getDisplayMedia(constraints?: MediaStreamConstraints): Promise<MediaStream>;
  }

  // if constraints config still lose some prop, you can define it by yourself also
  interface MediaTrackConstraintSet {
    displaySurface?: ConstrainDOMString;
    logicalSurface?: ConstrainBoolean;
    // more....
  }
}

@Component({
  selector: 'app-videosession',
  templateUrl: './videosession.component.html',
  styleUrls: ['./videosession.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideosessionComponent implements OnInit, OnDestroy {

  message: string;
  subscription: Subscription;
  participantName ;

  constructor(private router: Router, private commonService: CommonService, public _http: HttpClient,
    private renderer: Renderer2, private cdr: ChangeDetectorRef, private activeroute: ActivatedRoute,
    private videoChatService: VideochatService, private modalService: NgbModal, private connectionService: ConnectionService) {
    //this.checkIfInternetIsConnected();
  }

  uuidValue: string;
  generateUUID() {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }

  @ViewChild('chatcontainer', { static: false }) public chatcontainer: ElementRef;
  @ViewChild('gridContainer', { static: false }) public gridContainer: ElementRef;
  @ViewChild('camera', { static: false }) camera: CameraComponent;
  @ViewChild('messages', { static: false }) public $chatWindow: ElementRef;
  @ViewChild('chatinput', { static: false }) public chatinput: ElementRef;
  @ViewChild('notesinput', { static: false }) public notesinput: ElementRef;
  @ViewChild('sendButton', { static: false }) public sendButton: ElementRef;
  @ViewChild('defaultMessage', { static: false }) public defaultMessage: ElementRef;
  @ViewChild('gridContent', { static: false }) public gridContent: ElementRef;
  @ViewChild('users', { static: false }) public users: ElementRef;
  @ViewChild('file', { static: false }) public file: ElementRef;
  @ViewChild('clickButton', { static: false }) public clickButton: ElementRef;

  public currentParticipent: any = null;
  public intervieweeName: string;
  public customer: any;
  public interview: any;
  public isReadOnlyViewer = false;
  public isHiddenParticipant = false;
  public isInterviewer = false;
  public isInterviewee = false;
  public activeRoom: Room;
  public isMuted = false;
  public screenTrack: any = null;
  public interviewID: any;
  public totalParticipants: any = [];
  public createRoomResponse = false;
  public allActiveParticipants: any;
  public chatClient: any;
  public generalChannel: any = [{}];
  public username: any;
  public token: any;
  public sid: string;
  public room: any;
  time = 0;
  display;
  interval;
  public sessionID: any = '';
  public userName: any;
  public sessionNotes: any;
  public vendorName: any;
  public currentParticipantName: any;
  public vendorID: any;
  public customerID: any;
  public chatURL: any;
  public currentMessage: any;
  public count: any = 0;
  public chatLoader = false;
  status = 'ONLINE';
  isConnected = true;
  startDatetime: any;
  endDatetime: any;
  currentUser: any;
  bookingID: number = 1;
  primaryCamera: any;
  primaryCameraEnabled: boolean = true;
  public isFlipped: boolean;
  public videoDeviceLabel: any;
  public meetingEndDateTime: any;
  public serviceName: any;
  public convertedToUserTimezone: any;
  public vendorImage: any;
  //#endregion

  private hubConnection: HubConnection

  fileToUpload: File = null;

  checkIfInternetIsConnected() {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = 'ONLINE';
      }
      else {
        this.destroyLocalTracks();
        this.status = 'OFFLINE';
        this.renderer.addClass(this.gridContainer.nativeElement, 'd-none');
        const footerElement = document.getElementById('kt_footer');
        this.renderer.addClass(footerElement, 'd-none');
        let _this = this;
        this.commonService.showDecisionAlert(function () {
          location.reload();
        }, null, 'Connection lost!', 'You\'ve been disconnected. Please refresh the page to re-connect.', 'No', 'Refresh');
      }
    });
  }

  ngOnDestroy(): void {
    try{
      this.destroyLocalTracks();
      this.subscription.unsubscribe();
    }catch(ex){
      console.log(ex.message);
    }

  }

  getSessionByID = (id: any) => {
    let _this = this;
    return new Promise(function (resolve, reject) {
      _this.commonService.getCall(ApiUrls.GetSessionDetailForVideoCall + '?ID=' + id)
        .subscribe((response: Response) => {
          resolve(response);
        }, error => { console.error('Error occoured while getting interview detial (GetInterviewDetailForVideoCall)', error); reject(null); });
    });
  }

  // jobToRunBeforeMinutesOfMeetingEnding() {
  //   var _that = this;
  //   var schedule = require('node-schedule');
  //   var j = schedule.scheduleJob(this.meetingEndDateTime.add(-5, 'minutes')._d, function () {
  //     _that.commonService.showWarningAlert("Only 5 minutes are left for your meeting time to end", "Time is running out", "Ok", true);
  //   });
  // }

  checkSessionStatus(response) {
    // session completed
    if (this.interview && this.interview.sessionDetail &&
      this.interview.sessionDetail.fk_SessionStatusID == SessionStatus.Completed
    ) {
      this.commonService.hideLoader();
      this.router.navigate(['meeting-already-completed']);
      return false;
    }
    // session not scheduled
    if (!response.success
      || response.statusCode != 200
      || !this.interview
      || !this.interview.sessionParticipants
      || this.interview.sessionParticipants.length == 0
      || !this.interview.sessionDetail
      || this.interview.sessionDetail.fk_SessionStatusID != SessionStatus.Scheduled
    ) {
      this.commonService.hideLoader();
      this.router.navigate(['invalid-link']);
      return false;
    }
    // session cancelled
    if (this.interview.sessionDetail.fk_SessionStatusID == SessionStatus.Cancelled) {
      this.commonService.hideLoader();
      this.router.navigate(['interview-canceled']);
      return false;
    }
    return true;
  }

  isUserAllowedToAccessLink() {
    if (!this.currentParticipent) {
      this.commonService.hideLoader();
      this.router.navigate(['error/403']);
      return false;
    }
    return true;
  }

  open(content) {
    let options: NgbModalOptions = {
      size: 'lg',
      backdrop: 'static',
      centered: true,
    }
    this.modalService.open(content, options);
  }

  async join() {
    this.sessionID = this.activeroute.snapshot.params.id;
    if (this.sessionID) {
      let name = $("#enterName");
      this.username = name.val();
      localStorage.setItem("userName", name.val());
      this.modalService.dismissAll();
      let room: any = await this.getVideoRoomInfo(this.sessionID);
      if (room) {
        let roomObject: Room = { sid: room.result.sid, uniqueName: room.result.roomName }
        let user = JSON.parse(localStorage.getItem("videoUserID"));
        if (user) {
          this.uuidValue = user.userID;
        }
        else {
          this.generateUUID();
        }
        let userObject: any = { userID: this.uuidValue, userName: this.username };
        localStorage.setItem("videoUserID", JSON.stringify(userObject));
        this.onRoomJoining(roomObject, roomObject.uniqueName, this.uuidValue);
        this.getIdentity();
      }

    }
  }

  async ngOnInit() {
    $("#clickMe").trigger("click");
    console.log('Hi in');

  }

  getVideoRoomInfo(roomUID) {
    let _this = this;
    return new Promise(function (resolve, reject) {
      _this.commonService.getCall(ApiUrls.GetVideoRoomInfo + '?roomUID=' + roomUID)
        .subscribe((response: Response) => {
          resolve(response);
        }, error => { console.error('Error occoured while getting interview detial (GetInterviewDetailForVideoCall)', error); reject(null); });
    });
  }

  //#region Camera Events

  async onRoomJoining(room: Room, roomName: string, identity: string) {
    if (roomName) {
      this.activeRoom = room;
      this.camera.finalizePreview();
      let tracks: any = [];
      tracks = await this.camera.showPreviewCamera(this.camera.selfStream);

      this.activeRoom =
        await this.videoChatService
          .joinOrCreateRoom(roomName, tracks, identity);

      if (!!this.activeRoom) {
        this.camera.initialize(this.activeRoom.participants);
        this.registerRoomEvents();
        this.addRemoveUserInitials(this.activeRoom.localParticipant.identity, true);
        this.activeRoom.participants.forEach(p => this.addRemoveUserInitials(p.identity, true));
      }
      this.commonService.hideLoader();
      setTimeout(() => this.startTimer(), 1000); // starting timer

    }
  }

  private registerRoomEvents() {
    let _that = this;
    _that.activeRoom
      .on('disconnected',
        (room: Room) => {
          room.localParticipant.tracks.forEach(publication => _that.detachLocalTrack(publication.track));
        })
      .on('participantConnected', (participant: RemoteParticipant) => {

        let participantDetail: any;
        //participantDetail = _that.totalParticipants.filter(x => x.id == participant.identity)[0];
        _that.camera.add(participant, participant.identity);
        //_that.addRemoveUserInitials(participantDetail.id, true);
      })
      .on('participantDisconnected', (participant: RemoteParticipant) => {
        //const participantDetail = _that.totalParticipants.filter(x => x.id == participant.identity)[0];
        _that.camera.remove(participant, participant.identity);
        //_that.addRemoveUserInitials(participantDetail.id, false);
      });
  }

  getInitials = (name): string => {
    if (!!name) {
      const initialsArray = name.split(' ');
      let initials = !!initialsArray[0] ? initialsArray[0][0] : '';
      initials += !!initialsArray[1] ? initialsArray[1][0] : '';
      return initials;
    }
    else {
      return '';
    }
  }

  private detachLocalTrack(track: LocalTrack) {
    if (this.isDetachable(track)) {
      track.detach().forEach(el => el.remove());
    }
  }

  private isDetachable(track: LocalTrack): track is LocalAudioTrack | LocalVideoTrack {
    return !!track
      && ((track as LocalAudioTrack).detach !== undefined
        || (track as LocalVideoTrack).detach !== undefined);
  }

  shareScreenHandler = async () => {
    let _that = this;
    if (!this.screenTrack) {
      this.commonService.showDecisionAlert(async function () {
        navigator.mediaDevices.getDisplayMedia().then(displayMediaStream => {
          $(document.getElementById('screenShareBtn')).toggleClass('active-btn').toggleClass('btn-light');
          _that.screenTrack = new LocalVideoTrack(displayMediaStream.getTracks()[0]);
          _that.activeRoom.localParticipant.publishTrack(_that.screenTrack);
          _that.screenTrack.mediaStreamTrack.onended = () => {
            _that.stopScreenShare();
          };
        }).catch(err => {
          alert('Could not share the screen.');
        });
      }, null, 'Are you sure?', 'You want to share your screen.');
    }
    else {
      _that.stopScreenShare();
    }
  }

  stopScreenShare() {
    let _that = this;
    this.commonService.showDecisionAlert(function () {
      _that.activeRoom.localParticipant.unpublishTrack(_that.screenTrack);
      _that.screenTrack.stop();
      _that.screenTrack = null;
      $(document.getElementById('screenShareBtn')).toggleClass('active-btn').toggleClass('btn-light');
    }, null, 'Are you sure?', 'You want to stop sharing your screen.');

  }

  updateVideoDevice(cameraTrack) {
    let _that = this;
    createLocalVideoTrack({
      deviceId: { exact: cameraTrack.deviceId }
    }).then(function (localVideoTrack) {
      _that.cdr.detectChanges();
      const track = _that.activeRoom.localParticipant.videoTracks.values().next().value.track;
      console.log("current user device tracks " + track);
      _that.activeRoom.localParticipant.unpublishTrack(track);
      _that.detachLocalTrack(track);
      _that.activeRoom.localParticipant.publishTrack(localVideoTrack);
      console.log("device to attach tracks " + JSON.stringify(cameraTrack));
      _that.camera.initializePreview(cameraTrack, _that.camera.selfStream, true);
      _that.cdr.detectChanges();
    });
  }

  async flipCamera() {
    let _that = this;
    _that.isFlipped = true;
    await navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
      _that.videoDeviceLabel = stream.getTracks().filter(x => x.kind == 'video')[0].label;
      console.log("Primary user device " + _that.videoDeviceLabel);
      _that.cdr.detectChanges();
    });
    window.navigator.mediaDevices.enumerateDevices().then(devices => {
      let allVideoDevices = devices.filter(x => x.kind == 'videoinput');
      if (allVideoDevices.length > 1) {
        let camera = null;
        if (!isNullOrUndefined(_that.videoDeviceLabel) && !_that.primaryCameraEnabled) {
          camera = allVideoDevices.filter(x => x.label == _that.videoDeviceLabel)[0];
        }
        if (_that.primaryCameraEnabled) {
          camera = allVideoDevices.filter(x => x.label != _that.videoDeviceLabel)[0];
        }
        console.log("selected user device " + JSON.stringify(camera));
        _that.primaryCameraEnabled = !_that.primaryCameraEnabled;
        _that.cdr.detectChanges();
        _that.updateVideoDevice(camera);

      } else {
        Swal.fire({
          title: 'Flip not allowed',
          text: "Not enought Video Devices connected",
          icon: 'warning',
        });
      }

    });
  }

  removeNavigation = () => {
    const header = document.getElementsByTagName('kt-header')[0];
    if (!!header) {
      header.remove();
    }
    const headerMobile = document.getElementsByTagName('kt-header-mobile')[0];
    if (!!headerMobile) {
      headerMobile.remove();
    }

    const aside = document.getElementsByTagName('kt-aside-left')[0];
    if (!!aside) {
      aside.remove();
    }

    // let wrapper = document.getElementById('kt_wrapper');
    // if (!!wrapper) {
    // 	this.renderer.setStyle(wrapper, 'padding', '0rem');
    // }
  }

  hideNavigation = () => {
    const header = document.getElementsByTagName('kt-header')[0];
    if (!!header) {
      this.renderer.setStyle(header, 'display', 'none');
    }
    const headerMobile = document.getElementsByTagName('kt-header-mobile')[0];
    if (!!header) {
      this.renderer.setStyle(headerMobile, 'display', 'none');
    }

    const aside = document.getElementsByTagName('kt-aside-left')[0];
    if (!!aside) {
      this.renderer.setStyle(aside, 'display', 'none');
    }
  }

  showNavigation = () => {
    const header = document.getElementsByTagName('kt-header')[0];
    if (!!header) {
      this.renderer.setStyle(header, 'display', 'block');
    }
    const headerMobile = document.getElementsByTagName('kt-header-mobile')[0];
    if (!!headerMobile) {
      this.renderer.setStyle(headerMobile, 'display', 'block');
    }
    const aside = document.getElementsByTagName('kt-aside-left')[0];
    if (!!aside) {
      this.renderer.setStyle(aside, 'display', 'block');
    }

    // let wrapper = document.getElementById('kt_wrapper');
    // if (!!wrapper) {
    // 	this.renderer.setStyle(wrapper, 'padding-left', '70px');
    // 	this.renderer.setStyle(wrapper, 'padding-top', '65px');
    // }
  }

  addRemoveUserInitials = (identity, add) => {
    const participantDetail = this.totalParticipants.filter(x => x.id == identity)[0];
    if (participantDetail) {
      const initial = this.getInitials(participantDetail.participantName);
    }
  }

  leaveRoom() {
    let _that = this;
    _that.onCompletionOfSession();
    _that.commonService.showSuccessAlert("Meeting ended");
    _that.router.navigate(['meeting-ended']);
  }

  onCompletionOfSession() {
    let _that = this;
    _that.display = '00:00:00';
    _that.pauseTimer();
    _that.activeRoom.disconnect();
    _that.destroyLocalTracks();
  }

  muteOrUnmute = () => {
    if (this.activeRoom && this.activeRoom.localParticipant) {
      if (this.isMuted) {
        // unmute
        this.activeRoom.localParticipant.audioTracks.forEach(function (audioTrack) {
          audioTrack.track.enable();
        });
      }
      else {
        // mute
        this.activeRoom.localParticipant.audioTracks.forEach(function (audioTrack) {
          audioTrack.track.disable();
        });
      }
      this.isMuted = !this.isMuted;
    }
    else {
      console.error(`Unable to find localParticipant to mute/unmute mic. !!!`);
    }

  }

  destroyLocalTracks() {
    if (this.activeRoom && this.activeRoom.localParticipant && this.activeRoom.localParticipant.tracks) {
      this.activeRoom.localParticipant.tracks.forEach(t => {
        this.detachLocalTrack(t.track);
        this.activeRoom.localParticipant.unpublishTrack(t.track);
        t.track.stop();
        t.track.disable();
      });
    }

    // this.activeRoom.disconnect()
  }

  //#endregion

  //#region elapsed time

  startTimer() {
    this.interval = setInterval(() => {
      this.display = this.transform(this.time++);
      this.cdr.detectChanges();
    }, 1000);
  }

  transform(value: number): string {
    let sec_num = value;
    const hours = Math.floor(sec_num / 3600);
    const minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    const seconds = sec_num - (hours * 3600) - (minutes * 60);
    if (hours < 10 && minutes < 10 && seconds < 10) {
      return '0' + hours + ':' + '0' + minutes + ':' + '0' + seconds;
    }
    else if (hours < 10 && minutes < 10) {
      return '0' + hours + ':' + '0' + minutes + ':' + seconds;
    }
    else if (hours < 10) {
      return '0' + hours + ':' + minutes + ':' + seconds;
    }
    else {
      return hours + ':' + minutes + ':' + seconds;
    }
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  public _clickHandler = this.onSendClick.bind(this);

  async ngAfterViewInit() {
    this.hideNavigation();
    if (this.sendButton) {
      this.sendButton.nativeElement.addEventListener('click', this._clickHandler);
    }
  }

  //#endregion elapsed time

  //#region chat

  // Helper function to print info messages to the chat window
  print(infoMessage, asHtml) {
    try {
      const element = document.createElement('div');
      element.setAttribute('class', 'info');
      element.setAttribute('style', 'color:Black,background-color:white');
      if (asHtml) {
        element.innerHTML = (infoMessage);
      } else {
        element.innerText = (infoMessage);
      }
      this.$chatWindow.nativeElement.append(element);
    }
    catch (ex) {
      console.log(`PE: ${ex.message}`);
    }
  }

  generateHtmlByMediaType(message) {
    let html;
    if (this.currentMessage.media.state.contentType == 'image/jpeg') {
      html = `<div class="self-chat-message" style="text-align: right">
<img id="messages" src="${message}" height="250px;" width="250px;">
</div>`;
    }
    else if (this.currentMessage.media.state.contentType == 'application/msword' ||
      this.currentMessage.media.state.contentType == 'application/msword' ||
      this.currentMessage.media.state.contentType == 'application/octet-stream') {
      html = `<div class="self-chat-message" style="text-align: right">
<p id="messages"><a class="cursor-pointer" href="${message}" target="_blank"><i class="fas fa-file-word" style="font-size:100px; color:#0078d4"></i></a></p>
</div>`;
    }
    else if (this.currentMessage.media.state.contentType == 'application/pdf') {
      html = `<div class="self-chat-message" style="text-align: right">
<p id="messages"><a class="cursor-pointer" href="${message}" target="_blank" style="color: white;"><i class="fas fa-file-pdf" style="font-size:100px; color:#AA0000"></i></a></p>
</div>`;
    }
    else if (this.currentMessage.media.state.contentType == 'application/vnd.ms-excel' ||
      this.currentMessage.media.state.contentType == 'application/vnd.ms-exce' ||
      this.currentMessage.media.state.contentType == 'application/vnd.ms-excel' ||
      this.currentMessage.media.state.contentType == 'application/vnd.ms-excel' ||
      this.currentMessage.media.state.contentType == 'application/vnd.ms-excel' ||
      this.currentMessage.media.state.contentType == 'application/vnd.ms-excel') {
      html = `<div class="self-chat-message" style="text-align: right">
<p id="messages"><a class="cursor-pointer" href="${message}" target="_blank" style="color: white;"><i class="fas fa-file-excel" style="font-size:100px; color:#007c00"></i></a></p>
</div>`;
    }
    else if (this.currentMessage.media.state.contentType == 'application/vnd.ms-powerpoint' ||
      this.currentMessage.media.state.contentType == 'application/vnd.ms-powerpoint' ||
      this.currentMessage.media.state.contentType == 'application/vnd.ms-powerpoint') {
      html = `<div class="self-chat-message" style="text-align: right">
<p id="messages"><a class="cursor-pointer" href="${message}" target="_blank" style="color: white;"><i class="fas fa-file-powerpoint" style="font-size:100px; color:#d7461a"></i></a></p>
</div>`;
    }
    else if (this.currentMessage.media.state.contentType == 'text/plain') {
      html = `<div class="self-chat-message" style="text-align: right">
<p id="messages"><a class="cursor-pointer" href="${message}" target="_blank" style="color: white;"><i class="fas fa-file-alt" style="font-size:100px; color:#e1f2f9"></i></a></p>
</div>`;
    }
    else if (this.currentMessage.media.state.contentType == 'application/zip' ||
      this.currentMessage.media.state.contentType == 'application/x-zip-compressed') {
      html = `<div class="self-chat-message" style="text-align: right">
<p id="messages"><a class="cursor-pointer" href="${message}" target="_blank" style="color: white;"><i class="fas fa-file-archive" style="font-size:100px; color:#f3b83f"></i></a></p>
</div>`;
    }
    else {
      html = `<div class="self-chat-message" style="text-align: right">
<p id="messages"><a class="cursor-pointer" href="${message}" target="_blank" style="color: white;"><i class="fas fa-file-alt" style="font-size:100px; color:#e1f2f9"></i></a></p>
</div>`;
    }
    return html;
  }

  returnSentMessageHtml(message, name) {

    let html;
    if (this.currentMessage.type === 'media') {

      html = `<div class="chat-segment chat-segment-sent">
${this.generateHtmlByMediaType(message)}
<span class="btn btn-primary rounded-circle btn-icon chatUsers selfUser"><span class="chatUserName">${name}</span></span>
</div>`;
    }
    else {
      html = `<div class="chat-segment chat-segment-sent">
<div class="self-chat-message bg-primary">
<p id="messages">${message}</p>
</div>
<span class="btn btn-primary rounded-circle btn-icon chatUsers selfUser"><span class="chatUserName">${name}</span></span>
</div>`;
    }
    return html;
  }

  returnGetMessageHtml(message, name) {
    let html;
    if (this.currentMessage.type === 'media') {
      html = `<div class="chat-segment chat-segment-get">
<div class="chat-message other-chat-message">
${this.generateHtmlByMediaType(message)}
</div>
<span class="btn btn-icon btn-dark rounded-circle chatUsers otherChatUsers"><span class="chatUserName">${name}</span></span>
</div>`;
    }
    else {
      html = `<div class="chat-segment chat-segment-get">
<div class="chat-message other-chat-message">
<p id="messages">${message}</p>
</div>
<span class="btn btn-icon btn-dark rounded-circle chatUsers otherChatUsers"><span class="chatUserName">${name}</span></span>
</div>`;
    }
    return html;
  }

  // Helper function to print chat message to the chat window
  printMessage(fromUser, message) {

    let user = JSON.parse(localStorage.getItem("videoUserID"));
    const namesArr = user.userName.split(' ');
    let name = namesArr && namesArr[0] ? namesArr[0][0] : '';
    name += namesArr && namesArr[1] ? namesArr[1][0] : '';
    if (fromUser == user.userID) {
      const html = this.returnSentMessageHtml(message, name);
      const div = document.createElement('div');
      div.innerHTML = html.trimLeft();
      div.innerHTML = div.innerHTML.trimRight();
      this.chatcontainer.nativeElement.appendChild(div.firstChild);
    }
    else {
      const html = this.returnGetMessageHtml(message, "U2");
      const div = document.createElement('div');
      div.innerHTML = html.trimLeft();
      div.innerHTML = div.innerHTML.trimRight();
      this.chatcontainer.nativeElement.appendChild(div.firstChild);
    }
    $('#scrollDiv').scrollTop($('#scrollDiv')[0].scrollHeight);
    this.chatLoader = false;
  }

  // Get an access token for the current user, passing a username (identity)
  getIdentity() {
    let user = JSON.parse(localStorage.getItem("videoUserID"));
    let _that = this;
    _that._http.get(`${ApiUrls.Token}/${encodeURIComponent(user.userID)}`)
      .subscribe((response: any) => {
        if (!!response) {
          _that.username = user.userID;
          _that.token = response.token;
          // Initialize the Chat client
          const Chat = require('twilio-chat');
          Chat.Client.create(_that.token).then(client => {
            _that.chatClient = client;
            _that.chatClient.getSubscribedChannels().then(_that.createOrJoinGeneralChannel());

            _that.chatClient.on('tokenAboutToExpire', function () {
              _that.refreshToken(_that.token);
            });
            // if the access token already expired, refresh it
            _that.chatClient.on('tokenExpired', function () {
              _that.refreshToken(_that.token);
            });
          });
        }
        else {
          _that.commonService.showErrorAlert('Unable to connect to chat session', 'Chat Error!');
        }
      }, error => {
        console.log(error);
        _that.getIdentity();
        //_that.commonService.showErrorAlert(error, 'Chat Error!');
      });
  }

  // Create or join a channel (general) for chat
  createOrJoinGeneralChannel() {
    // Get the general chat channel, which is where all the messages are
    let _that = this;
    this.chatClient.getChannelByUniqueName(this.sessionID.trim())
      .then(async function (channel) {
        //await _that.videoChatService.updateSessionChatRoomSID({ SessionID: _that.interviewID, ChatChannelSID: channel.sid });
        _that.generalChannel = channel;
        _that.setupChannel();
      }).catch(function (error) {
        // If it doesn't exist, let's create it
        _that.createAChannel();
      });
  }

  createAChannel() {
    let _that = this;
    _that.chatClient.createChannel({
      uniqueName: _that.sessionID,
      friendlyName: 'Meeting Chat Channel'
    }).then(async function (channel) {
      //await _that.videoChatService.updateSessionChatRoomSID({ SessionID: _that.interviewID, ChatChannelSID: channel.sid });
      _that.generalChannel = channel;
      _that.setupChannel();
      // _that.defaultMessage.nativeElement.innerText = 'Connected to the Room...';
    }).catch(function (channel) {
      _that.createAChannel();
      //_that.commonService.showErrorAlert('We\'re not able to connect to the chat session', 'Chat Error!');
      // _that.defaultMessage.nativeElement.innerText = 'Connecting to the Room...';
    });
  }

  refreshToken(identity) {
    // Make a secure request to your backend to retrieve a refreshed access token.
    // Use an authentication mechanism to prevent token exposure to 3rd parties.
    this._http.get(`${ApiUrls.Token}`)
      .subscribe((response: any) => {
        this.chatClient.updateToken(response.token);
        this.username = response.token;
      }, error => (error));
  }

  // Set up channel after it has been found
  setupChannel() {
    // Join the general channel
    let _that = this;
    this.generalChannel.join().then(function (channel) {
    }).catch(err => {
      console.log('Chat Room Already Joined');
    });

    // Get Messages for a previously created channel
    _that.generalChannel.getMessages().then(function (messages) {
      const totalMessages = messages.items.length;
      for (var i = 0; i < totalMessages; i++) {
        const message = messages.items[i];
        console.log('Author:' + message.author);
      }
      console.log('Total Messages:' + totalMessages);
    });


    // Listen for new messages sent to the channel
    _that.generalChannel.on('messageAdded', function (message) {
      if (_that.count == 0) {
        _that.generalChannel.getMessages().then(function (messagesPaginator) {
          // check the first message type
          _that.currentMessage = messagesPaginator.items[messagesPaginator.items.length - 1];
          if (_that.currentMessage.type === 'media') {
            _that.count++;
            _that.currentMessage.media.getContentTemporaryUrl().then(function (url) {
              // log media temporary URL
              _that.chatURL = url;
              _that.printMessage(message.author, _that.chatURL);
              _that.chatURL = null;
              _that.currentMessage = null;
              _that.fileToUpload = null;
              _that.file.nativeElement.value = null;
            });
          } else {
            _that.printMessage(message.author, message.body);
            if (!isNullOrUndefined(_that.fileToUpload)) {
              const formData: FormData = new FormData();
              formData.append('file', _that.fileToUpload);

              _that.generalChannel.sendMessage(formData);
              event.preventDefault();
              _that.chatinput.nativeElement.innerHTML = null;
            }
          }
        });
      }
      else {
        _that.printMessage(message.author, message.body);
      }
    });

    //     // Listen for members joining a channel
    _that.generalChannel.on('memberJoined', function (member) {
      console.log('member joined');
    });
    // Listen for members user info changing
    _that.generalChannel.on('memberInfoUpdated', function (member) {
      console.log('member information updated');
    });
    // Listen for members leaving a channel
    _that.generalChannel.on('memberLeft', function (member) {
      console.log('member left');
    });
    // Listen for members typing
    _that.generalChannel.on('typingStarted', function (member) {
      console.log('member started typing');
    });
    // Listen for members typing
    _that.generalChannel.on('typingEnded', function (member) {
      console.log('member typing ended');
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  // Send a new message to the general channel
  sendChat(event) {

    let _that = this;
    _that.count = 0;
    if (event.keyCode === 13 && !event.shiftKey) {

      if (_that.generalChannel === undefined) {
        _that.print('The Chat Service is not configured. Please contact support.', false);
        this.chatLoader = false;
        return;
      }


      if (_that.chatinput.nativeElement.innerText.length > 0) {
        _that.generalChannel.sendMessage(_that.chatinput.nativeElement.innerText);
        event.preventDefault();
        _that.chatinput.nativeElement.innerHTML = null;
      }
      else if (_that.fileToUpload != null) {
        this.chatLoader = true;
        const formData: FormData = new FormData();
        formData.append('file', _that.fileToUpload);

        _that.generalChannel.sendMessage(formData);
        event.preventDefault();
        _that.chatinput.nativeElement.innerHTML = null;
      }
    }
  }

  onSendClick(event) {

    let _that = this;
    _that.count = 0;
    if (_that.generalChannel === undefined) {
      _that.print('The Chat Service is not configured. Please contact support.', false);
      this.chatLoader = false;
      return;
    }
    if (_that.chatinput.nativeElement.innerText.trim().length > 0) {
      _that.generalChannel.sendMessage(_that.chatinput.nativeElement.innerText.trim());
      event.preventDefault();
      _that.chatinput.nativeElement.innerHTML = null;
    }
    else if (_that.fileToUpload != null) {
      this.chatLoader = true;
      const formData: FormData = new FormData();
      formData.append('file', _that.fileToUpload);

      _that.generalChannel.sendMessage(formData);
      event.preventDefault();
      _that.chatinput.nativeElement.innerHTML = null;
    }
  }

  //#endregion chat
}
