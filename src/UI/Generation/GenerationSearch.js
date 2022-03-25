import React from 'react';
import { useSelector } from 'react-redux';
import { PokemonNotFound } from '../Search/PokemonNotFound';
import { CardsPokemon } from '../Types/CardsPokemon';

export const GenerationSearch = () => {
  const {status} = useSelector(state=>state.search);

  return (<div>
      {
          (status !== "not searched")&&((status === "not found")?(<PokemonNotFound desc='Generacion no encontrada' />):(<CardsPokemon/>))
      }
    </div>
  )
}
