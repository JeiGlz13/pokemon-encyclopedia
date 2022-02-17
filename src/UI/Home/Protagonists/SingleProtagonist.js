import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProtaRegion } from '../../../redux/actions/protaActions';

    export const SingleProtagonist = ({
            generation,
            region,
            names,
            sprites,
            imageMale,
            imageFemale,
            maleProta ,
            femaleProta
        }) => {
    const prota = useSelector(state => state.prota);
    const dispatch = useDispatch();
    
    const setProta = (e) =>{
        e.preventDefault();
        const activeGeneration = {
            generation,
            names,
            region,
            imageMale,
            imageFemale,
            maleProta,
            femaleProta,
            activeProta: 'Male'
        }

        dispatch(setProtaRegion(activeGeneration));
    }

        return <div className= {`transform  hover:scale-110 duration-300 
                    cursor-pointer transition-all flex flex-col justify-center mx-0 xs:mx-6 lg:mx-8 mb-5 xs:mb-3 sm:mb-8  
                ${(prota.generation === generation)?("opacity-100"):("opacity-60")}`}
                onClick={setProta} >
            <h1 className='font-Poppins text-lg sm:text-base md:text-xl lg:text-2xl font-bold text-center text-rojoPokemon ' >
                {names}
            </h1>

            <img alt={generation} src={sprites}
                className='w-44 md:w-36 lg:w-44 h-36 md:h-28 lg:h-36 rounded-xl mt-3 hover:drop-shadow-lg ' />
        </div>;
};
