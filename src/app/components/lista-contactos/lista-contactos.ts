import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; 
import { ContactoService, Contacto } from '../../services/contacto';

@Component({
  selector: 'app-lista-contactos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './lista-contactos.html',
})
export class ListaContactosComponent implements OnInit {
  contactos: Contacto[] = [];
  contactoSeleccionado: Contacto | null = null;
  busqueda = '';

  constructor(
    private contactoService: ContactoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarContactos();
  }

  cargarContactos() {
    this.contactoService.getAll().subscribe(data => {
      this.contactos = data;
    });
  }

  get contactosFiltrados() {
    return this.contactos.filter(c =>
      c.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  seleccionar(contacto: Contacto) {
    this.contactoSeleccionado = contacto;
  }

  editar(id: number) {
    this.router.navigate(['/editar', id]);
  }

  eliminar(id: number) {
    this.contactoService.delete(id).subscribe(() => {
      this.contactoSeleccionado = null;
      this.cargarContactos();
    });
  }

  iniciales(nombre: string) {
    return nombre.split(' ').map(n => n[0]).slice(0, 2).join('');
  }

  colorAvatar(categoria: string) {
    const colores: any = {
      'Amigo': '#0f766e',
      'Trabajo': '#7c3aed',
      'Familia': '#ea580c',
    };
    return colores[categoria] || '#374151';
  }
}