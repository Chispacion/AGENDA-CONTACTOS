import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactoService, Contacto } from '../../services/contacto';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-contacto.html',
})
export class FormularioContactoComponent implements OnInit {
  esEdicion = false;
  contactoId: number | null = null;

  contacto: Contacto = {
    nombre: '',
    telefono: '',
    email: '',
    categoria: 'Amigo',
    notas: '',
  };

  categorias = ['Amigo', 'Trabajo', 'Familia', 'Otro'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactoService: ContactoService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.contactoId = +id;
      this.contactoService.getAll().subscribe(data => {
        const encontrado = data.find(c => c.id === this.contactoId);
        if (encontrado) this.contacto = { ...encontrado };
      });
    }
  }

  guardar() {
    if (this.esEdicion && this.contactoId) {
      this.contactoService.update(this.contactoId, this.contacto).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.contactoService.create(this.contacto).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}