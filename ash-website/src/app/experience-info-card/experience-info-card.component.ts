import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../experience-arrays/experience';
import { AnimationComponentServiceService } from '../animation-component-service.service';
import { SlideDownAnimation } from 'src/assets/animations/slideDown';

@Component({
  selector: 'app-experience-info-card',
  templateUrl: './experience-info-card.component.html',
  styleUrls: ['./experience-info-card.component.css'],
  animations: [SlideDownAnimation]
})
export class ExperienceInfoCardComponent implements OnInit {

  @Input() experienceObj: Experience;
  animationState: string;

  constructor(private animationStateComponentService: AnimationComponentServiceService) { }

  ngOnInit() {
    this.animationStateComponentService
    .getAnimationState()
    .subscribe(state => {
      this.animationState = state;
      console.log('Animation State Received: ' + this.animationState);
    });
  }

}
