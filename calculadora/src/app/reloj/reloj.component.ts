import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reloj',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reloj.component.html',
  styleUrl: './reloj.component.css',
})
export class RelojComponent {
  valorPorDefecto: number = 0;
  valor1: number = 0;
  valor2: number = 0;
  resultado: number | string = 0; //puede ser los 2 tipos este valor --pipe

  sumar(valor1: number, valor2: number):void {
    this.resultado = valor1 + valor2;
  }

  restar(valor1: number, valor2: number):void {
    this.resultado = valor1 - valor2;
  }

  multiplicar(valor1: number, valor2: number):void {
    this.resultado = valor1 * valor2;
  }

  dividir(valor1: number, valor2: number):void {
    if (valor2 != 0) {
      this.resultado = valor1 / valor2;
    } else {
      this.resultado='No se puede dividir entre 0';
    }
  }
}
