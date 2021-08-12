import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './pages/loader/loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { VideochatService } from './services/videochat.service';
import { CommonService } from './services/common.service';
import { DatetimeService } from './services/datetime.service';
import { StorageService } from './services/storage.service';
import { InterceptService } from './services';
import { VideosessionComponent } from './pages/video/videosession/videosession.component';
import { CameraComponent } from './pages/video/camera/camera.component';
import { OtmvideoComponent } from './pages/video/otmvideo/otmvideo.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MeetingendedComponent } from './pages/meetingended/meetingended.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    VideosessionComponent,
    CameraComponent,
    OtmvideoComponent,
    DashboardComponent,
    MeetingendedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  exports:[AppComponent, VideosessionComponent, CameraComponent, ],
  providers: [CommonService, DatetimeService, InterceptService, StorageService, VideochatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
