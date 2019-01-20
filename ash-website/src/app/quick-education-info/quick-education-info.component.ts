import { Component, OnInit } from '@angular/core';
import { Education } from '../experience-arrays/education';
import { educationArray } from '../experience-arrays/educationArray';

@Component({
  selector: 'app-quick-education-info',
  templateUrl: './quick-education-info.component.html',
  styleUrls: ['./quick-education-info.component.css']
})
export class QuickEducationInfoComponent implements OnInit {

  quickEducationArray: Education[] = educationArray;
  constructor() { }

  ngOnInit() {
  }

}
