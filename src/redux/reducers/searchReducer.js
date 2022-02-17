import { types } from "../types/types";

const initialState = {
    status: 'not searched',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setSearchPokemon:
      return { ...state,
        status: 'searched',
        pokedexNumber: action.payload.id ,
        name: action.payload.name,
        sprite: {
          front: action.payload.sprites.front_default,
          back: action.payload.sprites.back_default
        }, 
        abilities: action.payload.abilities,
        stats: action.payload.stats,
        types: action.payload.types,
        weight: action.payload.weight,
        height: action.payload.height,
       };

    case types.setSearchGeneration:
      return {...state,
         status: 'searched',
         pokemonList: [...action.payload.list],
         generation: action.payload.generation
      }

    case types.setSearchType:
      return {
        ...state,
        status: 'searched',
        pokemonList: [...action.payload.list],
        type: action.payload.type
      }

    case types.setPokemonNotFound:
        return {
          status: 'not found',
        }

    case types.clearSearch:
        return {
            status: 'not searched',
        }

    default:
      return state;
  }
};
