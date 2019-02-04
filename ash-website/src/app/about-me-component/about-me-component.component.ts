import { Component, OnInit } from '@angular/core';
import { HomeAnimation } from 'src/assets/animations/homeAnimation';

@Component({
  selector: 'app-about-me-component',
  templateUrl: './about-me-component.component.html',
  styleUrls: ['./about-me-component.component.css'],
  animations: [HomeAnimation]
})
export class AboutMeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
