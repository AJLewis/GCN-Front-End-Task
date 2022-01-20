import { VideosService } from './../../services/videos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos: any;
  categories = ["Latest Releases", "Most Popular", "Top 10's", "Technology", "Just For You", "GCN+"]
  constructor(private videoService: VideosService) { }

  ngOnInit() {
    this.videoService.getVideos().then((videos) => {
      this.videos = videos;
      console.log(this.videos)
    });
  }
}
