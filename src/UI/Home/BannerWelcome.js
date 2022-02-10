import React from 'react';
import { Link } from 'react-router-dom';
import pokemonBanner from '../../Assets/PokemonBanner.png';

export const BannerWelcome = () => {
  return <>
    <div className="container text-[#CE2211] mx-auto px-2 xs:px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center my-20">
        <div className="sm:w-2/5 flex flex-col items-center md:items-start mt-8 sm:mt-0">
            <h1 className="text-4xl lg:text-6xl leading-none mb-2 text-center md:text-left">
                <strong className="font-black text-center md:text-left">Enciclopedia Pokemon</strong> 
            </h1>
            <p className="lg:text-xl text-center md:text-left font-semibold mb-3 sm:mb-5 md:mb-12 text-[#1C4CBD]">
                Busca a tus pokemon favoritos y descubre toda su informacion
            </p>
            <Link to = '/Search' className="text-base md:text-lg bg-[#CE2211] hover:bg-[#E54222] 
            text-white font-bold 
            py-2 md:py-3 px-5 md:px-10 rounded-full transition-all ">
                Empezar
            </Link>
        </div>
        <div className="sm:w-3/5">
            <img alt='pokemon' src= {pokemonBanner}
            className = 'w-full drop-shadow-base sm:drop-shadow-lg md:drop-shadow-xl lg:drop-shadow-2xl' />
        </div>
    </div>
  </>;
};
