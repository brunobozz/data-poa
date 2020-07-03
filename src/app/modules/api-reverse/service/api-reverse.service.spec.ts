import { TestBed } from '@angular/core/testing';

import { ApiReverseService } from './api-reverse.service';

describe('ApiReverseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiReverseService = TestBed.get(ApiReverseService);
    expect(service).toBeTruthy();
  });
});
