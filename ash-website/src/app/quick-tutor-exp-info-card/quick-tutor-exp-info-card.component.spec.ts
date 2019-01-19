import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTutorExpInfoCardComponent } from './quick-tutor-exp-info-card.component';

describe('QuickTutorExpInfoCardComponent', () => {
  let component: QuickTutorExpInfoCardComponent;
  let fixture: ComponentFixture<QuickTutorExpInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickTutorExpInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickTutorExpInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
