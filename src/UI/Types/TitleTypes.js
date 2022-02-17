import React from 'react'

export const TitleTypes = ({title, descripcion}) => {
  return (
    <div className='flex flex-col mt-20 ' >
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

  </div>
  )
}
