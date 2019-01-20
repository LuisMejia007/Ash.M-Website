import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBioExpPageComponent } from './main-bio-exp-page.component';

describe('MainBioExpPageComponent', () => {
  let component: MainBioExpPageComponent;
  let fixture: ComponentFixture<MainBioExpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBioExpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBioExpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
