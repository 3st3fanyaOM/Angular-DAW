import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
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
  ];
}
