import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import * as FontAwesomeBrands from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() pageTitle = "Home";
  showMenuPanel = false;
  showCategories = false;
  showPresenters = false;
  fontAwesome = FontAwesome;
  fontAwesomeBrands = FontAwesomeBrands;
  categories = ["GCN Show", "How To", "Maintenance", "Ask GCN", "Training", "Features", "Top 10's", "GCN Racing", "GCN Tech"]
  presenters = ["Conor Dunne", "Daniel Lloyd", "James Lowsley-Williams", "Jon Cannings", "Manon Lloyd", "Oliver Bridgewood", "Simon Richardson", "Tom Last"]
  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.showMenuPanel = !this.showMenuPanel;
  }

  toggleCategories() {
    this.showPresenters = false;
    this.showCategories = !this.showCategories
  }

  togglePresenters() {
    this.showCategories = false;
    this.showPresenters = !this.showPresenters
  }
}
