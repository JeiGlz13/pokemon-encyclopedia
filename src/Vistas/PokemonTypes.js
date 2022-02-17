import React from 'react';
import { useDispatch } from 'react-redux';
import { clearSearch } from '../redux/actions/searchActions';
import { AllTypes } from '../UI/Types/AllTypes';
import { TitleTypes } from '../UI/Types/TitleTypes';
import { TypeSearch } from '../UI/Types/TypeSearch';

export const PokemonTypes = () => {
  const dispatch = useDispatch();
  dispatch(clearSearch());

  return <div>
      <TitleTypes 
        title='Buscar tipos' 
        descripcion='Elige un tipo elemental para descubrir todoslos pokemon que lo poseen' />

      <AllTypes/>

      <TypeSearch/>
  </div>;
};
