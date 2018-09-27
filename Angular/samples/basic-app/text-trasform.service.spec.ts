import { TestBed } from '@angular/core/testing';

import { TextTrasformService } from './text-trasform.service';

describe('TextTrasformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextTrasformService = TestBed.get(TextTrasformService);
    expect(service).toBeTruthy();
  });
});
