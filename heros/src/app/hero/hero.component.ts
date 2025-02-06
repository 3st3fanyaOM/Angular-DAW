import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  nombre: string = 'ironman';
  edad: number = 29;
  cambiarEdad() {
    this.edad = 18;
  }
  cambiarASpiderman() {
    this.nombre = 'Spiderman';
  }
}
