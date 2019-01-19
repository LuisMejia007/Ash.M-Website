import { Component, OnInit } from '@angular/core';
import { quickTutorExp } from '../experience-arrays/quickTutorExp';
import { QuickExp } from '../experience-arrays/quickExperience';
@Component({
  selector: 'app-quick-tutor-exp-info-card',
  templateUrl: './quick-tutor-exp-info-card.component.html',
  styleUrls: ['./quick-tutor-exp-info-card.component.css']
})
export class QuickTutorExpInfoCardComponent implements OnInit {

  quickTutorExps: QuickExp[] = quickTutorExp;

  constructor() { }

  ngOnInit() {
  }

}
