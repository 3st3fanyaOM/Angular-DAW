import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../model/personaje';
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-list-personaje',
  standalone: true,
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
}
