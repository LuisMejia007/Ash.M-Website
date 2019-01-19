import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience-arrays/experience';
import {BioExp} from '../experience-arrays/bioExpArray';
@Component({
  selector: 'app-education-exp',
  templateUrl: './education-exp.component.html',
  styleUrls: ['./education-exp.component.css']
})
export class EducationExpComponent implements OnInit {


  bioExperiences: Experience[] = BioExp;
  constructor() { }

  ngOnInit() {
  }

}
