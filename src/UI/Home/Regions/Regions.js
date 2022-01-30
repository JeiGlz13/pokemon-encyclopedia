import React from 'react';
import { regions } from '../../../data/regions';
import { InfoRegion } from './InfoRegion';
import { SingleRegion } from './SingleRegion';

export const Regions = () => {
  return <div>
      <h1 className='text-2xl xs:text-3xl sm:text-5xl text-center pt-4 my-8 font-pokemon' >
          Regiones Pokemon
        </h1>
        <div className='animate__animated animate__fadeIn flex flex-row flex-wrap justify-around items-start px-8 my-20' >
            {
                regions.map(region =>(
                    <SingleRegion {...region} />
                ))
            }
        </div>

        <InfoRegion/>

  </div>;
};
