import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  //url api
  private url = 'https://pokeapi.co/api/v2/pokemon';

  //inyectar en el costructor
  constructor(private http: HttpClient) {}

  //metodo get
  getPokemonList(){
    return this.http.get(this.url);
  }
}
