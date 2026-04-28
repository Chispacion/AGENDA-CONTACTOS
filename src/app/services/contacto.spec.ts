import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContactoService } from './contacto';

describe('ContactoService', () => {
  let service: ContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
