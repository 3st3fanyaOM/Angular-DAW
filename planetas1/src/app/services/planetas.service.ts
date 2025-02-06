import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planeta, PlanetList } from '../model/planet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetasService {
  private url = 'https://swapi.dev/api/planets';
  constructor(private http: HttpClient) {}

  getPlanets(pag = 1): Observable<PlanetList> {
    return this.http.get<PlanetList>(`${this.url}?page=${pag}`);
  }

  getPlanet(num = 1): Observable<Planeta> {
    return this.http.get<Planeta>(`${this.url}/${num}`);
  }
}
