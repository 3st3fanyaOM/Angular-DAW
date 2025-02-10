import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/libro';
import { LibrosService } from '../services/libros.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
})
export class LibrosComponent implements OnInit {
  libros: Libro[] = []; //array vacio para metrer libros
  constructor(private librosService: LibrosService, private router: Router) {}

  ngOnInit(): void {
    this.libros = this.librosService.obtenerLibros();
  }

  libroNuevo() {
    this.router.navigate(['/libro-nuevo']);
  }
}
