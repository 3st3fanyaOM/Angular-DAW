import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Libro } from '../model/libro';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libro-nuevo',
  imports: [FormsModule],
  templateUrl: './libro-nuevo.component.html',
  styleUrl: './libro-nuevo.component.css',
})
export class LibroNuevoComponent {
  constructor(private librosService: LibrosService) {}
  libros: Libro[] = [];
  titulo: string = '';
  autor: string = '';

  guardarLibro() {
    this.libros = this.librosService.obtenerLibros();
    const libroNuevo: Libro = {
      id: 4,
      titulo: this.titulo,
      autor: this.autor,
    };
    this.libros.push(libroNuevo);
  }
}
