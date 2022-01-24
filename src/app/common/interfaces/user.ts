import { Pokemon } from "./pokemon";

interface hobby {
    id?: number,
    label?: string
}

interface birthday {
    year?: number,
    month?: number,
    day?: number
}

interface User {
    id?: number,
    nickname?:string,
    photo?: string,
    name?: string,
    age?: number,
    birthday?: birthday,
    hobby?: hobby,
    isChild?: boolean,
    document?: string,
    pokemons?: Array<Pokemon>
}
export {User};