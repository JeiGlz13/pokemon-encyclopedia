import { useState } from "react";

export const usePagination = (searchPokemon) =>{
      const [currentPage, setCurrentPage] = useState(1);
      const [pokemonPerPage] = useState(12);
      const [pokemonToMap, setPokemonToMap] = useState(searchPokemon)  
      
      const setPokemonPages = () =>{
        const indexOfLastPost = currentPage * pokemonPerPage;
        const indexOfFirstPost = indexOfLastPost - pokemonPerPage;
        const currentPokemon = searchPokemon.slice(indexOfFirstPost, indexOfLastPost);

        setPokemonToMap(currentPokemon);
        window.scrollTo(0,320);
      }
      
      const paginateChange = (number) => setCurrentPage(number);
      
    return { 
        setPokemonPages, setCurrentPage, setPokemonToMap, 
        pokemonToMap, paginateChange,
        currentPage, pokemonPerPage
    }
}