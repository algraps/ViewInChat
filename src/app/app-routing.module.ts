import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MeetingendedComponent } from './pages/meetingended/meetingended.component';
import { VideosessionComponent } from './pages/video/videosession/videosession.component';

export const routes: Routes = [
  //{ path: '', component: DashboardComponent, pathMatch: 'full' },
  {
    path: 'video/:id',
    component: VideosessionComponent,
  },
  {
    path: 'meeting-ended',
    component: MeetingendedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
