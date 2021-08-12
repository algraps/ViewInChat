import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2, Output, Input, EventEmitter, ChangeDetectorRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { createLocalTracks, LocalTrack, LocalVideoTrack, Participant, RemoteTrack, RemoteAudioTrack, RemoteVideoTrack, RemoteParticipant, RemoteTrackPublication, createLocalVideoTrack } from 'twilio-video';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { StorageService } from '../../../../app/services/storage.service';
import { ApiUrls, FlipAngle } from '../../../constants/app.constants';
import { VideochatService } from 'src/app/services/videochat.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CameraComponent implements AfterViewInit, OnDestroy {

  @ViewChild('preview', { static: false }) previewElement: ElementRef;
  @ViewChild('mainParticipantName', { static: false }) mainParticipantName: ElementRef;
  @ViewChild('selfStream', { static: false }) selfStream: ElementRef;
  @ViewChild('selfStreamParent', { static: false }) selfStreamParent: ElementRef;
  @ViewChild('particpantContainer', { static: false }) particpantContainer: ElementRef;
  @Output('participantsChanged') participantsChanged = new EventEmitter<boolean>();
  @Output('leaveRoom') leaveRoom = new EventEmitter();
  @Output('toggleMute') toggleMute = new EventEmitter();
  @Output('shareScreen') shareScreen = new EventEmitter();
  @Output('flipCamera') flipCamera = new EventEmitter();
  @Input('activeRoomName') activeRoomName: string;


  @Input()
  set isMuted(isMuted: boolean) {
    let muteMicBtnIcon = document.getElementById("muteMicBtnIcon");
    if (muteMicBtnIcon) {
      if (isMuted) {
        this.renderer.removeClass(muteMicBtnIcon, "fa-microphone");
        this.renderer.addClass(muteMicBtnIcon, "fa-microphone-slash");
      }
      else {
        this.renderer.removeClass(muteMicBtnIcon, "fa-microphone-slash");
        this.renderer.addClass(muteMicBtnIcon, "fa-microphone");
      }
    }

    let selfStreamMicIcon = document.getElementById("selfStreamMicIcon");
    if (selfStreamMicIcon) {
      if (isMuted) {
        this.renderer.removeClass(selfStreamMicIcon, "fa-microphone");
        this.renderer.addClass(selfStreamMicIcon, "fa-microphone-slash");
      }
      else {
        this.renderer.removeClass(selfStreamMicIcon, "fa-microphone-slash");
        this.renderer.addClass(selfStreamMicIcon, "fa-microphone");
      }
    }
    this._isMuted = isMuted;
  }

  private _isMuted: boolean = false;
  private flipAngle: FlipAngle;
  private notificationHub: HubConnection;
  @Input()
  get currentParticipent(): any { return this._currentParticipent; }
  set currentParticipent(currentParticipent: any) {
    this._currentParticipent = currentParticipent;
    if (!!this.currentParticipent
      // &&
      //this.currentParticipent.type != MemberType.ReadOnlyViewer &&
      //this.currentParticipent.type != MemberType.Interviewee
    ) {
    }
  }
  private _currentParticipent: any;
  @Input() totalParticipants: any;
  get tracks(): LocalTrack[] {
    return this.localTracks;
  }
  @Input()
  get interview(): any { return this._interview; }
  set interview(interview: any) {
    this._interview = interview;
    if (!!this._interview && this._interview.interviewDetail) {
      //this.projectName = this._interview.interviewDetail.fk_ProjectName;
    }
    this.cdr.detectChanges();
  }
  private _interview: any = null;
  @Input()
  get intervieweeName(): any { return this._intervieweeName; }
  set intervieweeName(intervieweeName: any) {
    this._intervieweeName = intervieweeName;
    this.cdr.detectChanges();
  }
  private _intervieweeName: string = "";
  @Input()
  get isHiddenParticipant(): boolean { return this._isHiddenParticipant; }
  set isHiddenParticipant(isHiddenParticipant: boolean) {
    this._isHiddenParticipant = isHiddenParticipant;
    this.cdr.detectChanges();
  }
  private _isHiddenParticipant: boolean = false;
  @Input()
  get isReadOnlyViewer(): boolean { return this._isReadOnlyViewer; }
  set isReadOnlyViewer(isReadOnlyViewer: boolean) {
    this._isReadOnlyViewer = isReadOnlyViewer;
    this.cdr.detectChanges();
  }
  private _isReadOnlyViewer: boolean = false;
  @Input()
  get isInterviewee(): boolean { return this._isInterviewee; }
  set isInterviewee(isInterviewee: boolean) {
    this._isInterviewee = isInterviewee;
    if (this._isInterviewee && this.previewElement) {
      this.renderer.setStyle(this.previewElement.nativeElement, 'height', '94vh');
    }
    this.cdr.detectChanges();
  }
  private _isInterviewee: boolean;
  @Input()
  get isInterviewer(): boolean { return this._isInterviewer; }
  set isInterviewer(isInterviewer: boolean) {
    this._isInterviewer = isInterviewer;
    this.cdr.detectChanges();
  }
  private _isInterviewer: boolean;

  get isInitializing(): boolean { return this._isInitializing; }
  set isInitializing(isInitializing: boolean) {
    this._isInitializing = isInitializing;
    this.cdr.detectChanges();
  }
  private _isInitializing: boolean = false;
  get isInitialized(): boolean { return this._isInitialized; }
  set isInitialized(isInitialized: boolean) {
    this._isInitialized = isInitialized;
    this.cdr.detectChanges();
  }
  private _isInitialized: boolean = false;
  private videoTrack: LocalVideoTrack;
  private localTracks: LocalTrack[] = [];

  /* Particpant Detail*/
  get participantCount() {
    return !!this.participants ? this.participants.size : 0;
  }

  get isAlone() {
    return this.participantCount === 0;
  }
  public isConnectionLost: boolean = false;
  public isConnected: boolean = false;
  @Input() isFlipped: boolean;

  private participants: Map<Participant.SID, RemoteParticipant>;
  private dominantSpeaker: RemoteParticipant;
  projectQuestions: any = [];
  public flip;

  constructor(private readonly storageService: StorageService,
    private readonly cdr: ChangeDetectorRef,
    private readonly renderer: Renderer2,
    private readonly _http: HttpClient,
    private readonly videoChatService: VideochatService) {

    this.flipAngle = FlipAngle["0deg"];

  }

  //#region generic camera methods

  async ngAfterViewInit() {

  }

  onMuteButtonClick = () => {
    this.toggleMute.emit();
    this.notificationHub.send("ToggleMute", !this._isMuted, this.currentParticipent.id);
  }

  onShareScreenButtonClick = (event) => {

    this.shareScreen.emit();
  }

  onFlipPreview = () => {
    this.flipCamera.emit();

  }

  onBookmarkClick() {
    let element: HTMLElement = document.getElementById('btnOpenAddBookmarkModal') as HTMLElement;
    element.click();
  }

  onLeaveButtonClick() {
    let msg = "Do you want to leave the meeting ?";
    let confirmMsg = 'Yes, leave meeting!';
    // if (this.currentParticipent.participantType == UserTypeEnum.Vendor) {
    //   msg = "Do you want to end the meeting ?"
    //   confirmMsg = 'Yes, end meeting!';
    // }
    Swal.fire({
      title: 'Are you sure?',
      text: msg,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmMsg
    }).then((result) => {
      if (result.value) {
        this.destroyLocalTracks();
        this.leaveRoom.emit();
      }
    })
  }

  ngOnDestroy(): void {
    this.destroyLocalTracks();
  }

  destroyLocalTracks() {
    this.localTracks.forEach(track => {
      track.disable();
      track.stop();
    });

  }

  //#endregion

  //#region camera

  initializePreview(deviceInfo?: MediaDeviceInfo, elemetToAppendStream?: any, isFlipped: boolean = false) {
    this.flip = isFlipped;
    if (deviceInfo) {
      this.initializeDevice(deviceInfo.kind, deviceInfo.deviceId, elemetToAppendStream);
    } else {
      this.initializeDevice(null, null, elemetToAppendStream);
    }
  }

  finalizePreview() {
    try {
      if (this.videoTrack) {
        this.videoTrack.detach().forEach(element => element.remove());
      }
    } catch (e) {
      console.error(e);
    }
  }

  private async initializeDevice(kind?: MediaDeviceKind, deviceId?: string, elemetToAppendStream?: any) {

    try {
      this.isInitializing = true;

      this.finalizePreview();
      this.localTracks = kind && deviceId
        ? await this.initializeTracks(kind, deviceId)
        : await this.initializeTracks();

      this.videoTrack = this.localTracks.find(t => t.kind === 'video') as LocalVideoTrack;

      const videoElement = this.videoTrack.attach();
      this.renderer.setStyle(videoElement, 'height', '100%');
      this.renderer.setStyle(videoElement, 'width', '100%');
      // this.renderer.setStyle(videoElement, 'border-radius', '10px');
      // this.renderer.setStyle(videoElement, 'margin-bottom', '-5px');

      let user = JSON.parse(localStorage.getItem("videoUserID"));
      this.renderer.setAttribute(videoElement, 'data-id', 'video-' + user.userID);

      // elemetToAppendStream.nativeElement.value = null;
      if (!elemetToAppendStream) {

        if (this.isInterviewee) {
          this.renderer.setStyle(this.previewElement, 'height', '98vh');
          this.renderer.setStyle(videoElement, 'height', '90vh');
        } else {
          this.renderer.setStyle(videoElement, 'height', '100%');
        }
      }

      if (elemetToAppendStream) {
        this.renderer.appendChild(elemetToAppendStream.nativeElement, videoElement);
      }
      else {
        this.renderer.appendChild(this.previewElement.nativeElement, videoElement);
      }
      this.isInitialized = true;

    } catch (ex) {
      console.info(ex);
    } finally {
      this.isInitializing = false;
      this.cdr.detectChanges();
    }
  }

  async showPreviewCamera(elemetToAppendStream?: any) {

    await this.initializePreview(null, elemetToAppendStream, false);
    return this.videoTrack;
  }

  private initializeTracks(kind?: MediaDeviceKind, deviceId?: string) {

    if (kind) {
      switch (kind) {
        case 'audioinput':
          return createLocalTracks({ audio: { deviceId }, video: true });
        case 'videoinput':
          return createLocalTracks({ audio: true, video: { deviceId } });
      }
    }
    return createLocalTracks({ audio: true, video: true });
  }

  //#endregion

  //#region participants & tracks

  clear() {
    if (this.participants) {
      this.participants.clear();
    }
  }

  initialize(participants: Map<Participant.SID, RemoteParticipant>) {
    this.participants = participants;
    if (this.participants) {
      this.participants.forEach(participant => this.registerParticipantEvents(participant, ""));
    }
  }

  add(participant: RemoteParticipant, participantDetailID: any) {
    if (this.participants && participant) {
      this.participants.set(participant.sid, participant);
      this.registerParticipantEvents(participant, participantDetailID);
    }
  }

  remove(participant: RemoteParticipant, participantDetailID: any) {
    if (this.participants && this.participants.has(participant.sid)) {
      this.participants.delete(participant.sid);
    }
    const participantToRemove = document.getElementById(participant.identity);
    if (participantToRemove) {
      participantToRemove.remove();
    }
  }

  loudest(participant: RemoteParticipant) {
    this.dominantSpeaker = participant;
    const previousDominantSpeaker = document.getElementsByClassName('dominant-speaker');
    if (previousDominantSpeaker && previousDominantSpeaker.length > 0) {
      for (let index = 0; index < previousDominantSpeaker.length; index++) {
        const element = previousDominantSpeaker[index];
        element.classList.remove('dominant-speaker');
      }
    }
    const dominantSpeakerStreamElement = document.getElementById(participant.identity);
    dominantSpeakerStreamElement.classList.add('dominant-speaker');
  }

  onLeaveRoom() {
    this.leaveRoom.emit(true);
  }

  private async registerParticipantEvents(participant: RemoteParticipant, participantDetailID?: any) {
    //let participantDetail: any = this.totalParticipants.filter(x => x.id == participant.identity)[0];
    if (participant
    ) {
      participant.tracks.forEach(publication => this.subscribe(publication, participantDetailID));
      participant.on('trackPublished', publication => {
        this.subscribe(publication, participantDetailID)
      });
      participant.on('trackUnpublished',
        publication => {
          if (publication && publication.track) {
            this.detachRemoteTrack(publication.track, participantDetailID);
          }
        });
    }
  }

  private subscribe(publication: RemoteTrackPublication | any, participantDetailID: any) {
    if (publication && publication.on) {
      publication.on('subscribed', track => this.attachRemoteTrack(track, participantDetailID));
      publication.on('unsubscribed', track => this.detachRemoteTrack(track, participantDetailID));
    }
  }

  private async attachRemoteTrack(track: RemoteTrack, participantDetailID: any) {
    //let userName = localStorage.getItem("userName");
    let userName;
    let user = JSON.parse(localStorage.getItem("videoUserID"));
    if(user.userID == participantDetailID){
      userName = user.userName;
    }
    else{
      userName = "User 2"
    }
    if (this.isAttachable(track)) {
      const element = track.attach();
      this.renderer.data.id = track.sid;
      this.renderer.setStyle(element, 'width', '100%');
      this.renderer.setAttribute(element, 'data-tracksid', track.sid);
      if (track && track.kind === 'video' && element) {
        let cameraTrackvideoElement = document.querySelector(`[data-id='video-${participantDetailID}']`);
        let isThisSharedScreenTrack = (!!cameraTrackvideoElement);
        if (isThisSharedScreenTrack) {
          // this case indicates that the incoming remote track is the 2nd video track (other than camera stream) of the participant
          // and surely it will be "SharedScreen" video track.
          // moving 1st video track (camera stream) to participants
          this.renderer.setStyle(cameraTrackvideoElement, "height", "auto");
          const participantMainDiv: HTMLDivElement = this.renderer.createElement('div');
          participantMainDiv.setAttribute('id', participantDetailID);
          participantMainDiv.className = 'participant';
          const participantStreamDiv: HTMLDivElement = this.renderer.createElement('div');
          participantStreamDiv.className = 'participant-stream';
          this.renderer.appendChild(participantStreamDiv, cameraTrackvideoElement);
          this.renderer.appendChild(participantMainDiv, participantStreamDiv);
          const participantDetailDiv: HTMLDivElement = this.renderer.createElement('div');
          participantDetailDiv.className = 'participant-detail';
          participantDetailDiv.innerHTML = `<span class="participant-name">
                                              ${userName}
                                            </span>
                                            <span class="mic-icon">
                                              <i class="fa fa-microphone" id="streamMicIcon-${participantDetailID}"></i>
											</span>`;
          this.renderer.appendChild(participantMainDiv, participantDetailDiv);
          this.renderer.appendChild(this.particpantContainer.nativeElement, participantMainDiv);
        }
        if (isThisSharedScreenTrack) {
          this.renderer.setAttribute(element, 'data-id', 'shared-screen-video-' + participantDetailID);
        }
        else {
          this.renderer.setAttribute(element, 'data-id', 'video-' + participantDetailID);
        }
        // if (this.currentParticipent.participantType == "Admin") {
        //   this.mainParticipantName.nativeElement.innerHTML = "Test User";
        //   this.renderer.setStyle(element, 'height', '94vh');
        //   element.setAttribute('id', participantDetailID);
        //   this.renderer.appendChild(this.previewElement.nativeElement, element);
        // }
        // else if ((this.currentParticipent.participantType !== participantDetail.participantType
        // )) {
          this.mainParticipantName.nativeElement.innerHTML = userName;
          this.renderer.setStyle(element, 'height', '100%');
          element.setAttribute('id', participantDetailID);
          this.renderer.appendChild(this.previewElement.nativeElement, element);
        // }
        // else {
          // const participantMainDiv: HTMLDivElement = this.renderer.createElement('div');
          // participantMainDiv.setAttribute('id', participantDetailID);
          // participantMainDiv.className = 'participant';
          // const participantStreamDiv: HTMLDivElement = this.renderer.createElement('div');
          // participantStreamDiv.className = 'participant-stream';
          // this.renderer.appendChild(participantStreamDiv, element);
          // this.renderer.appendChild(participantMainDiv, participantStreamDiv);
          // const participantDetailDiv: HTMLDivElement = this.renderer.createElement('div');
          // participantDetailDiv.className = 'participant-detail';
          // this.renderer.appendChild(participantMainDiv, participantDetailDiv);
          // participantDetailDiv.innerHTML = `
          //               <span class="participant-name">
          //                 Test User
          //               </span>
          //               <span class="mic-icon">
          //                 <i class="fa fa-microphone" id="streamMicIcon-${participantDetailID}"></i>
          //               </span>`;
          // const participantToRemove = document.getElementById(participantDetailID);
          // if (participantToRemove) {
          //   participantToRemove.remove();
          // }
          // this.renderer.appendChild(this.particpantContainer.nativeElement, participantMainDiv);
        // }
      }
      else {
        this.renderer.appendChild(this.particpantContainer.nativeElement, element);
      }
      this.participantsChanged.emit(true);
      this.cdr.detectChanges();
      this.isConnected = true;
      this.isConnectionLost = false;
    }
  }

  private detachRemoteTrack(track: RemoteTrack, participantDetailID: any) {
    let sharedScreenTrackVideoElement = document.querySelector(`[data-id='shared-screen-video-${participantDetailID}'][data-tracksid=${track.sid}]`);
    if (this.isDetachable(track)) {
      track.detach().forEach(el => {
        if (el.tagName == "VIDEO" && el.id == participantDetailID) {
          this.isConnectionLost = true;
        }
        else {
          el.remove();
          this.isConnectionLost = false;
        }
      });
      this.participantsChanged.emit(true);
      // if sharescreen video track is going to detatch (Stop Sharing case) then setting camera video track to main view
      if ((!!sharedScreenTrackVideoElement)) {
        let participantVideoElement = document.querySelector(`[data-id='video-${participantDetailID}']`);
        document.getElementById(participantDetailID).remove();
        let participantOuterElement = document.getElementById(`${participantDetailID}`);
        if (!!participantVideoElement) {
          this.renderer.appendChild(this.previewElement.nativeElement, participantVideoElement);
          this.renderer.setStyle(participantVideoElement, 'height', '100%');
        }
        if (!!participantOuterElement) {
          participantOuterElement.remove();
        }
        this.isConnectionLost = false;
      }
    }
  }

  private isAttachable(track: RemoteTrack): track is RemoteAudioTrack | RemoteVideoTrack {
    return !!track &&
      ((track as RemoteAudioTrack).attach !== undefined ||
        (track as RemoteVideoTrack).attach !== undefined);
  }

  private isDetachable(track: RemoteTrack): track is RemoteAudioTrack | RemoteVideoTrack {
    return !!track &&
      ((track as RemoteAudioTrack).detach !== undefined ||
        (track as RemoteVideoTrack).detach !== undefined);
  }

  //#endregion

}
