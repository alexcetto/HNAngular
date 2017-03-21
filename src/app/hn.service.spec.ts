import { TestBed, inject } from '@angular/core/testing';

import { HnService } from './hn.service';

describe('HnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HnService]
    });
  });

  it('should ...', inject([HnService], (service: HnService) => {
    expect(service).toBeTruthy();
  }));
});
