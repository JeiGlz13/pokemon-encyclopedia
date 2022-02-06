import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { Navbar } from '../UI/Navbar/Navbar';
import { HomeScreen } from '../Vistas/HomeScreen';
import { PokemonGenerations } from '../Vistas/PokemonGenerations';
import { PokemonSearch } from '../Vistas/PokemonSearch';
import { PokemonTypes } from '../Vistas/PokemonTypes';

export const AppRouter = () => {
  return <>
      <Router>
            <Navbar/> 
            
            <Switch>
                <Route 
                exact path='/'
                component={HomeScreen} />
                <Route 
                exact path='/Generations'
                component={PokemonGenerations} />
                <Route 
                exact path='/Search'
                component={PokemonSearch} />
                <Route 
                exact path='/Types'
                component={PokemonTypes} />
                
                <Redirect to='/' />
            </Switch>
        </Router>
    </>;
};
