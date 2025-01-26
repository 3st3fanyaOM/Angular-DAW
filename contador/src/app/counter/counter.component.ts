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
  restarUno(valorContador: number) {
    this.valorContador = valorContador--;
  }
  resetear(valorContador: number) {
    this.valorContador = 10;
  }
  sumarUno(valorContador: number) {
    this.valorContador = valorContador++;
  }
  valorContador: number = 10;
}
