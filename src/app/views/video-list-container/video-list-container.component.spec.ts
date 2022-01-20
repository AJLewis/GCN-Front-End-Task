import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListContainerComponent } from './video-list-container.component';

describe('VideoListContainerComponent', () => {
  let component: VideoListContainerComponent;
  let fixture: ComponentFixture<VideoListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
