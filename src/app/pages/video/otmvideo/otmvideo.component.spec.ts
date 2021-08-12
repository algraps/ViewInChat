import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtmvideoComponent } from './otmvideo.component';

describe('OtmvideoComponent', () => {
  let component: OtmvideoComponent;
  let fixture: ComponentFixture<OtmvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtmvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtmvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
