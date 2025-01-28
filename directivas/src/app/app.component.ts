import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';

export interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ArticuloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'directivas';
  titulo: string = 'Alta Usuario';
  nombre: string = '';
  apellidos: string = '';
  usuario: string = '';
  alta: boolean = false;

  mostrarNombre() {
    this.alta = true;
  }

  personas: Persona[] = [
    {
      nombre: 'Estefania',
      apellidos: 'Ortega',
      edad: 40,
    },
    {
      nombre: 'Elena',
      apellidos: 'Perez',
      edad: 39,
    },
    {
      nombre: 'Margarita',
      apellidos: 'Perez',
      edad: 22,
    },
    {
      nombre: 'Rosa',
      apellidos: 'Perez',
      edad: 31,
    },
  ];

  //mostrar en etiqueta el boton pulsado
  key: string = '';
  pulsado: boolean = false;
  mostrarOpc(event: any) {
    this.key = event.target.value;
    this.pulsado = true;
  }
}
