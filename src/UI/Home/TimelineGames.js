import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import { gamesGenerations } from '../../data/timelineElements';

export const TimelineGames = () => {
  const iconStyle = {
    background: '#CE2211',
    fontFamily: 'Poppins',
    color: "white",
    fontSize: "1.3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return <div className='w-full flex justify-center mt-6'>
      <div className='w-11/12 xs:w-9/12 mb-20' >
        <h1 className='text-2xl xs:text-3xl sm:text-5xl text-center pt-4 my-8 
        font-black text-rojoPokemon ' >
          Pokemon a través de los años
        </h1>

        <VerticalTimeline lineColor='#CE2211' >
          {
            gamesGenerations.map(game =>(
              <VerticalTimelineElement
                key={game.generation}
                date={game.realeseDate}
                dateClassName='colorPokemon opacity-100 font-Poppins text-xs xs:text-base md:text-lg'
                contentStyle={{
                  borderRadius: '20px',
                  boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
                }}
                iconStyle={iconStyle}
                icon = {game.generation}
              >
                  <div className="p-0.5 flex flex-col justify-center w-full rounded-3xl  overflow-hidden z-50 font-Poppins">
                      <img className="w-full" src={game.path} alt="game" />
                      <div className="-mt-4 py-2 px-2 xs:px-1 sm:px-8 w-full flex flex-col xs:flex-row justify-between azulPokemon">
                          <h3 className="mt-0 text-xs sm:text-sm text-white font-semibold">{game.name}</h3>
                          <h3 className="mt-0 text-xs sm:text-sm text-white font-semibold">{game.generation}° generacion</h3>
                      </div>
                      <div className="bg-white py-2 rounded-bl-3xl rounded-br-3xl">
                          <h4 className=" text-gray-700 text-xs xs:text-base sm:text-base lg:text-lg w-11/12">
                            {game.descripcion}
                          </h4>
                      </div>
                    </div>
              </VerticalTimelineElement>
              ))
          }
        </VerticalTimeline>

      </div>

  </div>;
};
