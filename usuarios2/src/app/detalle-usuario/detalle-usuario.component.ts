import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-usuario',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css',
})
export class DetalleUsuarioComponent implements OnInit {
  usuario: Observable<Usuario> | undefined;
  id: number = 0;

  constructor(
    private act: ActivatedRoute,
    private servicio: UsuarioService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.act.snapshot.params['id']);
    this.usuario = this.servicio.obtenerUsuarioPorId(id);
  }
  volver() {
    this.router.navigate(['/usuarios']);
  }
}
