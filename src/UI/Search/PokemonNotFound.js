import React from 'react';
import PikachuDefeated from '../../Assets/Pikachu.png';

export const PokemonNotFound = () => {
  return <div className='animate__animated animate__fadeIn w-full flex flex-col items-center justify-center mt-16' >
      <h1 className='text-center pt-4 my-2 text-3xl font-black text-[#1C4CBD]' >
        <strong>
            Pokemon no encontrado
        </strong>    
      </h1>

      <img alt='Pokemon no encontrado' src={PikachuDefeated}
      className = 'w-4/12 drop-shadow-2xl' />

    
  </div>;
};
