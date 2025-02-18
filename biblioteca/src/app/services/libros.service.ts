import { Injectable } from '@angular/core';
import { Libro } from '../model/libro';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  private libros: Libro[] = [
    {
      id: 1,
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
    },
    {
      id: 2,
      titulo: 'Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
    },
    {
      id: 3,
      titulo: '1984',
      autor: 'George Orwell',
    },
    {
      id: 4,
      titulo: 'El Gran Gatsby',
      autor: 'F. Scott Fitzgerald',
    },
  ];

  constructor() {}

  obtenerLibros(): Libro[] {
    return this.libros;
  }

  obtenerLibroPorId(id: number): Libro {
    return this.libros[id - 1];
  }

  actualizarLibro(nuevoLibro: Libro) {
    for (let i = 0; i < this.libros.length; i++) {
      if (this.libros[i].id === nuevoLibro.id) {
        this.libros[i].autor = nuevoLibro.autor;
        this.libros[i].titulo = nuevoLibro.titulo;
        break; // Se encontró el objeto, termina la búsqueda
      }
    }
  }
}
