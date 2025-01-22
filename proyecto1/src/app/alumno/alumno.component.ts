import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css',
})
export class AlumnoComponent {
  nombre: string = 'Ernesto';
  apellido: string = 'Nuñez';
  edad: number = 19;
  dni: string = '56678986T';
  deshabilitado: boolean = true;
  desmarcado: boolean = false;

  mostrarMensaje() {
    alert('Mensaje');
  }

  antes: string ="Antes de pulsar"
}
