// base imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// essential imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// compoenents
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { SearchbarComponent } from './views/searchbar/searchbar.component';
import { HorizontalVideosComponent } from './views/horizontal-videos/horizontal-videos.component';

//services
import { VideosService } from './services/videos.service';
import { HttpClientModule } from '@angular/common/http';
import { BottomNavBarComponent } from './views/bottom-navbar/bottom-navbar.component';
import { MostPopularComponent } from './views/most-popular/most-popular.component';
import { VideoListContainerComponent } from './views/video-list-container/video-list-container.component';
import { LatestVideosComponent } from './views/latest-videos/latest-videos.component';
import { CategoryComponent } from './views/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchbarComponent,
    HorizontalVideosComponent,
    BottomNavBarComponent,
    MostPopularComponent,
    VideoListContainerComponent,
    LatestVideosComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    VideosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
