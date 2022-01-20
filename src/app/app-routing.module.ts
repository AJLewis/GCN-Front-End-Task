import { CategoryComponent } from './views/category/category.component';
import { LatestVideosComponent } from './views/latest-videos/latest-videos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MostPopularComponent } from './views/most-popular/most-popular.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'most-popular', component: MostPopularComponent},
  {path: 'latest-videos', component: LatestVideosComponent},
  {path: 'category/:cat', component: CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
