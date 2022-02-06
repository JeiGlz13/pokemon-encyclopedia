import React from 'react';
import { Link } from 'react-router-dom';

export const NavbarLinks = ({title, link, myOnClick}) => {
  return <Link className='flex hover:scale-110 hover:drop-shadow-md transition-all duration-300'
            to = {link} >
            {title}
        </Link>;
};
