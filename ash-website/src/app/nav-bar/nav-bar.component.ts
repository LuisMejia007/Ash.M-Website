import { Component, OnInit } from '@angular/core';
import { SlideFromLeftAnimation } from '../assets/animations/slideFromLeft';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [SlideFromLeftAnimation]
})
export class NavBarComponent implements OnInit {

  sideBarMenu = 'close';

  constructor() { }

  ngOnInit() {
  }

  toggleSideNavMenu() {
    this.sideBarMenu = this.sideBarMenu === 'close' ? 'open' : 'close';
  }

}
