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
            const singlePokemon = await data.pokemon_species.map(async (pokemon) => {
                const searchingId = await fetch(pokemon.url);
                const pokemonByUrl = await searchingId.json();


                const data = await getPokemon('pokemon', pokemonByUrl.id);
    
                const {abilities, id, name, types, sprites, stats, weight, height,base_experience, species} = await data;
    
                const pokemonInfo = {abilities, id,name,types, sprites,stats, weight, height, base_experience, species}
                return pokemonInfo;
            }) 

            Promise.all(singlePokemon).then(result =>{
                result.sort((a, b)=>{
                    return a.id - b.id
                });

                dispatch(setGeneration(result, valueSearch));
            });

        } else {
            dispatch(pokemonNotFound());   
        }
    }
}

export const startSearchingType = (type, typeEnglish) =>{
    return async (dispatch) =>{
        const data = await getPokemon('type', typeEnglish);
        if (data) {
            const singlePokemon = await data.pokemon.map(async (pokemon) => {
                const data = await getPokemon('pokemon', pokemon.pokemon.name);
    
                const {abilities, id, name, types, sprites, stats, weight, height,base_experience, species} = await data;
    
                const pokemonInfo = {abilities, id,name,types, sprites,stats, weight, height, base_experience, species}
                return pokemonInfo;
            }) 

            Promise.all(singlePokemon).then(result =>{
                result.sort((a, b)=>{
                    return a.id - b.id
                });

                dispatch(setType(result, type));
            })
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

const setType = (arrPokemon, type) =>({
    type: types.setSearchType,
    payload: {
        list: arrPokemon,
        type
    }
})

export const clearSearch = () =>({type: types.clearSearch});

export const pokemonNotFound = () =>({type: types.setPokemonNotFound});