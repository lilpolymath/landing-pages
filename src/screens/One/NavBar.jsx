import React from 'react';
import MenuIcon from '../../assets/icons/MenuIcon';

const NavBar = () => {
  return (
    <nav className='header'>
      <div className='logo'>
        <a href='#default'>Gravity</a>
      </div>
      <ul className='nav'>
        <li className='nav-item'>
          <a className='active' href='#default'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a href='#default'>Our Apps</a>
        </li>
        <li className='nav-item'>
          <a href='#default'>Clients</a>
        </li>
        <li className='nav-item'>
          <a href='#default'>Contact Us</a>
        </li>
      </ul>
      <a className='hamburger' href='#default'>
        <MenuIcon />
      </a>
    </nav>
  );
};

export default NavBar;