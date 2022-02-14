import React from 'react';
import { useDispatch } from 'react-redux';
import { clearSearch } from '../redux/actions/searchActions';
import { GenerationSearch } from '../UI/Generation/GenerationSearch';
import { TitleSearch } from '../UI/TitleSearch';

export const PokemonGenerations = () => {
  const dispatch = useDispatch();
  dispatch(clearSearch());

  return <div>
      <TitleSearch title = 'Buscar generación'
                 descripcion= 'Escribe el número de tu generación favorita y encuentra todos sus Pokemon'
                 urlValue = 'generation' />

      <GenerationSearch/>
  </div>;
};
