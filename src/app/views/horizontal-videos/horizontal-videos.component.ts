import { Component, Input, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-horizontal-videos',
  templateUrl: './horizontal-videos.component.html',
  styleUrls: ['./horizontal-videos.component.scss']
})
export class HorizontalVideosComponent implements OnInit {

  @Input() title: string = "";
  videos: any;

  constructor(private videoService: VideosService) { }

  async ngOnInit() {
    await this.getVideos();
  }

  async getVideos() {
    // if topics was populated in the data I would use this to retrieve the correct videos, instead I randomly pick 5.
    await this.videoService.getVideos().then((videos:any) => {
      let random = Math.abs(Math.floor(Math.random()*(0-15+1)+0));
      this.videos = videos?.slice(random, random+5);
    })
  }
}
