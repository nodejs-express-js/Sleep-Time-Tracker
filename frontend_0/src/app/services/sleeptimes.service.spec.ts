import { TestBed } from '@angular/core/testing';

import { SleeptimesService } from './sleeptimes.service';

describe('SleeptimesService', () => {
  let service: SleeptimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SleeptimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
