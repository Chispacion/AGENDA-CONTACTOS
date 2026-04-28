import { Routes } from '@angular/router';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos';
import { RenderMode } from '@angular/ssr';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto';

export const routes: Routes = [
  { path: '', component: ListaContactosComponent },
  { path: 'nuevo', component: FormularioContactoComponent },
  { 
    path: 'editar/:id', 
    component: FormularioContactoComponent,
    data: { renderMode: RenderMode.Client }
  },
];