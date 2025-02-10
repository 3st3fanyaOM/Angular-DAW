import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css',
})
export class ListadoUsuariosComponent implements OnInit {
  listaUsuarios = new Observable<Usuario[]>();
  constructor(private usuariosService: UsuariosService) {}
  ngOnInit(): void {
    this.listaUsuarios = this.usuariosService.getUsuariosList();
  }
}
