import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonHelper } from 'src/app/common/helpers/pokemon.helper';
import { Pokemon } from 'src/app/common/interfaces/pokemon';
import { Pokemons } from 'src/app/common/interfaces/pokemons';
import { PokeApiService } from 'src/app/network/services/poke-api.service';

@Component({
	selector: 'app-pokemons',
	templateUrl: './pokemons.component.html',
	styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

	public form: FormGroup;
	public pokemons:Array<Pokemon> = [];
	public pokemonsTemp:Array<Pokemon> = [];
	private pokemonHelper: PokemonHelper;

	public pokemonsAPI: Pokemons = {};
	public pokemonsUrl: Array<string> = [];

	private readonly firstGenOfPokemon: number = 151;
	private isNotGetPokemon:boolean = false;

	constructor(
		private formBuilder: FormBuilder,
		private pokeService: PokeApiService
	) {
		this.form = this.formBuilder.group({
			search: [''],
		});

		this.pokemonHelper = new PokemonHelper(this.pokeService);
	}

	ngOnInit(): void {
		this.getPokemons();
	}

	public onSubmit(): void {}

	public search(e: Event): void {
		let {value} = e.target as HTMLInputElement;
		let idPokemon = parseInt(value);
		if(isNaN(idPokemon) && idPokemon > 0) {
			if(idPokemon <= this.firstGenOfPokemon) {
				this.getPokemon(idPokemon);
			} else {
				this.isNotGetPokemon = true;
			}
			
		} else {
			this.getPokemon(value);
		}
	}

	private getPokemon(pokemon: any): void{
		this.pokeService.get(pokemon).subscribe({
			next: response => {
				let pokemon: Pokemon = this.pokemonHelper.getParsePokemon(response.body as Pokemon);
				this.pokemons = [...[]];
				this.pokemons.push(pokemon);
				this.isNotGetPokemon = false;
			},
			error: error => {
				console.log(error);
				this.isNotGetPokemon = true;
			}
		});
	}

	public cleanSearch(e: Event): void {
		let {value} = e.target as HTMLInputElement;
		if(value.length == 0) {
			this.pokemons = [...this.pokemonsTemp];
		}
	}

	private getPokemons(): void {
		this.pokeService.retrieve().subscribe({
			next: response => {
				this.pokemonsAPI = response.body as Pokemons;
        		this.prepareUrlsForGetPokemons();
				this.isNotGetPokemon = false;
			},
			error: error => {
				this.isNotGetPokemon = true;
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
			  this.pokemons = pokemons as Array<Pokemon>;
			  this.pokemonsTemp = pokemons as Array<Pokemon>;
			  this.isNotGetPokemon = false;
			})
			.catch(() => {
			  this.isNotGetPokemon = true;
			});
		}
	  }

}
