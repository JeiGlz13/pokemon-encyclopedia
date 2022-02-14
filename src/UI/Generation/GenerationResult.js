import React from 'react';
import { useSelector } from 'react-redux';
import { CardPokemon } from './CardPokemon';
import { GenerationModal } from './GenerationModal';

export const GenerationResult = () => {
    const {pokemonList, generation} = useSelector(state=>state.search);
    const {modal} = useSelector(state=>state.modal);

  return (
    <div className='w-full flex flex-row flex-wrap justify-around items-center my-16' >
      <h1 className='w-full text-center text-2xl md:text-3xl font-black text-rojoPokemon mb-8' >
          Generacion {generation}
      </h1>
        {
            pokemonList.map((pokemon, index)=>(
                <CardPokemon key={index} nameAPI={pokemon.name} />
            ))
        }

        {
          (modal === 'openGeneration')&&(<GenerationModal/>)
        }

    </div>
  )
}
