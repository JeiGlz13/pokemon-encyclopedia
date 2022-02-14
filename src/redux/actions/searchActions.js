import { getPokemon } from "../../Helpers/getPokemon";
import { types } from "../types/types"

export const startSearching = (urlValue, valueSearch) =>{
    return async (dispatch) =>{
    const data = await getPokemon(urlValue, valueSearch);
    if (data) {
        dispatch(setSearch(data));
    } else {
        dispatch(pokemonNotFound());
    }
    }
}

export const startSearchingGeneration = (urlValue, valueSearch) =>{
    return async (dispatch) =>{
        const data = await getPokemon(urlValue, valueSearch);

        if (data) {
            /* let singlePokemon = []; 

            await data.pokemon_species.forEach(async (pokemon) => {
                const data = await getPokemon('pokemon', pokemon.name);
    
                const {abilities, id, name, types, sprites, stats, weight, height} = await data;
    
                const pokemonInfo = {abilities, id,name,types, sprites,stats, weight, height}
                singlePokemon.push(pokemonInfo);
            }); */
            dispatch(setGeneration(data.pokemon_species, valueSearch));
        } else {
            dispatch(pokemonNotFound());   
        }
    }
}

const setSearch = (pokemon) => ({
    type: types.setSearchPokemon,
    payload: pokemon
});

const setGeneration = (arrPokemon, generation) =>({
    type: types.setSearchGeneration,
    payload:{ 
        list: arrPokemon,
        generation
    }
});

export const clearSearch = () =>({type: types.clearSearch});

export const pokemonNotFound = () =>({type: types.setPokemonNotFound});