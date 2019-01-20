import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickEducationInfoComponent } from './quick-education-info.component';

describe('QuickEducationInfoComponent', () => {
  let component: QuickEducationInfoComponent;
  let fixture: ComponentFixture<QuickEducationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickEducationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickEducationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
