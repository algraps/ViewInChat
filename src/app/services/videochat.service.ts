import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { connect, ConnectOptions, LocalTrack, Room } from 'twilio-video';
import { ApiUrls } from '../constants/app.constants';
import { CommonService } from './common.service';

interface AuthToken {
  token: string;
}

export interface NamedRoom {
  id: string;
  name: string;
  maxParticipants?: number;
  participantCount: number;
}

export type Rooms = NamedRoom[];

@Injectable({
  providedIn: 'root'
})
export class VideochatService {

  $roomsUpdated: Observable<boolean>;
  createRoomResponse: any;
  public room: any;

  private roomBroadcast = new ReplaySubject<boolean>();
  auth: any;

  constructor(private readonly http: HttpClient, private commonService: CommonService) {
    this.$roomsUpdated = this.roomBroadcast.asObservable();
  }

  createRoom = (intervieweId) => {

    let _this = this;
    return new Promise(function (resolve, reject) {
      _this.http.post(`${ApiUrls.CreateRoom}/${intervieweId}`, {})
        .subscribe(async (res: any) => {

          _this.createRoomResponse = false;
          if (!!res && res.statusCode == 200 && res.success) {
            _this.room = res.result;
            resolve(_this.room);
            //return _this.room;
          }
          else if (!!res && res.statusCode == 400 && res.success == false) {
            const ress: any = res;
            resolve(ress);
            //return ress;
          }
          else if (!!res && res.statusCode == 404 && res.success == false) {
            _this.commonService.showErrorAlert(res.message, 'An error has been occured!');
            _this.createRoomResponse = true;
            resolve(false);
          }
        }, error => {
          console.error('Error While creating room (createRoom)', error);
          reject(false);
        });
    });
  }


  updateSessionChatRoomSID(data: any) {
    let _this = this;
    return new Promise(function (resolve, reject) {
      _this.commonService.postCall(`${ApiUrls.UpdateSessionChatRoomSID}`, data)
        .subscribe((res: any) => {
          if (!!res.success && res.statusCode == 200) {
            resolve(res.result);
          }
          else {
            reject(null);
            console.error("Error while (UpdateSessionChatRoomSID)", res.statusCode, res.message);
          }
        }, error => { console.error("Error while (UpdateSessionChatRoomSID)", error); reject(null); });
    });
  }

  createRoomUID(roomName) {
    let _this = this;
    return new Promise(function (resolve, reject) {
      _this.commonService.postCall(`${ApiUrls.CreateRoomUID}`, roomName)
        .subscribe((res: any) => {
          if (!!res.success && res.statusCode == 200) {
            resolve(res.result);
          }
          else {
            reject(null);
            console.error("Error while (UpdateSessionChatRoomSID)", res.statusCode, res.message);
          }
        }, error => { console.error("Error while (UpdateSessionChatRoomSID)", error); reject(null); });
    });
  }

  private async getAuthToken(currentParticipantGuid) {

    //currentParticipantGuid = "E4C31A85-9330-4A15-833F-6FDB9B7634E2";
    this.auth =
      await this.http
        .get<AuthToken>(`${ApiUrls.Token}/${currentParticipantGuid}`)
        .toPromise()
        .catch(err => {
          console.error(err);
        });

    return this.auth.token;
  }

  getAllRooms() {
    return this.commonService.getCall(ApiUrls.Rooms).pipe(finalize(() => {}));
  }

  async joinOrCreateRoom(name: string, tracks: LocalTrack[], currentParticipantGuid) {
    let room: Room = null;
    try {
      const token = await this.getAuthToken(currentParticipantGuid);
      room =
        await connect(
          token, {
            name,
            tracks,
            dominantSpeaker: true,
            record_participants_on_connect: false
          } as ConnectOptions);
    } catch (error) {
      console.log(error.message);
      this.commonService.showWarningAlert("We’re unable to connect you to the meeting room. Please check your system media devices. Ensure that both microphone and camera are working properly and you have allowed the browser to use the media devices. <br> If you have any questions", "Unable to connect to meeting room!");
    } finally {
      if (room) {
        this.roomBroadcast.next(true);
      }
    }

    return room;
  }

  nudge() {
    this.roomBroadcast.next(true);
  }

}
