import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonajeService } from '../services/personaje.service';
import { Personaje } from '../model/personaje';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-personaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css',
})
export class AddPersonajeComponent {
  nombre: string = '';
  raza: string = '';

  constructor(private personajeService: PersonajeService) {}

  agregarPersonaje() {
    if (this.nombre.trim() && this.raza.trim()) {
      const nuevoPersonaje: Personaje = {
        id: Date.now(),
        nombre: this.nombre,
        raza: this.raza,
      };

      this.personajeService.agregarPersonaje(nuevoPersonaje);
      this.nombre = '';
      this.raza = '';
    }
  }
}
