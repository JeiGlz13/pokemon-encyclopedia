import React from 'react';
import { useSelector } from 'react-redux';
import { LabelType } from './LabelType';

export const PokemonResult = () => {
  const pokemon = useSelector(state=>state.search);

  const {abilities, stats, types} = pokemon;

  return <div className='flex flex-col w-full mt-12 mb-8'>
      <h1 className='w-full text-center text-xl md:text-2xl font-black text-rojoPokemon mb-8' >
          {pokemon.name.toUpperCase()}
      </h1>
      
      <div className='w-full flex flex-row flex-wrap justify-around ' >
        <div className='flex flex-col w-10/12 xs:w-9/12 sm:w-5/12 px-8 xs:x-12 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-5 md:py-6 lg:py-8 rounded-2xl shadow-2xl mb-8'>
          
          <h1 className='text-xl sm:text-lg lg:text-xl font-bold text-[#1C4CBD] mb-4' >
                Sprites
          </h1>
          <div className='w-full flex flex-row flex-wrap justify-around px-0.5 md:px-4' >
            <img alt='Sprite Front' src={pokemon.sprite.front}
            className = 'w-10/12 xs:w-5/12' />
            
            <img alt='Sprite Back' src={pokemon.sprite.back}
            className = 'w-10/12 xs:w-5/12' />
          </div>

          <div className='flex flex-row flex-wrap justify-center mt-6' >
            {
              types.map((type)=>(
                <LabelType typePokemon= {type.type.name} />
              ))
            }
          </div>

          <div className='flex flex-col mt-6'>
            <h1 className='font-Poppins text-grisOscuro text-sm xs:text-lg sm:text-base lg:text-lg font-semibold ' >
              <strong className='text-steelBlue mr-1 md:mr-4'> No. Pokedex: </strong>
                {pokemon.pokedexNumber}
            </h1>
            
            <h1 className='font-Poppins text-grisOscuro text-sm xs:text-lg sm:text-base lg:text-lg font-semibold ' >
            <strong className='text-steelBlue mr-1 md:mr-4'> Peso </strong>
              {pokemon.weight/10} kg
            </h1>
            
            <h1 className='font-Poppins text-grisOscuro text-sm xs:text-lg sm:text-base lg:text-lg font-semibold ' >
            <strong className='text-steelBlue mr-1 md:mr-4'> Tamaño </strong>
              {pokemon.height/10} m
            </h1>
          </div>

        </div>

        <div className='w-10/12 xs:w-9/12 sm:w-5/12 font-Poppins' >
            <div className='px-8 xs:px-12 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-5 md:py-6 lg:py-8 rounded-2xl shadow-2xl mb-8 w-full' >
              <h1 className='text-lg lg:text-xl font-bold text-[#1C4CBD] mb-4' >
                Habilidades
              </h1>
              {
                abilities.map((ability) =>(
                  <h1 className='text-grisOscuro font-Poppins font-semibold text-sm xs:text-lg sm:text-base lg:text-lg pl-4 first-letter:uppercase'>{ability.ability.name}</h1>
                ))
              }
            </div>
            

            <div className='px-8 xs:px-12 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-5 md:py-6 lg:py-8 rounded-2xl shadow-2xl' >
              <h1 className='text-base xs:text-lg lg:text-xl font-bold text-[#1C4CBD] mb-2' >
                Estadisticas base
              </h1>
              {
                stats.map((stat)=>(
                  <h1 className=' text-grisOscuro font-Poppins font-semibold text-xs xs:text-base sm:text-sm lg:text-base'>
                    <strong className='mr-0 xs:mr-1 sm:mr-4 text-steelBlue first-letter:uppercase font-Poppins  font-semibold text-sm xs:text-lg sm:text-base lg:text-lg pl-0 xs:pl-1 md:pl-4' >{stat.stat.name}: </strong>
                    {stat.base_stat}
                  </h1>
                ))
              }
            </div>
        </div>
      </div>

  </div>;
};
