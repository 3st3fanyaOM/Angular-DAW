import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  //si tengo la variable en la clase, no hay que pasarla por parámetro
  restarUno() {
    this.valorContador -= 1;
  }
  resetear() {
    this.valorContador = 10;
  }
  sumarUno() {
    this.valorContador += 1;
  }
  valorContador: number = 10;
}
