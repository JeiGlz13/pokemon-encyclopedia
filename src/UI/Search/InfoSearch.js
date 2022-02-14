import React from 'react';
import {  useSelector } from 'react-redux';
import { PokemonNotFound } from './PokemonNotFound';
import { PokemonResult } from './PokemonResult';

export const InfoSearch =  () => {
  const {status} = useSelector(state=>state.search);

  return <div className='w-full ' >
    {
      (status !== "not searched")&&(
        (status === "not found")?(<PokemonNotFound desc='Pokemon no encontrado' />):(<PokemonResult/>))
    }
  </div>;
};
