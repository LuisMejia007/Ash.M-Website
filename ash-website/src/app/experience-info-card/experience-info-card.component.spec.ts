import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceInfoCardComponent } from './experience-info-card.component';

describe('ExperienceInfoCardComponent', () => {
  let component: ExperienceInfoCardComponent;
  let fixture: ComponentFixture<ExperienceInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
