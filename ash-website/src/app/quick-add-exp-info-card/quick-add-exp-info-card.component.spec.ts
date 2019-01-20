import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAddExpInfoCardComponent } from './quick-add-exp-info-card.component';

describe('QuickAddExpInfoCardComponent', () => {
  let component: QuickAddExpInfoCardComponent;
  let fixture: ComponentFixture<QuickAddExpInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickAddExpInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAddExpInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
