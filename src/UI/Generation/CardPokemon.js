import React, { useEffect, useState } from 'react';
import {LabelType} from '../Search/LabelType';

import '../Navbar/Navbar.css'
import { useDispatch } from 'react-redux';
import { setOpenModal } from '../../redux/actions/modalActions';

export const CardPokemon = ({nameAPI}) => {
    const [pokemon, setPokemon] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nameAPI}`)
            .then(async (response) => {
               const info = await response.json();
               setPokemon(info)
            })

        return () => {
            setPokemon([]);
        };
    }, 
    [nameAPI]);


    const {abilities, name, id, sprites, stats, weight, height, types, species, base_experience } = pokemon;

    const infoPokemon = {abilities, name, id, sprites, stats, weight, height, types, species, base_experience }

    const setOpen = (e) =>{
      e.preventDefault();
      const modal = 'openGeneration';
      dispatch(setOpenModal(modal, infoPokemon));
    }
    
    
  return (
    <div className="cursor-pointer animate__animated animate__fadeIn animate__delay-2s w-64 xs:w-56 sm:w-60 md:w-64 lg:w-72 mx-4 sm:mx-2 md:mx-6 my-10 rounded-2xl bg-white cardShadow px-2 pt-5 pb-10 text-gray-800"
     onClick={setOpen} >
        <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-32 xs:w-28 sm:w-32 md:w-36 h-32 xs:h-28 sm:h-32 md:h-36 -mt-16 mx-auto shadow-lg bg-white navShadow">
                <img src={sprites?.front_default}
                className='w-full p-0'
                alt="sprite" />
            </div>
        </div>

        <div className="w-full">
            <p className="text-md xs:text-sm sm:text-md md:text-lg text-rojoPokemon font-bold text-center">{name?.toUpperCase()}</p>
        </div>

        <div className="w-full mb- flex justify-center">
            <h1 className='font-Poppins text-grisOscuro text-sm xs:text-lg sm:text-base lg:text-lg font-semibold ' >
              <strong className='text-steelBlue mr-1 md:mr-4'> No. Pokedex: </strong>
                {id}
            </h1>
        </div>

        <div className='flex flex-row flex-wrap justify-center mt-1' >
            {
              types?.map((type, index)=>(
                <LabelType key={index} typePokemon= {type.type.name} />
              ))
            }
          </div>

    </div>
  )
}
