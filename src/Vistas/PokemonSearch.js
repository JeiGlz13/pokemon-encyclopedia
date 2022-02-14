import React from 'react';
import { useDispatch } from 'react-redux';
import { clearSearch } from '../redux/actions/searchActions';
import { InfoSearch } from '../UI/Search/InfoSearch';
import { TitleSearch } from '../UI/TitleSearch';

export const PokemonSearch = () => {
  const dispatch = useDispatch();
  dispatch(clearSearch());
 

  return <div>
    <TitleSearch title = 'Buscar Pokemon'
                 descripcion= 'Escribe el nombre de tu pokemon favorito y encuentra toda su informacion'
                 urlValue = 'Pokemon' />
    <InfoSearch/>
  </div>;
};
