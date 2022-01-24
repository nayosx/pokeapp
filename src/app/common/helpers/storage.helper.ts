const KEY = 'users';

const saveOnstorage = (data:any) => {
    let favorites = (localStorage.getItem(KEY) != null) ? JSON.parse(localStorage[KEY]) :[]
    favorites.push(data);
    localStorage.setItem(KEY, JSON.stringify(favorites));
}

const removeFromStorage = (id:number) => {
    let favorites = JSON.parse(localStorage[KEY]) as Array<any>;
    favorites = favorites.filter(fav => fav.id != id);
    localStorage.setItem(KEY, JSON.stringify(favorites));
}

const getAll = ():Array<any> => {
    return (localStorage.getItem(KEY) != null) ? JSON.parse(localStorage[KEY]) as Array<any> : [];
}

const filterPokemons = (pokemons:Array<any>, items:Array<any>):Array<any> => {
    let output:Array<any> = [];
    if(items.length > 0) {
      output = items.map( item => {
        item.isFavorite = (pokemons.some(fav => fav.id == item.id))? true : false;
        return item;
      });
    }
    return output;
}

const filterPokemon = (id:number):any => {
    let favorites = (localStorage.getItem(KEY) != null) ? JSON.parse(localStorage[KEY]) as Array<any> : [];
    let tempFavorites = favorites.filter( favorite => favorite.id == id);
    let obj = (tempFavorites.length > 0) ? tempFavorites[0] : {};
    return obj;
}

export {
    KEY as FAVORITES,
    saveOnstorage,
    removeFromStorage,
    getAll,
    filterPokemons,
    filterPokemon
}