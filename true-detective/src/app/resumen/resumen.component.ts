import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css',
})
export class ResumenComponent {


  @Input()
  serie: string = '';
  @Input()
  correo: string = '';
  @Input()
  nombre: string = '';
  valoracion: string = '';
  @Output()
  valor = new EventEmitter<string>();
  enviarValoracion() {
    this.valor.emit(this.valoracion);
  }
}
