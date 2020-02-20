import { TestBed } from '@angular/core/testing';

import { PreferencesProvider } from './preferences';

describe('PreferencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreferencesProvider = TestBed.get(PreferencesService);
    expect(service).toBeTruthy();
  });
});
