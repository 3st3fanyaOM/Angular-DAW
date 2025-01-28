import { Component } from '@angular/core';
import { Producto } from '../model/articulo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css',
})
export class ArticuloComponent {
  productos: Producto[] = [
    {
      nombre: 'Altavoces',
      precio: 33.85,
      unidades: 133,
    },
    {
      nombre: 'SSD',
      precio: 59.9,
      unidades: 40,
    },
    {
      nombre: 'Cable USB',
      precio: 3.75,
      unidades: 40,
    },
  ];

  nombreProducto: string = '';
  precioProducto: number = 0;
  unidadesProducto: number = 0;
  guardarProducto() {
    if (
      this.nombreProducto.trim() &&
      this.precioProducto > 0 &&
      this.unidadesProducto > 0
    ) {
      const nuevoProducto: Producto = {
        nombre: this.nombreProducto,
        precio: this.precioProducto,
        unidades: this.unidadesProducto,
      };
      this.productos.push(nuevoProducto);
    }
  }
}
