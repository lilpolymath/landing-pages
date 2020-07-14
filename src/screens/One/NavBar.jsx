import React, { useState } from 'react';
import { animated, useSpring, config } from 'react-spring';

import useWindowDimensions from '../../hooks/use-window-dimension';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();

  const toggleMenu = () => {
    if (width < 769) {
      setOpen(!open);
    }
  };

  const props = useSpring({
    opacity: open ? 1 : 0,
    height: open ? '140px' : '0px',
    config: { ...config.stiff, duration: 800 },
  });

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
                <a href='#default'>Our Apps</a>
              </li>
              <li className='nav-item'>
                <a href='#default'>Clients</a>
              </li>
              <li className='nav-item'>
                <a href='#default'>Contact Us</a>
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
      <animated.div style={props} className='menubar'>
        <ul className='menu-links'>
          <li className='nav-item'>
            <a href='#default'>Home</a>
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
      </animated.div>
    </div>
  );
};

export default NavBar;
