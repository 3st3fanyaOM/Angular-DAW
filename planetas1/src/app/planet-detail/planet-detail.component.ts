import { Component, OnInit } from '@angular/core';
import { Planeta } from '../model/planet';
import { PlanetasService } from '../services/planetas.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.css',
})
export class PlanetDetailComponent implements OnInit {
  planeta$ = new Observable<Planeta>();
  constructor(private servicioPlaneta: PlanetasService) {}
  ngOnInit(): void {
    this.planeta$ = this.servicioPlaneta.getPlanet();
    throw new Error('Error');
  }
}
