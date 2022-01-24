import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonHelper } from 'src/app/common/helpers/pokemon.helper';
import { Pokemon } from 'src/app/common/interfaces/pokemon';
import { Pokemons } from 'src/app/common/interfaces/pokemons';
import { PokeApiService } from 'src/app/network/services/poke-api.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/common/interfaces/user';

import { removeFromStorage, saveOnstorage } from 'src/app/common/helpers/storage.helper';
import { Router } from '@angular/router';

@Component({
	selector: 'app-pokemons',
	templateUrl: './pokemons.component.html',
	styleUrls: ['./pokemons.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class PokemonsComponent implements OnInit {

	@Input('user')
	public user: User = {};
	public form: FormGroup;
	public pokemons: Array<Pokemon> = [];
	public pokemonsTemp: Array<Pokemon> = [];
	public pokemonsSelected: Array<Pokemon> = [];
	private pokemonHelper: PokemonHelper;

	public pokemonsAPI: Pokemons = {};
	public pokemonsUrl: Array<string> = [];

	private readonly firstGenOfPokemon: number = 151;
	public isNotGetPokemon:boolean = false;

	constructor(
		private formBuilder: FormBuilder,
		private pokeService: PokeApiService,
		private toastr: ToastrService,
		private router: Router
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
			this.forceClean();
		}
	}

	public forceClean(): void {
		this.pokemons = [];
		this.pokemons = [...this.pokemonsTemp];
		this.form.reset();
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
			  this.pokemonsTemp = this.pokemons.map(p => p);
			  this.isNotGetPokemon = false;
			})
			.catch(() => {
			  this.isNotGetPokemon = true;
			});
		}
	}

	public selectedPokemon(pokemon: Pokemon): void {

		if(this.pokemonsSelected.length < 3) {
			if(pokemon.isSelected) {
				console.log('ya esta seleccionado');
				pokemon.isSelected = false;
				this.pokemonsSelected = this.removeFromSelected(pokemon.id || 0);
			} else{
				pokemon.isSelected = true;
				this.pokemonsSelected.push(pokemon);
			}
		} else{
			console.log('ya no se puede seleccionar otro');
			this.toastr.error('Ya tiene los 3 pokemon seleccionados');
		}
	}


	private removeFromSelected(id:number): Array<Pokemon> {
		return this.pokemonsSelected.filter(pokemon => pokemon.id !== id);
	}

	public removeAllSelected(): void {
		this.pokemonsSelected = [...[]];
		this.pokemons = [];
		this.pokemons = [...this.pokemonsTemp];

		console.log(this.pokemons);
	}

	public savePokemons(): void{
		console.log('guardando pokemons');
		this.user.pokemons = this.pokemonsSelected;
		removeFromStorage(this.user.id || 0);
		saveOnstorage(this.user);
		console.log(this.user);
		this.redirect();
	}

	private redirect(): void {
		this.router.navigate(['/home', this.user.id]);
	}
}
