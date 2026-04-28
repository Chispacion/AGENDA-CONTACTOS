import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContactoComponent } from './formulario-contacto';

describe('FormularioContactoComponent', () => {
  let component: FormularioContactoComponent;
  let fixture: ComponentFixture<FormularioContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioContactoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioContactoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
