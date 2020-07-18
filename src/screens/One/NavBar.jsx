import React, { useState } from 'react';
import { animated, useSpring, config } from 'react-spring';

import useWindowDimensions from '../../hooks/use-window-dimension';
import styles from './style.module.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();

  const show = styles.hamburger_icon + ' ' + styles.none;

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
    <div className={styles.pos}>
      <nav className={styles.header}>
        <div className={styles.logo}>
          <a href='#default'>Gravity</a>
        </div>
        <div className={styles.left_nav}>
          <div className={styles.nav_list}>
            <ul className={styles.nav}>
              <li className={styles.nav_item}>
                <a className='active' href='#default'>
                  Home
                </a>
              </li>
              <li className={styles.nav_item}>
                <a href='#default'>Our Apps</a>
              </li>
              <li className={styles.nav_item}>
                <a href='#default'>Clients</a>
              </li>
              <li className={styles.nav_item}>
                <a href='#default'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div onClick={toggleMenu} className={styles.hamburger}>
            <div className={open ? show : styles.hamburger_icon}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      <animated.div style={props} className={styles.menubar}>
        <ul className={styles.menu_links}>
          <li className={styles.nav_item}>
            <a href='#default'>Home</a>
          </li>
          <li className={styles.nav_item}>
            <a href='#default'>Our Apps</a>
          </li>
          <li className={styles.nav_item}>
            <a href='#default'>Clients</a>
          </li>
          <li className={styles.nav_item}>
            <a href='#default'>Contact Us</a>
          </li>
        </ul>
      </animated.div>
    </div>
  );
};

export default NavBar;
