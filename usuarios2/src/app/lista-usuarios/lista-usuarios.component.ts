import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../services/usuario.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css',
})
/*Componente lista-usuarios: este componente debe mostrar el listado de usuarios: id, name y
username.*/
export class ListaUsuariosComponent implements OnInit {
  userList$ = new Observable<Usuario[]>();
  constructor(private servicio: UsuarioService) {}
  ngOnInit(): void {
    this.userList$ = this.servicio.getUsersList();
  }
}
