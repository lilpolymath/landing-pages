import React from 'react';
import MenuIcon from '../../assets/icons/MenuIcon';

const NavBar = () => {
  return (
    <header>
      <a href='#default' className='logo'>
        Gravity
      </a>
      <nav>
        <a className='hamburger' href='#default'>
          <MenuIcon />
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
