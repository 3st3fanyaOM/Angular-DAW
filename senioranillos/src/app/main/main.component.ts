import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListPersonajeComponent } from '../list-personaje/list-personaje.component';
import { AddPersonajeComponent } from '../add-personaje/add-personaje.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,ListPersonajeComponent,AddPersonajeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
