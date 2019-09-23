import { TestBed } from '@angular/core/testing';

import { AgValidationService } from './ag-validation.service';

describe('AgValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgValidationService = TestBed.get(AgValidationService);
    expect(service).toBeTruthy();
  });
});
