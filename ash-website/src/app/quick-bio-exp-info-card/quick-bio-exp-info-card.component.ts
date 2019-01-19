import { Component, OnInit } from '@angular/core';
import {quickBioExp} from '../experience-arrays/quickBioExp';
import { QuickExp } from '../experience-arrays/quickExperience';
@Component({
  selector: 'app-quick-bio-exp-info-card',
  templateUrl: './quick-bio-exp-info-card.component.html',
  styleUrls: ['./quick-bio-exp-info-card.component.css']
})
export class QuickBioExpInfoCardComponent implements OnInit {

  quickBioExpArr: QuickExp[] = quickBioExp;
  constructor() { }

  ngOnInit() {
  }

}
