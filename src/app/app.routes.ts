import { Routes } from '@angular/router';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto';

export const routes: Routes = [
  { path: '', component: ListaContactosComponent },
  { path: 'nuevo', component: FormularioContactoComponent },
  { path: 'editar/:id', component: FormularioContactoComponent },
];