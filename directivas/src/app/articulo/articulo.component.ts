import { Component } from '@angular/core';
import { Producto } from '../model/articulo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListadoArticulosComponent } from '../listado-articulos/listado-articulos.component';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [FormsModule, CommonModule, ListadoArticulosComponent],
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

  //variables ngmodel inicializadas
  nombreProducto: string = '';
  precioProducto: number = 0;
  unidadesProducto: number = 0;
  i: any;

  //funcionalidad añadir producto(objeto)
  guardarProducto() {
    if (
      this.nombreProducto.trim() &&
      this.precioProducto > 0 &&
      this.unidadesProducto > 0
    ) {
      //creacion de producto a partir de input
      const nuevoProducto: Producto = {
        nombre: this.nombreProducto,
        precio: this.precioProducto,
        unidades: this.unidadesProducto,
      };

      //guardar en array productos
      this.productos.push(nuevoProducto);
    }
  }
}
