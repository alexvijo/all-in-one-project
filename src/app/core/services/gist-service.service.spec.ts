import { TestBed } from '@angular/core/testing';

import { GistServiceService } from './gist-service.service';

describe('GistServiceService', () => {
  let service: GistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
