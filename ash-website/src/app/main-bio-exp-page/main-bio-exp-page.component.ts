import { Component, OnInit } from '@angular/core';
import {belizePics} from '../experience-arrays/belizePhotosArray';
@Component({
  selector: 'app-main-bio-exp-page',
  templateUrl: './main-bio-exp-page.component.html',
  styleUrls: ['./main-bio-exp-page.component.css']
})
export class MainBioExpPageComponent implements OnInit {

  belizePictures = belizePics;
  belizePicIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  nextSlide() {
    const mainPic: HTMLImageElement = document.querySelector('#belizeImg');

    if (this.belizePicIndex >= this.belizePictures.length) {

        this.belizePicIndex = 0;
        mainPic.src = this.belizePictures[this.belizePicIndex];

    } else if (this.belizePicIndex === this.belizePictures.length - 1) {

      this.belizePicIndex = 0;
      mainPic.src = this.belizePictures[this.belizePicIndex];

    } else {

      this.belizePicIndex++;
      mainPic.src = this.belizePictures[this.belizePicIndex];
    }

  }
}
