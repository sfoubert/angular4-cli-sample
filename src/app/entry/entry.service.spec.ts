import { TestBed, inject } from '@angular/core/testing';

import { EntryService } from './entry.service';

describe('EntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntryService]
    });
  });

  it('should service defined', inject([EntryService], (service: EntryService) => {
    expect(service).toBeTruthy();
  }));
});
