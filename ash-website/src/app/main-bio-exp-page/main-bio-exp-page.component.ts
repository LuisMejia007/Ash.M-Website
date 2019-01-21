import { Component, OnInit } from '@angular/core';
import {belizePics} from '../experience-arrays/belizePhotosArray';
import { Picture } from '../experience-arrays/picture';
@Component({
  selector: 'app-main-bio-exp-page',
  templateUrl: './main-bio-exp-page.component.html',
  styleUrls: ['./main-bio-exp-page.component.css']
})
export class MainBioExpPageComponent implements OnInit {

  belizePictures: Picture[] = belizePics;
  belizePicIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  prevSlide() {
    const mainPic: HTMLImageElement = document.querySelector('#belizeImg');
    const mainPicDesc: HTMLElement = document.getElementById('belizeImgDescription');

    if (Math.abs(this.belizePicIndex) >= this.belizePictures.length) {

        this.belizePicIndex = 0;
        mainPic.src = this.belizePictures[this.belizePicIndex].url;
        mainPicDesc.innerHTML = this.belizePictures[this.belizePicIndex].description;

    } else if (Math.abs(this.belizePicIndex) === this.belizePictures.length - 1) {

      this.belizePicIndex = 0;
      mainPic.src = this.belizePictures[this.belizePicIndex].url;
      mainPicDesc.innerHTML = this.belizePictures[this.belizePicIndex].description;

    } else {

      this.belizePicIndex--;
      mainPic.src = this.belizePictures[Math.abs(this.belizePicIndex)].url;
      mainPicDesc.innerHTML = this.belizePictures[this.belizePicIndex].description;
    }

  }
  nextSlide() {
    const mainPic: HTMLImageElement = document.querySelector('#belizeImg');
    const mainPicDesc: HTMLElement = document.getElementById('belizeImgDescription');

    if (this.belizePicIndex >= this.belizePictures.length) {

        this.belizePicIndex = 0;
        mainPic.src = this.belizePictures[this.belizePicIndex].url;
        mainPicDesc.innerHTML = this.belizePictures[this.belizePicIndex].description;

    } else if (this.belizePicIndex === this.belizePictures.length - 1) {

      this.belizePicIndex = 0;
      mainPic.src = this.belizePictures[this.belizePicIndex].url;
      mainPicDesc.innerHTML = this.belizePictures[this.belizePicIndex].description;

    } else {

      this.belizePicIndex++;
      mainPic.src = this.belizePictures[this.belizePicIndex].url;
      mainPicDesc.innerHTML = this.belizePictures[this.belizePicIndex].description;
    }

  }
}
