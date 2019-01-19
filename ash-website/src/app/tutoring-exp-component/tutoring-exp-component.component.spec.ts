import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringExpComponentComponent } from './tutoring-exp-component.component';

describe('TutoringExpComponentComponent', () => {
  let component: TutoringExpComponentComponent;
  let fixture: ComponentFixture<TutoringExpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoringExpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringExpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
