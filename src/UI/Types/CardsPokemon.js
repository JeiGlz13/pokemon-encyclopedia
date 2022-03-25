import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { usePagination } from '../../hooks/usePagination';
import { GenerationModal } from '../Generation/GenerationModal';
import { PaginationButtons } from '../PaginationButtons';
import { SpecificNotSearched } from '../SpecificNotSearched';
import {CardType} from './CardType';

export const CardsPokemon = () => {
  const {modal} = useSelector(state=>state.modal);
  const {pokemonList, type, generation} =  useSelector(state=>state.search);

  const [searchPokemon, setSearchPokemon] = useState(pokemonList);

    useEffect(() => {
      setSearchPokemon(pokemonList);
    }, [pokemonList])
    
    const {formValue, handleInputChange, reset} = useForm({
        search: ''
    })

    const {setPokemonPages, setCurrentPage, setPokemonToMap,
      pokemonToMap, paginateChange, currentPage,
      pokemonPerPage} = usePagination(searchPokemon);
  
      useEffect(() => {
        setPokemonPages();
      }, [currentPage, searchPokemon])

  const clickPokemon = (e) =>{
    e.preventDefault();
    const value = formValue.search.toLowerCase();
    const myNewList = pokemonList.filter((pokemon)=>(pokemon.name === value));
    setPokemonToMap(myNewList);
    reset();
  }

  const seeAllPokemon = (e) =>{
    e.preventDefault();
    (currentPage===1)&&setPokemonPages();
    setCurrentPage(1);
  }


  return (
    <div className='w-full mt-10 mb-6 flex flex-row flex-wrap justify-around '>

      <h1 className='w-full text-center text-2xl md:text-3xl font-black text-rojoPokemon mb-8' >
          {
            (type)
              ?(`Tipo ${type}`)
              :(`Generacion ${generation}`)
          }
          
      </h1>

      <div className='w-full flex flex-col justify-start items-start px-8 sm:px-14 mt-3 xs:mt-4 md:mt-6 mb-4 font-Poppins'>
          <h1 className = 'font-semibold mb-2 text-xl ' >
            {
              (type)
              ?(`Buscar Pokemon de tipo ${type}`)
              :(`Buscar Pokemon de la ${generation}° generacion`)
            }
            
          </h1>

          <div className='w-full flex flex-row justify-start items-center flex-wrap mt-4'>
            <form onSubmit={clickPokemon}
             className="relative text-gray-800 text-base xs:text-lg w-9/12 xs:w-8/12 sm:w-7/12 md:w-6/12 lg:w-5/12 ">
              <input type="search"
              id='search'
              name="search"
              max={45}
              autoComplete='none'
              placeholder="Buscar"
              value={formValue.search}
              onChange = {handleInputChange}
              className="bg-gray-100 h-11 sm:h-12 pl-8 pr-16 w-full
              rounded-full cardShadow text-base md:text-lg focus:outline-none" />
            
              <input type='submit' className='hidden' id='clickPokemonType' />
              <button className="absolute text-xl md:text-2xl right-0 top-0 ml-2 mt-2 mr-5"
              onClick={()=>document.querySelector('#clickPokemonType').click()} >
                  <i className="fas fa-search"></i>
              </button>
            </form>
            
              <button className="ml-4 sm:ml-8 border xs:border-2 border-solid border-azulPokemon rounded-full font-bold text-azulPokemon px-3 sm:px-4 py-2 sm:py-3 
              transition duration-300 ease-in-out hover:bg-azulPokemon hover:text-white 
              text-base sm:text-lg md:text-xl mt-3 mb-3" 
              onClick={seeAllPokemon} >
                Ver todos
              </button>
          </div>
      </div>
        {
            (pokemonToMap.length > 0)?(
              <div className = "flex flex-col">
                <div className='flex flex-row justify-around flex-wrap' >
                  {
                    pokemonToMap.map((pokemon, index)=>(
                      <CardType key={index} modal = {'openType'} {...pokemon} />))
                  }
                </div>
                {
                  (pokemonToMap.length > 2)&&<PaginationButtons pokemonPerPage={pokemonPerPage} totalPokemon = {pokemonList.length}
                  paginatePokemon = {paginateChange} actualPage = {currentPage} />
                }
              </div>
            ):(
              <SpecificNotSearched descripcion={`pokemon no encontrado en el tipo ${type}`} />
            )
        }



        {
          (modal === 'openType')&&(<GenerationModal/>)
        }
    </div>
  )
}
