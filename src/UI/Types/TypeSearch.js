import React from 'react'
import { useSelector } from 'react-redux'
import { PokemonNotFound } from '../Search/PokemonNotFound';
import { CardsTypes } from './CardsTypes';

export const TypeSearch = () => {
    const {status} = useSelector(state=>state.search);
    return (
    <div>
        {
            (status !== "not searched")&&((status === "not found")?(<PokemonNotFound desc='Generacion no encontrada' />):(<CardsTypes/>))
        }
    </div>
  )
}
