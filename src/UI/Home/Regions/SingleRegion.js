import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegionActive } from '../../../redux/actions/regionActions';

export const SingleRegion = ({
    generation, 
    name,
    description,
    campeon,
    spriteCampeon,
    mapaJuego,
    mapa,
}) => {
    const dispatch = useDispatch();
    const region = useSelector(state => state.region);
    
    
   const setActive = (e) =>{
        const activeGeneration = {
            generation, 
            name,
            description,
            campeon,
            spriteCampeon,
            mapaJuego,
            mapa,
        }

       e.preventDefault();
       dispatch(setRegionActive(activeGeneration));
   } 

  return <div className={`transform  hover:scale-110 hover:shadow-lg duration-300 
                    cursor-pointer transition-all flex flex-col justify-center mx-0 xs:mx-2 lg:mx-4 mb-4 xs:mb-2 sm:mb-6  
                            ${(region.generation === generation)?("opacity-100"):("opacity-60")}`}
            onClick={setActive} >
      <h1 className='font-Poppins text-lg xs:text-base sm:text-xl md:text-2xl font-bold text-center colorPokemon' >
        {name}
      </h1>
      <img src={mapaJuego} alt={`Generacion ${generation}`}
      className=' w-52 xs:w-32 sm:w-48 md:w-60 lg:w-64 h-32 xs:h-24 sm:h-32 md:h-36 lg:h-44 rounded-lg sm:rounded-xl md:rounded-2xl ' />
  </div>;
};
