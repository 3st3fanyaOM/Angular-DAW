import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/libro';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css',
})
export class LibroDetalleComponent implements OnInit {
  libro: Libro = {
    id: 0,
    titulo: '',
    autor: '',
  };

  constructor(
    private router: Router, //para navigate
    private libroService: LibrosService,
    private route: ActivatedRoute //para obtener id
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.libro = this.libroService.obtenerLibroPorId(id);
    console.log(this.libro);
  }

  volver() {
    this.router.navigate(['/libros']);
  }
}
