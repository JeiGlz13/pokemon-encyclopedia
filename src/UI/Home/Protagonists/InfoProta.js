import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setProtaGender } from '../../../redux/actions/protaActions';

export const InfoProta = () => {
  const prota = useSelector(state => state.prota);
  const dispatch = useDispatch();
  console.log(prota.activeProta);
  let selectedProta;
  ((prota.activeProta === 'Female')?(selectedProta = prota.femaleProta):(selectedProta = prota.maleProta))


  const setGender = (e, gender) =>{
      e.preventDefault();
      dispatch(setProtaGender(gender));
  }

  return <div className='w-full flex justify-center items-center' >
      <div className='w-11/12 mt-20 px-6 xs:px-10 sm:px-16 lg:px-20 py-8 sm:py-12 lg:py-16 rounded-2xl shadow-2xl ' >
        <h1 className='text-center font-Poppins colorPokemon text-xl md:text-2xl lg:text-3xl font-bold' >
            {prota.names}
        </h1>
        <div className='w-full flex flex-row flex-wrap relative' >
            <div className='w-full md:w-5/12 lg:w-6/12 px-4 flex flex-row justify-around mt-10' >
                <img alt='prota' src={prota.imageMale} 
                className= {`cursor-pointer w-20 xs:w-24 md:w-36 lg:w-44 
                opacity-60 transition-all ${prota.activeProta === 'Male'&&'opacity-100'}`} 
                onClick={(e)=>setGender(e, 'Male')} />
                <img alt='prota' src={prota.imageFemale} 
                className= {`cursor-pointer w-20 xs:w-24 md:w-36 lg:w-44 
                transition-all opacity-60 ${prota.activeProta === 'Female'&&'opacity-100'}`}
                onClick={(e)=>setGender(e, 'Female')}  />
            </div>
            <div className='w-full md:w-7/12 lg:w-6/12 py-10 px-1 xs:px-3 sm:px-5' >
                <table className="w-full font-Poppins">
                        <tr className="text-gray-700">
                            <td className="px-2 py-3 border">
                                <p className="font-semibold text-sm sm:text-base md:text-sm lg:text-base text-rojoPokemon ">Nombre:</p>
                            </td>
                            <td className="px-2 py-3 border text-xs sm:text-sm md:text-xs lg:text-sm">
                                <span className="px-2 py-1 font-semibold text-gray-700 bg-gray-100 rounded-sm"> 
                                    {selectedProta.name}
                                </span>
                            </td>
                        </tr>
                 
                        <tr className="text-gray-700">
                            <td className="px-2 py-3 border">
                                <p className="font-semibold text-sm sm:text-base md:text-sm lg:text-base text-rojoPokemon">Edad:</p>
                            </td>
                            <td className="px-2 py-3 border text-xs sm:text-sm md:text-xs lg:text-sm">
                                <span className="px-2 py-1 font-semibold  text-gray-700 bg-gray-100 rounded-sm"> 
                                    {selectedProta.age} 
                                </span>
                            </td>
                        </tr>
                        <tr className="text-gray-700">
                            <td className="px-2 py-3 border">
                                <p className="font-semibold text-sm sm:text-base md:text-sm lg:text-base text-rojoPokemon">Pueblo de origen:</p>
                            </td>
                            <td className="px-2 py-3 border text-xs sm:text-sm md:text-xs lg:text-sm">
                                <span className="px-2 py-1 font-semibold  text-gray-700 bg-gray-100 rounded-sm"> 
                                    {selectedProta.town}
                                </span>
                            </td>
                        </tr>
                        <tr className="text-gray-700">
                            <td className="px-2 py-3 border">
                                <p className="font-semibold text-sm xs:text-base md:text-sm lg:text-base text-rojoPokemon">Genero:</p>
                            </td>
                            <td className="px-2 py-3 border text-xs sm:text-sm md:text-xs lg:text-sm">
                                <span className="px-2 py-1 font-semibold  text-gray-700 bg-gray-100 rounded-sm"> 
                                    {selectedProta.gender}
                                </span>
                            </td>
                        </tr>
                </table>

                        <div className="text-gray-700 w-full font-bold">
                            <div className="px-2 py-1 border">
                                <p className="font-bold w-full text-base lg:text-lg text-rojoPokemon">Descripcion:</p>
                            </div>
                            <div className="px-2 py-3 border text-sm sm:text-base md:text-sm lg:text-base w-full ">
                                <span className="px-2 py-1 font-semibold  text-gray-700  w-full "> 
                                    {selectedProta.descripcion}
                                </span>
                            </div>
                        </div>
            </div>
        </div>
      </div>
  </div>;
};
