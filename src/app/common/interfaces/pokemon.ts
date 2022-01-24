interface Type {
    name: string
}
interface Types {
    type: Type
}


interface Attributes {
    hp?: number,
    attack?: number,
    defense?: number,
    special_attack?: number,
    special_defense?: number,
    speed?: number
}


interface Stat {
    name: string
}
interface Stats {
    base_stat: number,
    effort: number,
    stat: Stat
}


interface Home {
    front_default: string
}
interface other {
    home: Home
}
interface Sprites {
    other: other
}


interface Pokemon {
    id?: number,
    name?: string,
    sprites?: Sprites,
    stats?: Array<Stats>,
    types?: Array<Types>
    type?: string,
    img?: string,
    attributes?: Attributes,
    isSelected?: boolean,
    labelId?:string
}
export {
    Pokemon,
    Attributes,
    Stats,
    Stat,
    Types,
    Type,
};