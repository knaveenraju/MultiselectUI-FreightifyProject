import { TestBed } from '@angular/core/testing';

import { MultiselectLibService } from './multiselect-lib.service';

describe('MultiselectLibService', () => {
  let service: MultiselectLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiselectLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
