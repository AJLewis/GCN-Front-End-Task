import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalVideosComponent } from './horizontal-videos.component';

describe('HorizontalVideosComponent', () => {
  let component: HorizontalVideosComponent;
  let fixture: ComponentFixture<HorizontalVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
