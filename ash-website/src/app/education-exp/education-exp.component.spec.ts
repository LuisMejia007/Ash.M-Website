import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationExpComponent } from './education-exp.component';

describe('EducationExpComponent', () => {
  let component: EducationExpComponent;
  let fixture: ComponentFixture<EducationExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
