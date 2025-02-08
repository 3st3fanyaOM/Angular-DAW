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
      descripcion: 'Una novela que narra la historia de la familia Buendía.',
    },
    {
      id: 2,
      titulo: 'Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      descripcion: 'Las aventuras de un caballero y su fiel escudero.',
    },
    {
      id: 3,
      titulo: '1984',
      autor: 'George Orwell',
      descripcion: 'Una distopía sobre un régimen totalitario.',
    },
    {
      id: 4,
      titulo: 'El Gran Gatsby',
      autor: 'F. Scott Fitzgerald',
      descripcion: 'Una novela sobre el sueño americano en la década de 1920.',
    },
  ];

  constructor() {}

  obtenerLibros(): Libro[] {
    return this.libros;
  }

  obtenerLibroPorId(id: number): Libro | undefined {
    return this.libros.find((libro) => libro.id === id);
  }
}
