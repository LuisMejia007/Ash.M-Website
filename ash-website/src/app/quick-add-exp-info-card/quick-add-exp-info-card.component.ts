import { Component, OnInit } from '@angular/core';
import { quickAddExp } from '../experience-arrays/quickAddExp';
import { QuickExp } from '../experience-arrays/quickExperience';
import {addExp } from '../experience-arrays/addExpArray';
import { SlideDownAnimation } from 'src/assets/animations/slideDown';
import { BehaviorSubject } from 'rxjs';
import { AnimationComponentServiceService } from '../animation-component-service.service';


@Component({
  selector: 'app-quick-add-exp-info-card',
  templateUrl: './quick-add-exp-info-card.component.html',
  styleUrls: ['./quick-add-exp-info-card.component.css'],
  animations: [SlideDownAnimation]
})
export class QuickAddExpInfoCardComponent implements OnInit {

  quickExp: QuickExp[] = quickAddExp;
  addExperiences =  addExp;
  animationState = 'close';


  constructor(private animationStateComponentService: AnimationComponentServiceService) { }
  ngOnInit() {
  }


  toggleSlideDown() {
    this.animationState = this.animationState === 'close' ? 'open' : 'close';
    this.animationStateComponentService.changeAnimationState(this.animationState);
    console.log('Animation State Sent: ' + this.animationState);
  }

}
