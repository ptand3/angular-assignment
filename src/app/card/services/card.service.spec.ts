import { TestBed } from '@angular/core/testing';

import { CardServicesService } from './card.service';

describe('CardServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardServicesService = TestBed.get(CardServicesService);
    expect(service).toBeTruthy();
  });
});
