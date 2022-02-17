import React from 'react';
import pikachuChibi from '../Assets/PikachuChibi.png';

export const SpecificNotSearched = ({descripcion}) => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-2'>
        <h1 className='first-letter:uppercase text-base sm:text-lg md:text-xl lg:text-2xl font-Poppins font-extrabold text-azulPokemon' >
            {descripcion}
        </h1>
        <img src={pikachuChibi} alt = 'Pokemon not found'
        className=' w-8/12 xs:w-7/12 sm:w-6/12 md:w-5/12 lg:w-4/12 mt-4' />
    </div>
  )
}
