import React from 'react';
import { pokemonType } from '../../ApiReferences/pokemonType';
import '../Navbar/Navbar.css';

export const LabelType = ({typePokemon}) => {
  const specificType = pokemonType.find((type) => type.englishName === typePokemon);

  const backColor = {
    backgroundColor: specificType.color
  }

  return <div className='flex justify-center items-center my-2 mx-1 lg:mx-3'  >
      <h1 className=' flex justify-center items-center w-20 xs:w-24 lg:w-28 h-7 xs:h-8 lg:h-9 rounded-full text-xs xs:text-sm lg:text-base 
      text-white font-Poppins font-bold border-2 border-solid border-white typeShadow' 
      style = {backColor}>
        {specificType?.name.toUpperCase()}
      </h1>
  </div>;
};
