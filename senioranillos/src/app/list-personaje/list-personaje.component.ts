<<<<<<< HEAD:anillos/src/app/list-personaje/list-personaje.component.ts
import { Component } from '@angular/core';
=======
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../model/personaje';
import { PersonajeService } from '../services/personaje.service';
>>>>>>> 92d535ffcede65ab590a859873c0d084efac720f:senioranillos/src/app/list-personaje/list-personaje.component.ts

@Component({
  selector: 'app-list-personaje',
  standalone: true,
<<<<<<< HEAD:anillos/src/app/list-personaje/list-personaje.component.ts
  imports: [],
  templateUrl: './list-personaje.component.html',
  styleUrl: './list-personaje.component.css'
})
export class ListPersonajeComponent {

=======
  imports: [CommonModule],
  templateUrl: './list-personaje.component.html',
  styleUrl: './list-personaje.component.css',
})
export class ListPersonajeComponent implements OnInit {
  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService) {}

  ngOnInit() {
    this.personajes = this.personajeService.getPersonajes();
  }

  eliminarPersonaje(id: number) {
    this.personajeService.eliminarPersonaje(id);
    this.personajes = this.personajeService.getPersonajes();
  }
>>>>>>> 92d535ffcede65ab590a859873c0d084efac720f:senioranillos/src/app/list-personaje/list-personaje.component.ts
}
