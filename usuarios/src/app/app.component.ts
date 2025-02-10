import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListadoUsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'usuarios';
}
