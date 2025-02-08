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
  libro: Libro | undefined;
  id: number = 0;

  constructor(
    private act: ActivatedRoute,
    private libroService: LibrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.act.snapshot.paramMap.get('id'));
    this.libro = this.libroService.obtenerLibroPorId(id);
  }

  volver() {
    this.router.navigate(['/libros']);
  }
}
