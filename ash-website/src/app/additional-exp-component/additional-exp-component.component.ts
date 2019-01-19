import { Component, OnInit, Input } from '@angular/core';
import {Experience} from '../experience-arrays/experience';
import {addExp} from '../experience-arrays/addExpArray';
@Component({
  selector: 'app-additional-exp-component',
  templateUrl: './additional-exp-component.component.html',
  styleUrls: ['./additional-exp-component.component.css']
})
export class AdditionalExpComponentComponent implements OnInit {

  @Input() addExperiences: Experience[] = addExp;
  constructor() { }

  ngOnInit() {
  }

}
