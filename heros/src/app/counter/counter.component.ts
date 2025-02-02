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
  title: string = 'Counter';
  counter: number = 10;

  restar() {
    this.counter--;
  }
  resetear() {
    this.counter = 10;
  }
  sumar() {
    this.counter++;
  }
}
