import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  //array de 2 objs literales
  libros = [
    {
      titulo: 'Titulo1',
      autor: 'Autor1',
      precio: 29,
      stock: 34,
      cantidad: 0,
      imagen: 'roma.webp',
    },
    {
      titulo: 'Titulo2',
      autor: 'Autor2',
      precio: 22,
      stock: 1,
      cantidad: 0,
      imagen: 'roma.webp',
    },
  ];

  //variable que recibe del input
  @Input()
  numeroLibro: string = '';

  @Output()
  selected = new EventEmitter<any>();

  devolverTitulo() {
    this.selected.emit(this.libros[parseInt(this.numeroLibro) - 1].titulo);
  }
}
