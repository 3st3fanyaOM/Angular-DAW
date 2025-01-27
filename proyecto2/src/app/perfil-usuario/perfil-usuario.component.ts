import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css',
})
export class PerfilUsuarioComponent {
  name: string = 'Tom Hanks'; //interpolación
  role: string = 'Actor'; //interpolación
  //property binding
  urlImg: string =
    'https://pollossanjuan.es/wp-content/uploads/2018/04/Cocacola_50cl.jpg';
  title: string = 'Titulo';
  isDisabled: boolean = true; //deshabilita el input
  edad: number = 17;//ternario mayor de edad
}
