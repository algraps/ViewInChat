import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import $ from "jquery";
import { catchError, tap } from 'rxjs/operators';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { isNullOrUndefined } from 'util';
import { OverlayStyleInterface, OverlayStyles } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(private http: HttpClient) { }

  getCallWithBody(url: any, showloader = false, body = {}) {
    // if (showloader)
    // 	this.showLoader();
    return this.http.get(url + "?" + Object.keys(body).map(key => key + '=' + body[key]).join('&'))
      .pipe(
        tap((response: any) => {
          //this.hideLoader();
        }),
        catchError((error: HttpErrorResponse) => {
          this.hideLoader();
          return "e";
        })
      );
  }
  getCall(url: any, showloader = false) {
    // if (showloader) this.showLoader()
    return this.http.get(url)
      .pipe(
        tap((response: any) => {
          //this.hideLoader();
        }),
        catchError((error: HttpErrorResponse) => {
          this.hideLoader();
          return "e";
        })
      );
  }

  postCall(url: any, body?: any, showLoader = false) {
    // if (showLoader)
    // 	this.showLoader();
    var headers = new HttpHeaders({ 'content-type': 'application/json', 'data-type': 'json', 'UserTimeZone': new Date().getTimezoneOffset().toString() });
    return this.http.post(url, body, { headers: headers })
      .pipe(
        tap((response: any) => {
          //this.hideLoader();
        }),
        catchError((error: HttpErrorResponse) => {
          this.hideLoader();
          return "e";
        })
      );
  }

  putCall(url: any, body?: any) {
    // this.showLoader();
    var headers = new HttpHeaders({ 'content-type': 'application/json', 'data-type': 'json', });
    return this.http.put(url, body, { headers: headers })
      .pipe(
        tap((response: any) => {
          //this.hideLoader();
        }),
        catchError((error: HttpErrorResponse) => {
          this.hideLoader();
          return "e";
        })
      );
  }

  deleteCall(url: any) {
    // this.showLoader();
    return this.http.delete(url)
      .pipe(
        tap((response: any) => {

          if (response.success) {
            this.hideLoader();
          }
          this.hideLoader();
        }),
        catchError((error: HttpErrorResponse) => {
          this.hideLoader();
          return "e";
        })
      );
  }

  showLoader(msg: string = "Loading... please wait!", style: OverlayStyleInterface = OverlayStyles.Transparent) {
    $("#globalOverlayMsg").text(msg);
    $("#globalOverlayMsg").css("color", style.TextColor)

    // loader was not showing while modal is active, this is going to find maximum z-index and set +1 for overlay;
    var maxZ = Math.max.apply(null, //  https://stackoverflow.com/questions/1118198/how-can-you-figure-out-the-highest-z-index-in-your-document
      $.map($('body *'), function (e, n) {
        if ($(e).css('position') != 'static')
          return parseInt($(e).css('z-index')) || 1;
      }));
    $('#globalOverlay').css('z-index', (maxZ + 1)); //resets z-index to 0 for all other
    $('#globalOverlay').css('position', "fixed");
    $('#globalOverlay').show();
    $("#globalOverlay").css("background-color", style.OverLayColor)
  }

  showDecisionAlert(yesCallBack, noCallBack = null, title = 'Are you sure?', text = 'You want to perform this action', noButtonText = "No", yesButtonText = "Yes", _icon: SweetAlertIcon = "warning") {
    Swal.fire({
      title: title,
      text: text,
      icon: _icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: yesButtonText,
      cancelButtonText: noButtonText
    }).then((result) => {
      if (result.value) {
        if (!isNullOrUndefined(yesCallBack)) {
          yesCallBack();
        }
      } else {
        if (!isNullOrUndefined(noCallBack)) {
          noCallBack();
        }
      }
    })
  }

  showCustomAlert(yesCallBack, noCallBack = null, title = 'Are you sure?', text = 'You want to perform this action', noButtonText = "No", yesButtonText = "Yes", _icon: SweetAlertIcon = "warning") {
    Swal.fire({
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: yesButtonText,
      cancelButtonText: noButtonText
    }).then((result) => {
      if (result.value) {
        if (!isNullOrUndefined(yesCallBack)) {
          yesCallBack();
        }
      } else {
        if (!isNullOrUndefined(noCallBack)) {
          noCallBack();
        }
      }
    })
  }

  showErrorAlert(text = 'Something went wrong!', title = 'Oops...') {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
    })
  }

  showWarningAlert(text = 'Something went wrong!', title = 'Oops...', confirmButtonText = 'OK', showConfirmButton = false) {
    Swal.fire({
      icon: 'warning',
      title: title,
      html: text,
      confirmButtonText: confirmButtonText,
      showConfirmButton: showConfirmButton
    })
  }

  // showSuccessAlert = async (text = 'Request completed!', title = 'Congratulations!') => {
  // 	Swal.fire({
  // 		icon: 'success',
  // 		title: title,
  // 		text: text,
  // 	});
  // }

  showSuccessAlert = async (text = 'Request completed!', title = 'Congratulations!', callback: Function = null) => {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
    }).then(function () {
      if (callback != null) callback();
    });
  }

  hideLoader() {
    $('#globalOverlay').hide();
  }

  timeTo12HrFormat(time) {   // Take a time in 24 hour format and format it in 12 hour format
    var time_part_array = time.split(":");
    var ampm = 'AM';
    if (time_part_array[0] >= 12) {
      ampm = 'PM';
    }
    if (time_part_array[0] > 12) {
      time_part_array[0] = time_part_array[0] - 12;
    }
    var formatted_time = time_part_array[0] + ':' + time_part_array[1] + ' ' + ampm;
    return formatted_time;
  }

  partition(arr: any[], chunkSize: number) { // Partition array into specified chunks
    let copy = [...arr];
    let result = [];
    while (copy.length > 0) {
      let temp = copy.splice(0, chunkSize);
      result.push(temp);
    }
    return result;
  }

  extract24HTimeToProps(time, incrementHoursBy = 0, incrementMinutesBy = 0) {
    return {
      hour: parseInt(time.split(':')[0]) + incrementHoursBy,
      minute: parseInt(time.split(':')[1]) + incrementMinutesBy,
      second: 0
    }
  }
  array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  };
  cloneObject(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  }
}

