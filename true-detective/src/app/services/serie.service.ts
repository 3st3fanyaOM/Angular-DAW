import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie } from '../model/Serie';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  constructor(private http: HttpClient) {}
  private url = 'https://api.tvmaze.com/shows/5';

  getSerie() {
    return this.http.get<Serie>(this.url);
  }
}
