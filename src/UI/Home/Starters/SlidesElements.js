import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStarter } from '../../../redux/actions/starterActions';

export const SlidesElements = ({
    generation,
    pokemon,
    description,
    spriteFuego,
    spriteAgua,
    spritePlanta,
    pokemonFuego,
    pokemonAgua,
    pokemonPlanta
  }) => {

    const {activeStarter} = useSelector(state => state.starter);
    let activePokemon;
    let fontColor;

    const dispatch = useDispatch();

    switch (activeStarter) {
        case 'Fuego':
            activePokemon = pokemonFuego;
            fontColor = "text-red-600";
            break;
        case 'Agua':
            activePokemon = pokemonAgua; 
            fontColor = "text-blue-600";
            break;
        case 'Planta':
            activePokemon = pokemonPlanta
            fontColor = "text-green-600";
            break;
        default:
            activePokemon = pokemonFuego;
            fontColor = "text-red-600";
            break;
    }

    const setActivePokemon = (e, type) =>{
        e.preventDefault();
        dispatch(setActiveStarter(type));
    }
  return <div>
      <h1 className='font-Poppins text-sm xs:text-base sm:text-lg md:text-xl font-bold text-center colorPokemon' >
          {pokemon}
      </h1>
      <div className='flex flex-row flex-wrap justify-around mt-4' >
          <img src={spritePlanta}  alt = {pokemonPlanta.name} 
          className={`w-5/12 xs:w-3/12 sm:w-2/12 cursor-pointer
          ${(activeStarter === 'Planta')?("opacity-100"):("opacity-60")} `} 
          onClick={e=>setActivePokemon(e, 'Planta')} />
          <img src={spriteFuego}  alt = {pokemonFuego.name} 
          className={`w-5/12 xs:w-3/12 sm:w-2/12 cursor-pointer
          ${(activeStarter === 'Fuego')?("opacity-100"):("opacity-60")} `} 
          onClick={e=>setActivePokemon(e, 'Fuego')} />
          <img src={spriteAgua}  alt = {pokemonAgua.name} 
          className={`w-5/12 xs:w-3/12 sm:w-2/12 cursor-pointer
          ${(activeStarter === 'Agua')?("opacity-100"):("opacity-60")} `} 
          onClick={e=>setActivePokemon(e, 'Agua')} />
      </div>

      <div className='w-full flex justify-center items-center flex-col ' >
        <h1 className= {`text-sm md:text-base lg:text-lg font-Poppins text-center mt-6
        ${fontColor} `} >{activePokemon.name}</h1>
        <h2 className='text-center text-gray-700 w-11/12 sm:w-10/12 md:w-9/12 font-Poppins font-semibold  text-xs sm:text-sm md:text-base my-1 md:my-2 lg:my-4 ' >{activePokemon.pokedex}</h2>
      </div>
      
      <div className='flex justify-center items-center ' >

        <table className=" w-11/12 xs:w-10/12 md:w-9/12 lg:w-8/12 font-Poppins flex flex-col juestify-center items-center ">
            <tr className="text-gray-700">
                <td className="px-2 py-1 border">
                    <p className="font-semibold text-sm lg:text-base text-rojoPokemon ">Especie:</p>
                </td>
                <td className="px-2 py-1 border text-xs lg:text-sm">
                    <span className="px-2 py-1 font-semibold text-gray-700 bg-gray-100 rounded-sm"> 
                        {activePokemon.especie}
                    </span>
                </td>
            </tr>
     
            <tr className="text-gray-700">
                <td className="px-2 py-1 border">
                    <p className="font-semibold text-sm lg:text-base text-rojoPokemon">Altura:</p>
                </td>
                <td className="px-2 py-1 border text-xs lg:text-sm">
                    <span className="px-2 py-1 font-semibold  text-gray-700 bg-gray-100 rounded-sm"> 
                        {activePokemon.altura} 
                    </span>
                </td>
            </tr>
            <tr className="text-gray-700">
                <td className="px-2 py-1 border">
                    <p className="font-semibold text-sm lg:text-base text-rojoPokemon">Peso:</p>
                </td>
                <td className="px-2 py-1 border text-xs lg:text-sm">
                    <span className="px-2 py-1 font-semibold  text-gray-700 bg-gray-100 rounded-sm"> 
                        {activePokemon.peso}
                    </span>
                </td>
            </tr>
            <tr className="text-gray-700">
                <td className="px-2 py-1 border">
                    <p className="font-semibold text-sm lg:text-base text-rojoPokemon">Habitat:</p>
                </td>
                <td className="px-2 py-1 border text-xs lg:text-sm">
                    <span className="px-2 py-1 font-semibold  text-gray-700 bg-gray-100 rounded-sm"> 
                        {activePokemon.habitat}
                    </span>
                </td>
            </tr>
        </table>

      </div>
  </div>;
};
