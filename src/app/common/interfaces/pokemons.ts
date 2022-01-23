interface pokemonBasicInfo {
    name: string,
    url: string
}
interface Pokemons {
    next?: string,
    previous?: string,
    results?: Array<pokemonBasicInfo>
}

export {
    Pokemons,
};