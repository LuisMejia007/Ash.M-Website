import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddExpPageComponent } from './main-add-exp-page.component';

describe('MainAddExpPageComponent', () => {
  let component: MainAddExpPageComponent;
  let fixture: ComponentFixture<MainAddExpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAddExpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAddExpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
