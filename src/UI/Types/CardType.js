import React from 'react';
import {LabelType} from '../Search/LabelType';
import { useDispatch } from 'react-redux';
import { setOpenModal } from '../../redux/actions/modalActions';

import '../Navbar/Navbar.css';

export const CardType = ({
  abilities, 
  name, 
  id, 
  sprites, 
  stats, 
  weight, 
  height, 
  types, 
  species, 
  base_experience,
  modal }) => {
    const dispatch = useDispatch();

    const infoPokemon = {abilities, name, id, sprites, stats, weight, height, types, species, base_experience }

    const setOpen = (e) =>{
      e.preventDefault();
      dispatch(setOpenModal(modal, infoPokemon));
    } 
    
  return (<div className='cursor-pointer my-16 mx-4 cardShadow'
    onClick={setOpen} >
    <div className="h-44 sm:h-52 lg:h-56 w-60 lg:w-72 absolute flex justify-center items-center mx-2  ">
        <img
          className="h-24 lg:h-28 w-24 lg:w-28 rounded-full absolute bg-white shadow-xl "
          src={sprites?.front_default}
          alt="pokemon"
        />
    </div>

      <div
        className="
          h-36 sm:h-48 lg:h-52
          bg-red-500
          rounded-3xl
          shadow-md
          w-64 lg:w-80 mx-0"
      >
        <div className="h-1/2 w-full flex justify-between items-baseline px-4 sm:px-8 py-5 font-Poppins text-base sm:text-lg md:text-xl font-bold text-white">
          <h1 className='first-letter:uppercase ' >Exp: {base_experience}</h1>
          <h1># {id}</h1>
        </div>

        <div
          className="
            bg-white
            h-full sm:h-5/6
            w-full
            cardShadow
            rounded-3xl
            flex flex-col
            justify-around
            items-center
          "
        >
          <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2 font-Poppins font-semibold">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-gray-800 text-base lg:text-lg">Peso</h1>
              <h1 className="text-gray-700 text-base lg:text-lg">{weight/10} kg</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-gray-800 text-base lg:text-lg">Altura</h1>
              <h1 className="text-gray-700 text-base lg:text-lg">{height/10} m</h1>
            </div>
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center items-center">
            <h1 className="text-gray-700 font-bold first-letter:uppercase text-xl md:text-2xl">{name}</h1>
          </div>

          <div className='flex flex-row flex-wrap justify-center ' >
            {
              types?.map((type, index)=>(
                <LabelType key={index} typePokemon= {type.type.name} />
              ))
            }
          </div>
        </div>
      </div>
    {/* <div className="cursor-pointer animate__animated animate__fadeIn animate__delay-2s w-64 xs:w-56 sm:w-60 md:w-64 lg:w-72 mx-4 sm:mx-2 md:mx-6 my-10 rounded-2xl bg-white cardShadow px-2 pt-5 pb-4 text-gray-800"
    onClick={setOpen} >
        <div className="w-full pb-5 ">
            <div className="overflow-hidden rounded-full w-32 xs:w-28 sm:w-32 md:w-36 h-32 xs:h-28 sm:h-32 md:h-36 -mt-16 mx-auto shadow-lg bg-white navShadow">
                <img src={sprites?.front_default}
                className='w-full p-0'
                alt="sprite" />
            </div>
        </div>

        <div className="w-full mb- flex justify-center">
            <h1 className='font-Poppins text-grisOscuro text-base xs:text-xl sm:text-lg lg:text-xl font-semibold ' >            
                # {id}
            </h1>
        </div>

        <div className="w-full">
            <p className="text-md xs:text-sm sm:text-md md:text-lg text-rojoPokemon font-bold text-center">{name?.toUpperCase()}</p>
        </div>

        <div className="w-full mt-1 flex justify-center">
            <h1 className='font-Poppins text-gray-800 text-base xs:text-xl sm:text-lg lg:text-xl font-semibold ' >            
                <strong>Exp base: </strong>
                {base_experience}
            </h1>
        </div>

        <div className='flex flex-row flex-wrap justify-center ' >
            {
              types?.map((type, index)=>(
                <LabelType key={index} typePokemon= {type.type.name} />
              ))
            }
        </div>

    </div> */}
    </div>
  )
}
