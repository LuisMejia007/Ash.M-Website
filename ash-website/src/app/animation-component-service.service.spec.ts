import { TestBed, inject } from '@angular/core/testing';

import { AnimationComponentServiceService } from './animation-component-service.service';

describe('AnimationComponentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimationComponentServiceService]
    });
  });

  it('should be created', inject([AnimationComponentServiceService], (service: AnimationComponentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
