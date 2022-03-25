import React from 'react';

export const PaginationButtons = ({pokemonPerPage, totalPokemon, paginatePokemon, actualPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPokemon/pokemonPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div className="flex flex-wrap items-center justify-center mt-16 mx-1 xs:mx-2 sm:mx-6 md:mx-8 ">
            {
                (pageNumbers.length>0)&&(
                    pageNumbers.map((number)=>(
                        <div key={number} className='m-2 w-8 xs:w-10 sm:w-12 md:w-14 lg:w-16 ' >
                            <label onClick={()=>paginatePokemon(number)} 
                            className= {`flex cursor-pointer w-10 h-10 mr-1 justify-center items-center rounded-full buttonShadow transition-all duration-200 
                            ${((actualPage===number)
                                ?('bg-red-500 font-bold text-white')
                                :('text-gray-900 bg-white hover:text-red-500 font-semibold hover:font-bold'))} `}>
                                {number}
                            </label>
                        </div>
                    ))
                )
            }
    </div>
  )
}


