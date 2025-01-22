import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos-libro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './datos-libro.component.html',
  styleUrl: './datos-libro.component.css',
})
export class DatosLibroComponent {
  titulo: string = 'COMPONENTE LIBRO';

  libro = {
    titulo: 'Titulo',
    autor: 'Autor',
    precio: 29,
    stock: 0,
    cantidad: 0,
    imagen: 'roma.webp',
  };

  add() {
    this.libro.cantidad++;
  }

  borrar() {
    this.libro.cantidad--;
  }
}
