import React, {useEffect} from 'react';
import { BannerWelcome } from '../UI/Home/BannerWelcome';
import { Protagonists } from '../UI/Home/Protagonists/Protagonists';
import { Regions } from '../UI/Home/Regions/Regions';
import { StartersPokemon } from '../UI/Home/Starters/StartersPokemon';
import { TimelineGames } from '../UI/Home/TimelineGames';

export const HomeScreen = () => {
      
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return <>
      <BannerWelcome/>
      <TimelineGames/>
      <Regions/>
      <Protagonists/>
      <StartersPokemon/>
  </>;
};
