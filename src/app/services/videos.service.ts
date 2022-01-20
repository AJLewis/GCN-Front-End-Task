import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videoUrl = "https://globalcyclingnetwork.com/api/devtask";
  videos: Object[] | undefined;

  constructor(private http: HttpClient) { }

  async getVideos() {
    return this.http.get<Object>(this.videoUrl).toPromise()
  }
}
