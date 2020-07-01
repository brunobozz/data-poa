import { TestBed } from '@angular/core/testing';

import { ApiDadosabertosService } from './api-dadosabertos.service';

describe('ApiDadosabertosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiDadosabertosService = TestBed.get(ApiDadosabertosService);
    expect(service).toBeTruthy();
  });
});
