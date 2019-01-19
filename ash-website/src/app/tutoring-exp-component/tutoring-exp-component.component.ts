import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../experience-arrays/experience';
import {tutorExp} from '../experience-arrays/tutorExpArray';
@Component({
  selector: 'app-tutoring-exp-component',
  templateUrl: './tutoring-exp-component.component.html',
  styleUrls: ['./tutoring-exp-component.component.css']
})
export class TutoringExpComponentComponent implements OnInit {

  @Input() tutorExperiences: Experience[] = tutorExp;
  constructor() { }

  ngOnInit() {
  }

}
