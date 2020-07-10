import React from 'react';

const NavBar = () => {
  return (
    <div className='pos'>
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
            <a href='#default'>Contact</a>
          </li>
        </ul>
        <div className='hamburger'>
          <input type='checkbox' class='hamburger-checkbox' id='openmenu' />

          <div class='hamburger-icon'>
            <label for='openmenu' id='hamburger-label'>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </nav>
      <div className='sidebar'>
        <ul className='menu-links'>
          <li className='nav-item'>
            <a className='active' href='#default'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#default'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
