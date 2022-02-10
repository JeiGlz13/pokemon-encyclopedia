import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearch } from '../../redux/actions/searchActions';
import { PokemonNotFound } from './PokemonNotFound';
import { PokemonResult } from './PokemonResult';

export const InfoSearch =  () => {
  const dispatch = useDispatch()
  const {status} = useSelector(state=>state.search);
  
  useEffect(() => {
    dispatch(clearSearch());
  }, [dispatch]);
  

  return <div className='w-full ' >
    {
      (status !== "not searched")&&(
        (status === "not found")?(<PokemonNotFound/>):(<PokemonResult/>)
        )
    }
  </div>;
};
