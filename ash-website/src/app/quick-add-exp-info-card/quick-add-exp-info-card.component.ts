import { Component, OnInit } from '@angular/core';
import { quickAddExp } from '../experience-arrays/quickAddExp';
import { QuickExp } from '../experience-arrays/quickExperience';
import {addExp } from '../experience-arrays/addExpArray';
import { SlideDownAnimation } from 'src/assets/animations/slideDown';
import { BehaviorSubject } from 'rxjs';
import { AnimationComponentServiceService } from '../animation-component-service.service';
import { SlideDown2Animation } from 'src/assets/animations/slideDown2';


@Component({
  selector: 'app-quick-add-exp-info-card',
  templateUrl: './quick-add-exp-info-card.component.html',
  styleUrls: ['./quick-add-exp-info-card.component.css'],
  animations: [SlideDownAnimation, SlideDown2Animation]
})
export class QuickAddExpInfoCardComponent implements OnInit {

  addExperiences =  addExp;
  animationState = 'up';


  constructor(private animationStateComponentService: AnimationComponentServiceService) { }
  ngOnInit() {
  }


  toggleSlideDown() {
    this.animationState = this.animationState === 'up' ? 'down' : 'up';
    this.animationStateComponentService.changeAnimationState(this.animationState);
    console.log('Animation State Sent: ' + this.animationState);
  }

}
