import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonServiceService } from './services/pokemon-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  //oninit por que lo hace al inicio
  title = 'pokemon1';

  pokemonList$ = new Observable<any>();
  //aqui queda la lista en esta variable
  constructor(private servicioPokemon: PokemonServiceService) {}
  ngOnInit(): void {
    this.pokemonList$ = this.servicioPokemon.getPokemonList();
    throw new Error('Method not implemented.');
  }
}
