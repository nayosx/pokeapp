import { PokeApiService } from "src/app/network/services/poke-api.service";
import { EStat } from "../enums/pokemon.enum";
import { Attributes, Pokemon, Stats, Types } from "../interfaces/pokemon";

class PokemonHelper {

    constructor(private pokeService:PokeApiService) {
    }

    public getPokemons(urls:Array<string>): Array<Promise<any>> {
        const promises:Array<Promise<any>> = [];
        urls.forEach(url => {
            promises.push(new Promise((resolve, rejects) => {
              this.pokeService.getByURL(url).subscribe({
                next: (response) => {
                  resolve(this.getParsePokemon(response.body));
                },
                error: (error) => {
                    rejects(error);
                }
              });
            }));
        });
        return promises;
    }

    public getParsePokemon(pokemon:Pokemon): Pokemon {
        return {
            id: pokemon.id,
            name: pokemon.name,
            img: pokemon.sprites?.other.home.front_default,
            type: this.getTypes(pokemon.types),
            attributes: this.getAttributes(pokemon.stats),
            isSelected: false,
            labelId: this.getLabelId(pokemon.id || 0)
        };
    }

    private getAttributes(stats?: Array<Stats>): Attributes {
        let attr:Attributes = {}
        stats?.forEach(element => {
            switch(element.stat.name) {
                case EStat.attack:
                    attr.attack = element.base_stat;
                    break;
                case EStat.defense:
                    attr.defense = element.base_stat;
                    break;
                case EStat.hp:
                    attr.hp = element.base_stat;
                    break;
                case EStat.special_attack:
                    attr.special_attack = element.base_stat;
                    break;
                case EStat.special_defense:
                    attr.special_defense = element.base_stat;
                    break;
                case EStat.speed:
                    attr.speed = element.base_stat;
                    break;
                default:
            }
        });

        return attr;
    }

    private getTypes(types?: Array<Types>): string {
        let type = '';
        types?.forEach(element => {
            type += `${element.type.name}/`;
        });
        return  type.slice(0, -1);
    }

    private getLabelId(id:number): string {
        let labelId: string = '';

        if(id >= 1 && id <=9) {
            labelId = `#00${id}`;
        }
        if(id >= 10 && id <=99) {
            labelId = `#0${id}`;
        }
        
        if(id >=100) {
            labelId = `#${id}`;
        }
        return labelId;
    }
}

export { PokemonHelper };