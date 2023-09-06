import { TestBed } from '@angular/core/testing';

import { InspeccionarService } from './inspeccionar.service';

describe('InspeccionarService', () => {
  let service: InspeccionarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspeccionarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
