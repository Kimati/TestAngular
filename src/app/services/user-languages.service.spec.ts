import { TestBed } from '@angular/core/testing';

import { UserLanguagesService } from './user-languages.service';

describe('UserLanguagesService', () => {
  let service: UserLanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
