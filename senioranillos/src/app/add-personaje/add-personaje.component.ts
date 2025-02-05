<<<<<<< HEAD:anillos/src/app/add-personaje/add-personaje.component.ts
import { Component } from '@angular/core';
=======
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonajeService } from '../services/personaje.service';
import { Personaje } from '../model/personaje';
import { FormsModule } from '@angular/forms';
>>>>>>> 92d535ffcede65ab590a859873c0d084efac720f:senioranillos/src/app/add-personaje/add-personaje.component.ts

@Component({
  selector: 'app-add-personaje',
  standalone: true,
<<<<<<< HEAD:anillos/src/app/add-personaje/add-personaje.component.ts
  imports: [],
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {

=======
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
>>>>>>> 92d535ffcede65ab590a859873c0d084efac720f:senioranillos/src/app/add-personaje/add-personaje.component.ts
}
