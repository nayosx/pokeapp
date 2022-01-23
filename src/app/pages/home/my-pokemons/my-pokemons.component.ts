import { Component, OnInit } from '@angular/core';
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
  public pokemons: Array<Pokemon> = [];
  private pokemonHelper: PokemonHelper;
  public isShowMyPokemons:boolean = false;

  constructor(
    private pokeService: PokeApiService
  ) { 
    this.pokemonHelper = new PokemonHelper(this.pokeService);
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  private getPokemons(): void {
    this.pokeService.retrieve().subscribe({
      next: (response) => {
        this.pokemonsAPI = <Pokemons>response.body;
        this.prepareUrlsForGetPokemons();
      },
      error: (error) => {
      }
    });
  }
  private prepareUrlsForGetPokemons(): void {
    this.pokemonsAPI.results?.forEach(pokemon => {
      this.pokemonsUrl.push(pokemon.url);
    });

    this.retreivedPokemons();
  }

  private retreivedPokemons(): void {
    if (this.pokemonsUrl.length > 0) {
      const promises: Array<Promise<any>> = this.pokemonHelper.getPokemons(this.pokemonsUrl);
      Promise.all(promises)
        .then(pokemons => {
          this.pokemons = <Array<Pokemon>>pokemons;
          console.log(this.pokemons);
          this.isShowMyPokemons = true;
        })
        .catch(() => {
          console.log('algo fue muy mal');
          this.isShowMyPokemons = false;
        });
    }
  }
}
