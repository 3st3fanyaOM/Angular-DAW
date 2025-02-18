import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResumenComponent } from '../resumen/resumen.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule, ResumenComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  mostrarResumen: boolean = false;
  error: boolean = false;
  cargarResumen() {
    if (!this.correo.trim()) {
      this.error = true;
      this.mostrarResumen = false;
    } else {
      this.error = false;
      this.mostrarResumen = true;
    }
  }
  serie: string = '';
  correo: string = '';
  nombre: string = '';

  valoracion: string = '';
  recibirValoracion(event: string) {
    this.valoracion = event;
  }
}
