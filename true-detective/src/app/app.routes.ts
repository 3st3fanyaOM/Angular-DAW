import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SerieComponent } from './serie/serie.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'serie', component: SerieComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '**', redirectTo: 'home' },
];
