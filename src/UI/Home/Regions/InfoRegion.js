import React from 'react';
import { useSelector } from 'react-redux';

export const InfoRegion = () => {
  const region = useSelector(state => state.region);

  return <div className='my-6 w-full'  >
      <h1 className='text-center font-Poppins colorPokemon text-3xl font-bold'>
          {region.name}
      </h1>
      <div className='flex flex-row justify-around flex-wrap w-full px-0 xs:px-10 lg:px-16'>
          <img alt={region.name} src={region.mapa}
          className='mt-8 w-11/12 md:w-6/12 lg:w-5/12 rounded-3xl ' />
          <div className='flex flex-row flex-wrap md:flex-col w-full md:w-4/12 mt-8'>
              <div className='w-full sm:w-6/12 px-6 md:w-full md:px-0' >
                <h2 className='font-Poppins colorPokemon font-semibold text-base sm:text-sm md:text-base lg:text-lg mb-4 ' >
                    {region.generation}° generación
                </h2>
                <h3 className='font-Poppins text-base sm:text-sm md:text-base lg:text-lg mb-4' >
                    {region.description} 
                </h3>
              </div>

              <div className='flex flex-row px-6 sm:px-0'>
                  <div className='flex flex-col'>
                        <h1 className='font-Poppins colorPokemon font-semibold text-base sm:text-sm md:text-base lg:text-lg'>Campeón</h1>
                        <h2 className='mt-4 font-Poppins text-red-800 font-bold text-lg sm:text-base md:text-lg lg:text-xl '>{region.campeon}</h2>
                  </div>
                  <img alt={region.campeon} src={region.spriteCampeon} 
                  className=' w-28 lg:w-32 ml-10 ' />
              </div>
          </div>
      </div>
  </div>;
};
