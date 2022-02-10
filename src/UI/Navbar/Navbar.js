import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonLogo from '../../Assets/LogoPokemon.png';
import PokemonLogoBlanco from '../../Assets/PokemonLogoBlanco.png';

import './Navbar.css';
import { NavbarLinks } from './NavbarLinks';

export const Navbar = () => {
    
    const [parallax, setParallax] = useState(false);
    const [modal, setModal] = useState(false);

    const changeBackground = () =>{
        if (window.scrollY >= 110) {
            setParallax(true);
        } else {
            setParallax(false);
        }
    }

    const itemsNavbar = [
        {title: 'Buscar', link: '/Search'},
        {title: 'Generaciones', link: '/Generations'},
        {title: 'Tipos', link: '/Types'}
    ];

    window.addEventListener('scroll', changeBackground);

    const handleNavbar = (e) =>{
        e.preventDefault();
        setModal(!modal);
    }

  return <nav className= {`fixed z-50 top-0 flex flex-row flex-wrap justify-between items-center 
  w-full font-Poppins font-bold text-base md:text-lg lg:text-xl shadow-md navbarTop
  ${(parallax)?'navbarScroll':'navbarTop'} `} >
      <Link className='flex mx-1 xs:mx-3 sm:mx-5 lg:mx-8 py-2 w-5/12 xs:w-4/12 sm:w-3/12'
        to = '/' >
        <img alt='Inicio' src={(parallax)?PokemonLogoBlanco:PokemonLogo} 
        className = 'w-36 xs:w-32 md:w-36 transition-all duration-200 ' />
      </Link>

      <div className='w-8/12 hidden sm:flex flex-row justify-end items-end px-2 lg:px-16 '>
        <div className='w-full md:w-11/12 lg:w-10/12 flex justify-between px-8 md:px-12 lg:px-16 ' >
            {
                itemsNavbar.map((item, index)=>(
                    <NavbarLinks key={index} title={item.title} link = {item.link} />
                ))
            }
        </div>

      </div>
      
      <div className={`flex sm:hidden mx-8 text-2xl xs:text-3xl transition-all duration-200
       ${(parallax)?'text-white':'text-rojoPokemon'}`} >
          <i className="fas fa-bars cursor-pointer"
           onClick={handleNavbar} ></i>
      </div>

      <div className = {`absolute sm:hidden right-8 xs:right-10 top-12  
                        ${(modal)?'absolute':'hidden'} `}  >
            <div className={`flex flex-col items-center justify-between p-5 text-base xs:text-lg w-40 xs:w-48 h-32 xs:h-36 rounded-2xl navShadow
                                ${(parallax)?'navbarTop item':'navbarScroll'}`} 
                                onClick ={handleNavbar} >
               {
                itemsNavbar.map((item, index)=>(
                        <NavbarLinks key={index} title={item.title} link = {item.link} />
                    ))
                }
            </div>
      </div>
  </nav>;
};
