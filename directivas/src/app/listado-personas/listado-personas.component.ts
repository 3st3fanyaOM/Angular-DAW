import { Component } from '@angular/core';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-listado-personas',
  standalone: true,
  imports: [],
  templateUrl: './listado-personas.component.html',
  styleUrl: './listado-personas.component.css',
})
export class ListadoPersonasComponent {
  personas: Persona[] = [
    {
      nombre: 'Leonardo',
      apellidos: 'Di Caprio',
      edad: 46,
    },
    {
      nombre: 'Uma',
      apellidos: 'Thurman',
      edad: 45,
    },
    {
      nombre: 'Britney',
      apellidos: 'Spears',
      edad: 42,
    },
  ];
}
