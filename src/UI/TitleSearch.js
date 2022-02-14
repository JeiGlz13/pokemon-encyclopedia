import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startSearching, startSearchingGeneration } from '../redux/actions/searchActions';

export const TitleSearch = ({title, descripcion, urlValue}) => {
    const dispatch = useDispatch()
    const [formValue, setFormValue] = useState({
        search: ''
    });

    const {search} = formValue;

    const handleInputChange = ({target}) =>{
        setFormValue({
            ...formValue,
            [target.name]: target.value
        })
    }
    const setGenerationNumber = (value) =>{
        switch (value) {
            case ('generacion 1' || 'generation 1' || 'primera' || 'uno' || 'first' || 'primera generacion'):
                return '1';
            case ('generacion 2' || 'generation 2' || 'segunda' || 'dos' || 'second' || 'segunda generacion'):
                return '2';
            case ('generacion 3' || 'generation 3' || 'tercera' || 'tres' || 'third' || 'tercera generacion'):
                return '3';
            case ('generacion 4' || 'generation 4' || 'cuarta' || 'cuatro' || 'fourth' || 'cuarta generacion'):
                return '4';
            case ('generacion 5' || 'generation 5' || 'quinta' || 'cinco' || 'fifth' || 'quinta generacion'):
                return '5';
            case ('generacion 6' || 'generation 6' || 'sexta' || 'seis' || 'sixth' || 'sexta generacion'):
                return '6';
            case ('generacion 7' || 'generation 7' || 'septima' || 'siete' || 'seventh' || 'septima generacion'):
                return '7';
            case ('generacion 8' || 'generation 8' || 'octava' || 'ocho' || 'eighth' || 'octava generacion'):
                return '8';
        
            default:
                return value;
        }
    } 
    
    const searchPokemon = ()=>{
        let searchValue = search.toLowerCase().trim();
        const urlValueLower = urlValue.toLowerCase();
        
        Swal.fire({
            title: 'Espere...',
            text: 'Buscando pokemon',
            allowOutsideClick: false,
            didOpen: ()=>{
                Swal.showLoading();
            }
        });

        if (urlValueLower === 'generation') {
            searchValue = setGenerationNumber(searchValue); 
            dispatch(startSearchingGeneration(urlValueLower, searchValue))
        }
        
        if (urlValueLower === 'pokemon') {
            dispatch(startSearching(urlValueLower, searchValue));
        }

        setTimeout(() => {
            Swal.close();
        }, 400);
    }

    const handleOnSearch = (e) =>{
        e.preventDefault();
        searchPokemon();
        setFormValue({
            search: ''
        })
    };




  return <div className='flex flex-col mt-20 ' >
      <h1 className='text-center pt-4 my-6 md:my-8 text-2xl xs:text-3xl md:text-4xl font-black text-rojoPokemon' >
        <strong>
            {title}
        </strong>    
      </h1>

      <div className='w-full flex items-center justify-center font-Poppins font-semibold ' >
        <span className='w-11/12 xs:w-8/12 md:w-6/12 lg:w-5/12 text-center text-base sm:text-lg md:text-xl font-semibold text-[#1C4CBD] my-6' >
            {descripcion}
        </span>
      </div>

      <div className="flex items-center justify-center w-full mx-auto bg-white rounded-full font-Poppins font-semibold " >
        
        <div className="relative text-gray-800 text-base xs:text-lg w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12 mt-4">
            <input type="search" 
            id='search'
            name="search"
            autoComplete='none' 
            placeholder="Buscar" 
            value={search}
            onChange = {handleInputChange}
            className="bg-gray-100 h-11 sm:h-12 px-7 pr-16 w-full
            rounded-full shadow-lg text-base md:text-lg focus:outline-none" />
            
            <button className="absolute text-xl md:text-2xl right-0 top-0 ml-2 mt-2 mr-5"
            onClick={handleOnSearch} >
                <i className="fas fa-search"></i>
            </button>
        </div>

    </div>
  </div>;
};
