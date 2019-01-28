import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationComponentServiceService {

  constructor() { }

  animationState = new BehaviorSubject<string>('up');

  changeAnimationState(state: any) {
    this.animationState.next(state);
  }

  getAnimationState() {
    return this.animationState.asObservable();
  }
}
