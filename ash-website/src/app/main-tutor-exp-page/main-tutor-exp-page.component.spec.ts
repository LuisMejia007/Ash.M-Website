import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTutorExpPageComponent } from './main-tutor-exp-page.component';

describe('MainTutorExpPageComponent', () => {
  let component: MainTutorExpPageComponent;
  let fixture: ComponentFixture<MainTutorExpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTutorExpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTutorExpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
