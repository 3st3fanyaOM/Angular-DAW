import { Component } from '@angular/core';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PerfilUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proyecto2';
}
