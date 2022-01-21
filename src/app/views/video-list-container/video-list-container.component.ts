import { Component, OnInit, Input } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-video-list-container',
  templateUrl: './video-list-container.component.html',
  styleUrls: ['./video-list-container.component.scss']
})
export class VideoListContainerComponent implements OnInit {

  @Input() title: string = "";
  videos: any;

  constructor(private videoService: VideosService) { }

  async ngOnInit() {
    await this.getVideos()
  }

  async getVideos() {
    // if topics was populated in the data I would use this to retrieve the correct videos, instead I randomly pick 5.
    await this.videoService.getVideos().then((videos:any) => {
      this.videos = videos;
    })
  }
}
