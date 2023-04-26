import { TestBed } from '@angular/core/testing';

import { PatientAnalysisServiceService } from './patient-analysis-service.service';

describe('PatientAnalysisServiceService', () => {
  let service: PatientAnalysisServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientAnalysisServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
