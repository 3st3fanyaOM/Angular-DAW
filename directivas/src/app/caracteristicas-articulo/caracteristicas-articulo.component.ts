import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-articulo',
  standalone: true,
  imports: [],
  templateUrl: './caracteristicas-articulo.component.html',
  styleUrl: './caracteristicas-articulo.component.css',
})
export class CaracteristicasArticuloComponent {
  caracteristica: any = '';
  @Output()
  selected = new EventEmitter<any>();
  agregarCaracteristica(caracteristica:any) {
    this.selected.emit(this.caracteristica);
  }
}
