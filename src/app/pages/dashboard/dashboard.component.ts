import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UIBaseUrl } from 'src/app/constants/app.constants';
import { CommonService } from 'src/app/services/common.service';
import { VideochatService } from 'src/app/services/videochat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  rooms: any;

  constructor(private videoChatService: VideochatService, private cdr: ChangeDetectorRef, private commonService: CommonService) {
    this.getAllRooms();
  }

  createRoom() {
    let roomName: any = document.getElementById("simpleinput");
    if (roomName.value == null || roomName.value == undefined || roomName.value == "" || roomName.value == '') {
      this.commonService.showErrorAlert("Please enter a name for room");
      return false;
    }
    else {
      this.videoChatService.createRoom(roomName.value)
        .then((response: any) => {
          if (response) {
            if (response.result) {
              this.commonService.showErrorAlert(response.message);
            }
            else {
              roomName.value = "";
              this.commonService.showSuccessAlert("Success");
              this.getAllRooms();
            }
          }
          else {
            roomName.value = "";
            this.commonService.showSuccessAlert("Success");
            this.getAllRooms();
          }
        });
    }
  }

  getAllRooms() {
    this.videoChatService.getAllRooms()
      .subscribe((response: any) => {
        if (response.result.length > 0) {
          for (let result of response.result) {
            result.sid = UIBaseUrl + "/video/" + result.id;
          }
          this.rooms = response.result;
          this.cdr.detectChanges();
        }
        else {
          this.rooms = [];
        }
      })
  }

}
