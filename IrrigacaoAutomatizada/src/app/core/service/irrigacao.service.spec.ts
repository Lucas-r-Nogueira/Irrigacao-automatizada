import { TestBed } from '@angular/core/testing';

import { IrrigacaoService } from './irrigacao.service';

describe('IrrigacaoService', () => {
  let service: IrrigacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrrigacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
