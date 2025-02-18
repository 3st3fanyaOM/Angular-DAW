import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, FormularioComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  mostrarResumen: boolean = false;
  mostrarMensaje: boolean = false;
  cargarResumen() {
    if (this.correo.trim()) {
      this.mostrarResumen = true;
    } else {
      this.mostrarMensaje = false;
      this.mostrarResumen = true;
    }
  }
  serie: string = '';
  correo: string = '';
  nombre: string = '';
}
