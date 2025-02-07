import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  libros: Libro[] = [
    { id: 1, titulo: 'Titulo1', autor: 'Autor1' },
    { id: 2, titulo: 'Titulo2', autor: 'Autor2' },
    { id: 3, titulo: 'Titulo3', autor: 'Autor3' },
  ];
  
  constructor() {}
}
