import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosessionComponent } from './videosession.component';

describe('VideosessionComponent', () => {
  let component: VideosessionComponent;
  let fixture: ComponentFixture<VideosessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
