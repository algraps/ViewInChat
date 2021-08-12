import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingendedComponent } from './meetingended.component';

describe('MeetingendedComponent', () => {
  let component: MeetingendedComponent;
  let fixture: ComponentFixture<MeetingendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
