import { Injectable } from '@angular/core';
import { Personaje } from '../../model/personaje';

@Injectable({
  providedIn: 'root',
})
export class AnillosService {
  constructor() {}

  personajes: Personaje[] = [
    {
      id: 1,
      nombre: 'Personaje1',
      raza: 'Raza1',
    },
    {
      id: 2,
      nombre: 'Personaje2',
      raza: 'Raza2',
    },
    {
      id: 3,
      nombre: 'Personaje3',
      raza: 'Raza3',
    },
  ];
}
