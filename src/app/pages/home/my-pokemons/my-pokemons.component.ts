import { Component, Input, OnInit } from '@angular/core';
import { PokemonHelper } from 'src/app/common/helpers/pokemon.helper';
import { Pokemon } from 'src/app/common/interfaces/pokemon';
import { Pokemons } from 'src/app/common/interfaces/pokemons';
import { PokeApiService } from 'src/app/network/services/poke-api.service';

@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.scss']
})
export class MyPokemonsComponent implements OnInit {

  public pokemonsAPI: Pokemons = {};
  public pokemonsUrl: Array<string> = [];

  @Input('pokemons')
  public pokemons?: Array<Pokemon> = [];

  @Input('idUser')
  public idUser?: number = 0;

  constructor() {}

  ngOnInit(): void {
  }
}
