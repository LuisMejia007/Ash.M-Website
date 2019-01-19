import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalExpComponentComponent } from './additional-exp-component.component';

describe('AdditionalExpComponentComponent', () => {
  let component: AdditionalExpComponentComponent;
  let fixture: ComponentFixture<AdditionalExpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalExpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalExpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
