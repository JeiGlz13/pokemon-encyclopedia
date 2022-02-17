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
        
      <div className="bg-white flex items-center rounded-full cardShadow h-16 w-10/12 xs:w-9/12 sm:w-8/12 md:w-7/12">
                <input type="search" name="search"
                    className="rounded-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
                    autoComplete='none'
                    max={45}
                    id="search" 
                    placeholder="Buscar" 
                    value= {search} 
                    onChange = {handleInputChange} />

                <div className="p-2 md:p-4">
                    <button
                        className="rounded-full focus:outline-none w-10 h-12 md:w-10 md:h-12 flex items-center justify-center">
                        <img src="https://github.com/ahampriyanshu/gokemon/raw/master/assets/img/pokeball.png"
                            className="pokeball" alt="pokeball"
                            onClick = {handleOnSearch} />
                    </button>
                </div>
          </div>

    </div>
  </div>;
};
