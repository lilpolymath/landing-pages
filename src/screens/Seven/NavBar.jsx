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
    height: open ? '50px' : '0px',
    config: { ...config.stiff, duration: 800 },
  });

  return (
    <div className='pos'>
      <nav className='header'>
        <div className='logo'>
          <a href='#default'>Gravity</a>
        </div>
        <div className='search'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 8.5C0 3.80557 3.80554 0 8.5 0C13.1945 0 17 3.80557 17 8.5C17 10.3205 16.4277 12.0073 15.4532 13.3903L18.8923 16.827C19.2831 17.2176 19.2831 17.8511 18.8923 18.2417L18.2444 18.8891C17.8539 19.2793 17.2212 19.2793 16.8307 18.8891L13.3915 15.4524C12.0083 16.4274 10.321 17 8.5 17C3.80554 17 0 13.1944 0 8.5ZM8.49996 14.5714C5.15217 14.5714 2.42853 11.8478 2.42853 8.5C2.42853 5.15221 5.15217 2.42857 8.49996 2.42857C11.8477 2.42857 14.5714 5.15221 14.5714 8.5C14.5714 11.8478 11.8477 14.5714 8.49996 14.5714Z'
              fill='#222222'
            />
          </svg>
        </div>
        <div className='left-nav'>
          <div onClick={toggleMenu} className='hamburger'>
            <div className={open ? 'hamburger-icon none' : 'hamburger-icon'}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      <animated.div style={props} className='menubar'>
        <div style={{ width: '100%' }}>
          <input
            autoComplete='off'
            type='text'
            placeholder='Search our catalogue..'
            name='search'
            id='search'
          />
        </div>
      </animated.div>
    </div>
  );
};

export default NavBar;
