import React, { useState } from 'react';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    console.log('state', open);
    setOpen(!open);
  };

  return (
    <div className='pos'>
      <nav className='header'>
        <div className='logo'>
          <a href='#default'>Gravity</a>
        </div>
        <div className='left-nav'>
          <div className='nav-list'>
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
          </div>
          <div onClick={toggleMenu} className='hamburger'>
            <div className={open ? 'hamburger-icon none' : 'hamburger-icon'}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      <div className={open ? 'menubar' : 'no-menubar'}>
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
