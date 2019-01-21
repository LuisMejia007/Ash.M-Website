import { Component, OnInit } from '@angular/core';
import {belizePics} from '../experience-arrays/belizePhotosArray';
import { Picture } from '../experience-arrays/picture';
import {mosquitoPhotosArray} from '../experience-arrays/mosquitoesPhotosArray';
@Component({
  selector: 'app-main-bio-exp-page',
  templateUrl: './main-bio-exp-page.component.html',
  styleUrls: ['./main-bio-exp-page.component.css']
})
export class MainBioExpPageComponent implements OnInit {

  belizePictures: Picture[] = belizePics;
  belizePicIndex = 0;

  gambusiaAffinisPics: Picture[] = mosquitoPhotosArray;
  gambusiaPicIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  prevBelizeSlide() {
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
      mainPicDesc.innerHTML = this.belizePictures[Math.abs(this.belizePicIndex)].description;
    }

  }
  nextBelizeSlide() {
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



  prevGambusiaSlide() {
    const mainPic: HTMLImageElement = document.querySelector('#gambusiaImg');
    const mainPicDesc: HTMLElement = document.getElementById('gambusiaImgDescription');

    if (Math.abs(this.gambusiaPicIndex) >= this.gambusiaAffinisPics.length) {

        this.gambusiaPicIndex = 0;
        mainPic.src = this.gambusiaAffinisPics[this.gambusiaPicIndex].url;
        mainPicDesc.innerHTML = this.gambusiaAffinisPics[this.gambusiaPicIndex].description;

    } else if (Math.abs(this.gambusiaPicIndex) === this.gambusiaAffinisPics.length - 1) {

      this.gambusiaPicIndex = 0;
      mainPic.src = this.gambusiaAffinisPics[this.gambusiaPicIndex].url;
      mainPicDesc.innerHTML = this.gambusiaAffinisPics[this.gambusiaPicIndex].description;

    } else {

      this.gambusiaPicIndex--;
      mainPic.src = this.gambusiaAffinisPics[Math.abs(this.gambusiaPicIndex)].url;
      mainPicDesc.innerHTML = this.gambusiaAffinisPics[Math.abs(this.gambusiaPicIndex)].description;
    }

  }
  nextGambusiaSlide() {
    const mainPic: HTMLImageElement = document.querySelector('#gambusiaImg');
    const mainPicDesc: HTMLElement = document.getElementById('gambusiaImgDescription');

    if (this.gambusiaPicIndex >= this.gambusiaAffinisPics.length) {

        this.gambusiaPicIndex = 0;
        mainPic.src = this.gambusiaAffinisPics[this.gambusiaPicIndex].url;
        mainPicDesc.innerHTML = this.gambusiaAffinisPics[this.gambusiaPicIndex].description;

    } else if (this.gambusiaPicIndex === this.gambusiaAffinisPics.length - 1) {

      this.gambusiaPicIndex = 0;
      mainPic.src = this.gambusiaAffinisPics[this.gambusiaPicIndex].url;
      mainPicDesc.innerHTML = this.gambusiaAffinisPics[this.gambusiaPicIndex].description;

    } else {

      this.gambusiaPicIndex++;
      mainPic.src = this.gambusiaAffinisPics[this.gambusiaPicIndex].url;
      mainPicDesc.innerHTML = this.gambusiaAffinisPics[this.gambusiaPicIndex].description;
    }

  }

}
