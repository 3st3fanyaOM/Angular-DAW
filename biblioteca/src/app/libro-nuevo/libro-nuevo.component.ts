import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Libro } from '../model/libro';
import { LibrosService } from '../services/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-nuevo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libro-nuevo.component.html',
  styleUrl: './libro-nuevo.component.css',
})
export class LibroNuevoComponent {
  constructor(private librosService: LibrosService, private route: Router) {}
  libros: Libro[] = [];
  titulo: string = '';
  autor: string = '';

  guardarLibro() {
    this.libros = this.librosService.obtenerLibros();
    const libroNuevo: Libro = {
      id: this.libros.length + 1,
      titulo: this.titulo,
      autor: this.autor,
    };
    this.libros.push(libroNuevo);
    this.route.navigate(['/libros']);
  }

  volver() {
    this.route.navigate(['/libros']);
  }
}
