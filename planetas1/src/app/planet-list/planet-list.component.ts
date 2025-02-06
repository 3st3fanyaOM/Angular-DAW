import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetasService } from '../services/planetas.service';
import { PlanetList } from '../model/planet';

@Component({
  selector: 'app-planet-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css',
})
export class PlanetListComponent implements OnInit {
  planeta$ = new Observable<PlanetList>();
  constructor(private servicioPlaneta: PlanetasService) {}
  ngOnInit(): void {
    this.planeta$ = this.servicioPlaneta.getPlanets();
  }
}
