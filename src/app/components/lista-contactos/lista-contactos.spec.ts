import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContactosComponent } from './lista-contactos';

describe('ListaContactosComponent', () => {
  let component: ListaContactosComponent;
  let fixture: ComponentFixture<ListaContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaContactosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaContactosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
