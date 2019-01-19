import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../experience-arrays/experience';

@Component({
  selector: 'app-experience-info-card',
  templateUrl: './experience-info-card.component.html',
  styleUrls: ['./experience-info-card.component.css']
})
export class ExperienceInfoCardComponent implements OnInit {

  @Input() experienceObj: Experience;

  constructor() { }

  ngOnInit() {
  }

}
