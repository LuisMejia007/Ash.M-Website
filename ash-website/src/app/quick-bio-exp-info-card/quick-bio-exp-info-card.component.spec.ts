import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickBioExpInfoCardComponent } from './quick-bio-exp-info-card.component';

describe('QuickBioExpInfoCardComponent', () => {
  let component: QuickBioExpInfoCardComponent;
  let fixture: ComponentFixture<QuickBioExpInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickBioExpInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickBioExpInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
