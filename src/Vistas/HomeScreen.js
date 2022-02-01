import React from 'react';
import { Protagonists } from '../UI/Home/Protagonists/Protagonists';
import { Regions } from '../UI/Home/Regions/Regions';
import { TimelineGames } from '../UI/Home/TimelineGames';

export const HomeScreen = () => {
  return <>
      <TimelineGames/>
      <Regions/>
      <Protagonists/>
  </>;
};
