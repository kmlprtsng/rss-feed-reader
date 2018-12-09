import { TestBed, inject } from '@angular/core/testing';

import { UrlValidatorService } from './url-validator.service';

describe('UrlValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlValidatorService]
    });
  });

  it('should be created', inject([UrlValidatorService], (service: UrlValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
