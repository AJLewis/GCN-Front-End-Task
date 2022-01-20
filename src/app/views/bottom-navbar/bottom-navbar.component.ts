import { Component, OnInit,HostListener } from '@angular/core';
import { Router, Event, NavigationEnd} from '@angular/router';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss']
})
export class BottomNavBarComponent implements OnInit {
  fontAwesome = FontAwesome;
  categoryBtnClicked: boolean = false;
  isCategoryPage: boolean = false;
  categoryMenuIsOpen: boolean = false;
  switchMenuIsOpen: boolean = false;
  categories = ["GCN Show", "How To", "Maintenance", "Ask GCN", "Training", "Features", "Top 10's", "GCN Racing", "GCN Tech"]
  switchOptions = ["GCN+", "Join The Club", "Visit Our Shop", "Subscribe To YouTube", "Download App", "Social Channels"]


  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          this.isCategoryPage = event.url.includes('/category')
      }
   })
  }

  ngOnInit(): void {
  }

  displayCategoryMenu() {
    this.switchMenuIsOpen = false;
    this.categoryMenuIsOpen = !this.categoryMenuIsOpen;
  }

  displaySwitchMenu() {
    this.categoryMenuIsOpen = false;
    this.switchMenuIsOpen = !this.switchMenuIsOpen;
  }

  hideMenu() {
    this.categoryMenuIsOpen = false;
    this.switchMenuIsOpen = false;
  }
}
