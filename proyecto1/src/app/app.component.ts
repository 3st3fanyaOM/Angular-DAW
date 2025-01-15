import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hola',
  standalone: true, //no hay modulos, coge uno por dfto
  imports: [RouterOutlet], //clases que necesitamos
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Clase de angular';
  nombre: string = 'Estefania';
  edad: number = 18;

  getEdad(): number {
    return this.edad;
  }
}
