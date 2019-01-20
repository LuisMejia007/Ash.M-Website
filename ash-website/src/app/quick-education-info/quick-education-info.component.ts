import { Component, OnInit } from '@angular/core';
import { Education } from '../experience-arrays/education';
import { educationArray } from '../experience-arrays/educationArray';
import { SlideDownAnimation } from 'src/assets/animations/slideDown';


@Component({
  selector: 'app-quick-education-info',
  templateUrl: './quick-education-info.component.html',
  styleUrls: ['./quick-education-info.component.css'],
  animations: [SlideDownAnimation]
})
export class QuickEducationInfoComponent implements OnInit {

  quickEducationArray: Education[] = educationArray;
  animationState: string = 'close';
  constructor() { }

  ngOnInit() {
  }

  toggleSlideDown() {
    this.animationState = this.animationState === 'close' ? 'open' : 'close';
    console.log('Animation State: ' + this.animationState);
  }
}
