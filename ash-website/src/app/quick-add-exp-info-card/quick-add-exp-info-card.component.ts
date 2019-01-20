import { Component, OnInit } from '@angular/core';
import { quickAddExp } from '../experience-arrays/quickAddExp';
import { QuickExp } from '../experience-arrays/quickExperience';

@Component({
  selector: 'app-quick-add-exp-info-card',
  templateUrl: './quick-add-exp-info-card.component.html',
  styleUrls: ['./quick-add-exp-info-card.component.css']
})
export class QuickAddExpInfoCardComponent implements OnInit {

  quickExp: QuickExp[] = quickAddExp;

  constructor() { }
  ngOnInit() {
  }

}
