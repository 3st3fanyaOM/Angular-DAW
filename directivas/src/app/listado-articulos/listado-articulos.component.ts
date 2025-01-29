import { Component, Input } from '@angular/core';
import { CaracteristicasArticuloComponent } from '../caracteristicas-articulo/caracteristicas-articulo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-articulos',
  standalone: true,
  imports: [CaracteristicasArticuloComponent, CommonModule,FormsModule],
  templateUrl: './listado-articulos.component.html',
  styleUrl: './listado-articulos.component.css',
})
export class ListadoArticulosComponent {
  //dartos que vienen de padre app-articulo
  @Input()
  producto: any = '';
  @Input()
  indice: any = '';

  arrayCaracteristicas = []
  agregarCaracteristica(caracteristica:any){
    //this.arrayCaracteristicas.push(caracteristica);
  }
}
