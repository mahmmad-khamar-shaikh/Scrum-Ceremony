import { TestBed } from '@angular/core/testing';

import { SessionInformationService } from './session-information.service';

describe('SessionInformationService', () => {
  let service: SessionInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
