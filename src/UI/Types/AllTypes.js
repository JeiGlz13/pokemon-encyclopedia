import React from 'react';
import { SingleType } from './SingleType';

export const AllTypes = () => {
    const pokemonType = [
        {
          tipo: "normal",
          type: 'normal',
        },
        {
          tipo: "pelea",
          type: 'fighting',
        },
        {
          tipo: "volador",
          type: 'flying',
        },
        {
          tipo: "veneno",
          type: 'poison',
        },
        {
          tipo: "tierra",
          type: 'ground',
        },
        {
          tipo: "roca",
          type: 'rock',
        },
        {
          tipo: "bicho",
          type: 'bug',
        },
        {
          tipo: "fantasma",
          type: 'ghost',
        },
        {
          tipo: "acero",
          type: 'steel',
        },
        {
          tipo: "fuego",
          type: 'fire',
        },
        {
          tipo: "agua",
          type: 'water',
        },
        {
          tipo: "planta",
          type: 'grass',
        },
        {
          tipo: "electrico",
          type: 'electric',
        },
        {
          tipo: "psiquico",
          type: 'psychic',
        },
        {
          tipo: "hielo",
          type: 'ice',
        },
        {
          tipo: "dragon",
          type: 'dragon',
        },
        {
          tipo: "siniestro",
          type: 'dark',
        },
        {
          tipo: "hada",
          type: 'fairy',
        },
      ]

  return (
    <div className='w-full mt-10 flex justify-center items-center' >
    <div className='w-10/12 flex flex-row justify-around flex-wrap' >
        {
            pokemonType.map((type, index)=>(
                <SingleType key={index} type = {type.type} tipo = {type.tipo} />
            ))
        }
    </div>
</div>
  )
}
