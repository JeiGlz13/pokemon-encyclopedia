import React from 'react';
import { protagonistas } from '../../../data/protagonistas';
import { InfoProta } from './InfoProta';
import { SingleProtagonist } from './SingleProtagonist';

export const Protagonists = () => {
  return <div className='my-20 mx-8' >
      <h1 className='text-2xl xs:text-3xl sm:text-5xl text-center my-20 font-pokemon' >
          Protagonistas
      </h1>

      <div className='animate__animated animate__fadeIn flex flex-row flex-wrap justify-around items-start' >
            {
                protagonistas.map((protagonista) =>(
                    <SingleProtagonist key={protagonista.generation} {...protagonista} />
                ))
            }
      </div>

      <InfoProta/>
  </div>;
};
