import { TestBed } from '@angular/core/testing';

import { RhymeService } from './rhyme.service';

describe('RhymeService', () => {
  let service: RhymeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhymeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
