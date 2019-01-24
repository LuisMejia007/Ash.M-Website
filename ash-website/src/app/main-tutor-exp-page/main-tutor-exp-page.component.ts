import { Component, OnInit } from '@angular/core';
import { Picture } from '../experience-arrays/picture';
import { russiaPics } from '../experience-arrays/russiaPics';

@Component({
  selector: 'app-main-tutor-exp-page',
  templateUrl: './main-tutor-exp-page.component.html',
  styleUrls: ['./main-tutor-exp-page.component.css']
})
export class MainTutorExpPageComponent implements OnInit {


  russiaPhotos: Picture[] = russiaPics;
  
  constructor() { }

  ngOnInit() {
  }

}
