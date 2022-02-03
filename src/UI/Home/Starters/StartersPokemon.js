import React from 'react';
import {Slides} from './Slides';



export const StartersPokemon = () => {
  return <div>
      <h1 className='text-2xl xs:text-3xl sm:text-5xl text-center pt-4 my-12 font-pokemon' >
        Pokemon Iniciales
      </h1>

      <Slides/>
  </div>;
};
