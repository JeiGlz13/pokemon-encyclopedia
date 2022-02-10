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

const setSearch = (pokemon) => ({
    type: types.setSearchPokemon,
    payload: pokemon
});

export const clearSearch = () =>({type: types.clearSearch});

export const pokemonNotFound = () =>({type: types.setPokemonNotFound});