import React from 'react';
import { InfoSearch } from '../UI/Search/InfoSearch';
import { TitleSearch } from '../UI/TitleSearch';

export const PokemonSearch = () => {
  return <div>
    <TitleSearch title = 'Buscar Pokemon'
                 descripcion= 'Escribe el nombre de tu pokemon favorito y encuentra toda su informacion'
                 urlValue = 'Pokemon' />
    <InfoSearch/>
  </div>;
};
