import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { LibroNuevoComponent } from './libro-nuevo/libro-nuevo.component';
import { LibroModificacionComponent } from './libro-modificacion/libro-modificacion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'libro-detalle/:id', component: LibroDetalleComponent },
  { path: 'libro-nuevo', component: LibroNuevoComponent }, // No olvides agregar el parámetro ":id" aquí
  { path: 'libro-modificacion/:id', component: LibroModificacionComponent },
  { path: '**', redirectTo: 'home' }, // Redirigir a home si la ruta no es válida
];
