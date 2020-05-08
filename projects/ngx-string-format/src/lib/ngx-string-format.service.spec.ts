import { TestBed } from '@angular/core/testing';

import { NgxStringFormatService } from './ngx-string-format.service';

describe('NgxStringFormatService', () => {
  let service: NgxStringFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStringFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
