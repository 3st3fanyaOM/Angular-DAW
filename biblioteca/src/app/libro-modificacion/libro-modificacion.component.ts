import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/libro';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../services/libros.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libro-modificacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libro-modificacion.component.html',
  styleUrl: './libro-modificacion.component.css',
})
export class LibroModificacionComponent implements OnInit {
  libro?: Libro = { id: 0, titulo: '', autor: '' };
  autor: any;
  titulo: any;

  constructor(
    private router: Router,
    private librosService: LibrosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const libroEditar = this.librosService.obtenerLibroPorId(id);
    if (libroEditar) {
      this.autor = libroEditar.autor;
      this.titulo = libroEditar.titulo;
    }
  }

  modificarLibro() {
    if(this.librosService.actualizarLibro(this.libro.id, this.libro)){
      alert(`libro actualizado`)
    }else{
      alert('Error, libro no encontrado')
    }
    this.router.navigate(['/libros']);
  }
  volver() {
    this.router.navigate(['/libros']);
  }
}
