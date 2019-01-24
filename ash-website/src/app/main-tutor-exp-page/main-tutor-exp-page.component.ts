import { Component, OnInit } from '@angular/core';
import { Picture } from '../experience-arrays/picture';
import { russiaPics } from '../experience-arrays/russiaPics';
import { mexicoPics } from '../experience-arrays/mexicoPics';

@Component({
  selector: 'app-main-tutor-exp-page',
  templateUrl: './main-tutor-exp-page.component.html',
  styleUrls: ['./main-tutor-exp-page.component.css']
})
export class MainTutorExpPageComponent implements OnInit {


  russiaPhotos: Picture[] = russiaPics;
  mexicoPhotos: Picture[] = mexicoPics;

  mexicoPicIndex = 0;
  russiaPicIndex = 0;

  constructor() { }

  ngOnInit() {
  }



  prevMexicoSlide() {
    const mainPic: HTMLImageElement = document.querySelector('#mexicoImg');
    const mainPicDesc: HTMLElement = document.getElementById('mexicoImgDescription');

    if (Math.abs(this.mexicoPicIndex) >= this.mexicoPhotos.length) {

        this.mexicoPicIndex = 0;
        mainPic.src = this.mexicoPhotos[this.mexicoPicIndex].url;
        mainPicDesc.innerHTML = this.mexicoPhotos[this.mexicoPicIndex].description;

    } else if (Math.abs(this.mexicoPicIndex) === this.mexicoPhotos.length - 1) {

      this.mexicoPicIndex = 0;
      mainPic.src = this.mexicoPhotos[this.mexicoPicIndex].url;
      mainPicDesc.innerHTML = this.mexicoPhotos[this.mexicoPicIndex].description;

    } else {

      this.mexicoPicIndex--;
      mainPic.src = this.mexicoPhotos[Math.abs(this.mexicoPicIndex)].url;
      mainPicDesc.innerHTML = this.mexicoPhotos[Math.abs(this.mexicoPicIndex)].description;
    }

  }
  nextMexicoSlide() {
    const mainPic: HTMLImageElement = document.querySelector('#mexicoImg');
    const mainPicDesc: HTMLElement = document.getElementById('mexicoImgDescription');

    if (this.mexicoPicIndex >= this.mexicoPhotos.length) {

        this.mexicoPicIndex = 0;
        mainPic.src = this.mexicoPhotos[this.mexicoPicIndex].url;
        mainPicDesc.innerHTML = this.mexicoPhotos[this.mexicoPicIndex].description;

    } else if (this.mexicoPicIndex === this.mexicoPhotos.length - 1) {

      this.mexicoPicIndex = 0;
      mainPic.src = this.mexicoPhotos[this.mexicoPicIndex].url;
      mainPicDesc.innerHTML = this.mexicoPhotos[this.mexicoPicIndex].description;

    } else {

      this.mexicoPicIndex++;
      mainPic.src = this.mexicoPhotos[this.mexicoPicIndex].url;
      mainPicDesc.innerHTML = this.mexicoPhotos[this.mexicoPicIndex].description;
    }

  }



  prevRussiaSlide() {
    const mainPic: HTMLImageElement = document.querySelector('#russiaImg');
    const mainPicDesc: HTMLElement = document.getElementById('russiaImgDescription');

    if (Math.abs(this.russiaPicIndex) >= this.russiaPhotos.length) {

        this.russiaPicIndex = 0;
        mainPic.src = this.russiaPhotos[this.russiaPicIndex].url;
        mainPicDesc.innerHTML = this.russiaPhotos[this.russiaPicIndex].description;

    } else if (Math.abs(this.russiaPicIndex) === this.russiaPhotos.length - 1) {

      this.russiaPicIndex = 0;
      mainPic.src = this.russiaPhotos[this.russiaPicIndex].url;
      mainPicDesc.innerHTML = this.russiaPhotos[this.russiaPicIndex].description;

    } else {

      this.russiaPicIndex--;
      mainPic.src = this.russiaPhotos[Math.abs(this.russiaPicIndex)].url;
      mainPicDesc.innerHTML = this.russiaPhotos[Math.abs(this.russiaPicIndex)].description;
    }

  }
  nextRussiaSlide() {
    const mainPic: HTMLImageElement = document.querySelector('#russiaImg');
    const mainPicDesc: HTMLElement = document.getElementById('russiaImgDescription');

    if (this.russiaPicIndex >= this.russiaPhotos.length) {

        this.russiaPicIndex = 0;
        mainPic.src = this.russiaPhotos[this.russiaPicIndex].url;
        mainPicDesc.innerHTML = this.russiaPhotos[this.russiaPicIndex].description;

    } else if (this.russiaPicIndex === this.russiaPhotos.length - 1) {

      this.russiaPicIndex = 0;
      mainPic.src = this.russiaPhotos[this.russiaPicIndex].url;
      mainPicDesc.innerHTML = this.russiaPhotos[this.russiaPicIndex].description;

    } else {

      this.russiaPicIndex++;
      mainPic.src = this.russiaPhotos[this.russiaPicIndex].url;
      mainPicDesc.innerHTML = this.russiaPhotos[this.russiaPicIndex].description;
    }

  }

}
