import { TestBed } from '@angular/core/testing';

import { CoinDeskService } from './coin-desk.service';

describe('CoinDeskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoinDeskService = TestBed.get(CoinDeskService);
    expect(service).toBeTruthy();
  });
});
