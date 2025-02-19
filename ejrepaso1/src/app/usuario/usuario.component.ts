import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service'; // Adjust the path as necessary
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  usuario?: Observable<Usuario>;
  constructor(private usuarioService: UsuarioService) {}

  numUsuario: number = 0;
  buscarUsuario(numUsuario: number) {
    this.usuario = this.usuarioService.getUsuario(numUsuario);
  }
}
