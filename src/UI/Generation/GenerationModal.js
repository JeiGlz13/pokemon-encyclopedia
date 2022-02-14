import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalClose } from '../../redux/actions/modalActions';
import {LabelType} from '../Search/LabelType';

export const GenerationModal = () => {
    const dispatch = useDispatch();
    const {modalPokemon} = useSelector(state=> state.modal);

    const {abilities, name, id, sprites, stats, weight, height, types, species, base_experience } = modalPokemon;

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(species?.url)
            .then(async (response) => {
               const info = await response.json();
               setPokemon(info)
            })

        return () => {
            setPokemon([]);
        };
    }, 
    [species]);

    const {base_happiness, capture_rate, growth_rate, genera} = pokemon;

    const setClose = (e) =>{
        e.preventDefault();
        dispatch(setModalClose());
    }

  return (
  
    <div className='w-screen h-screen fixed z-40 bg-gray-900 bg-opacity-80 top-0 flex justify-center items-center content-center' >
        <div className="h-5/6 w-10/12 md:w-10/12 lg:w-9/12 -translate-y-0 mr-2 sm:mr-4 md:mr-8">
            <div className="azulPokemon shadow-lg hidden xs:inline-block w-full h-full rounded-3xl absolute bottom-0 transform -rotate-3"></div>
            <div className="bg-rojoPokemon shadow-lg hidden xs:inline-block w-full h-full rounded-3xl absolute bottom-0 transform rotate-3"></div>
        
            <div className="bg-white transition shadow-xl w-full h-full rounded-3xl absolute flex flex-col items-start px-6 xs:px-10 sm:px-16 md:px-14 py-6 md:py-10">
                <div className='w-full flex flex-row justify-between items-center mb-0.5 md:mb-2' >
                    <div className = 'flex flex-col sm:flex-row sm:items-center'>
                        <h1 className="text-base sm:text-lg md:text-xl font-Poppins font-bold text-rojoPokemon sm:text-center uppercase p-0 sm:p-3">
                            {name}
                        </h1>
                        <h2  className = 'font-Poppins text-sm md:text-base text-grisOscuro ml-0 sm:ml-4' >
                            {
                                (genera)&&(genera[5].genus)
                            }
                        </h2>
                    </div>
                    <button className='w-8 xs:w-8 md:w-12 h-8 xs:h-8 md:h-12 rounded-full border-2 border-solid border-rojoPokemon'
                    onClick={setClose} >
                        <i className="fa-solid fa-x text-rojoPokemon"></i>
                    </button>
                </div>
                <hr className='hidden sm:flex w-full bg-gray-300 h-0.5' />

                <div className='w-full h-full flex flex-col md:flex-row justify-between items-center'>
                    <div className='bg-gradient-to-b rounded-3xl from-[#FFFF84] to-[#FFFFF4] 
                    h-3/12 md:h-5/6 w-10/12 xs:w-8/12 sm:w-7/12 md:w-5/12 
                    flex flex-col justify-center items-center 
                    mb-1 md:mb-0 px-8 xs:px-0' >
                        <h1 className='text-gray-400 opacity-90 text-xl sm:text-2xl md:text-3xl font-Poppins font-black text-center'>
                            <strong># {id}</strong>
                        </h1>

                        <img src={sprites?.front_default} alt='sprite'
                        className='w-7/12 xs:w-5/12 md:w-6/12' />

                        <div className = "w-full flex flex-row justify-center items-center" >
                            {
                                types.map((type, index)=>(
                                    <LabelType key={index} typePokemon= {type.type.name} />
                                ))
                            }
                        </div>
                    </div>

                    <div className='flex flex-col w-full md:w-6/12' >
                        <div className = 'flex flex-row justify-between items-start' >
                            <div className = 'w-5/12 mb-1 md:mb-2' >
                                <h1 className='mb-1 md:mb-2 text-sm md:text-base lg:text-lg text-azulPokemon font-Poppins font-bold '>
                                    Bio
                                </h1>
                                <div className = "w-full flex flex-col xs:flex-row justify-between">
                                    <h1 className='font-bold text-sm md:text-base lg:text-lg' >Altura</h1>
                                    <h2 className = 'text-sm md:text-base'>{height/10} m</h2>
                                </div>
                                <div className = "w-full flex flex-col xs:flex-row justify-between">
                                    <h1 className='font-bold text-sm md:text-base lg:text-lg' >Peso</h1>
                                    <h2 className = 'text-sm md:text-base'>{weight/10} kg</h2>
                                </div>
                                <div className = "w-full flex flex-col sm:flex-row md:flex-col justify-between">
                                    <h1 className='font-bold text-sm md:text-base lg:text-lg' >Habilidades</h1>
                                    <div>
                                    {
                                        abilities?.map((ability, index) =>(
                                        <h2 key={index} 
                                        className='first-letter:uppercase text-sm md:text-base'>
                                            {ability.ability.name}
                                        </h2>
                                        ))
                                    }
                                    </div>
                                </div>
                            </div>
                            <div className = 'w-6/12 xs:w-5/12'>
                                <h1 className='mb-1 md:mb-2 text-sm md:text-base lg:text-lg text-azulPokemon font-Poppins font-bold '>
                                    Entrenamiento
                                </h1>
                                <div className = "w-full flex flex-col xs:flex-row justify-between">
                                    <h1 className='font-bold text-sm md:text-base lg:text-lg' >Exp. base</h1>
                                    <h2 className = 'text-sm md:text-base'>{base_experience}</h2>
                                </div>
                                <div className = "w-full flex flex-col xs:flex-row justify-between">
                                    <h1 className='font-bold text-sm md:text-base lg:text-lg' >Amistad</h1>
                                    <h2 className = 'text-sm md:text-base'>{base_happiness}</h2>
                                </div>
                                <div className = "w-full flex flex-col xs:flex-row justify-between">
                                    <h1 className='font-bold text-sm md:text-base lg:text-lg' >Ratio captura</h1>
                                    <h2 className = 'text-sm md:text-base'>{capture_rate}</h2>
                                </div>
                                <div className = "w-full flex flex-col sm:flex-row md:flex-col justify-between">
                                    <h1 className='font-bold text-sm md:text-base lg:text-lg' >Crecimiento</h1>
                                    <h2 className = 'first-letter:uppercase text-sm md:text-base' >{growth_rate?.name}</h2>
                                </div>
                              
                            </div>
                        </div>
                        <h1 className='mb-1 md:mb-2 text-sm md:text-lg text-azulPokemon font-Poppins font-bold '>
                            Estadisticas
                        </h1>
                        <div className='flex flex-row flex-wrap w-full xs:w-11/12 justify-between'>
                            {
                                stats?.map((stat, index)=>{
                                    let statName = stat?.stat.name;
                                    if (statName === 'special-attack') {
                                        statName = 'sp. Atk'
                                    }if (statName === 'special-defense') {
                                        statName = 'sp. def'
                                    }
                                    return(<div key={index} 
                                    className ='flex flex-col w-4/12 items-center font-Poppins' >
                                        <h1 className='font-bold text-sm md:text-base lg:text-lg first-letter:uppercase' >{statName}</h1>
                                        <h2 className = 'text-sm md:text-base'>{stat.base_stat}</h2>
                                    </div>
                                )})
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}
