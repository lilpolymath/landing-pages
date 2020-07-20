import React, { useState } from 'react';
import { animated, useSpring, config } from 'react-spring';

import useWindowDimensions from '../../hooks/use-window-dimension';
import styles from './style.module.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();

  const none = styles.hamburger_icon + ' ' + styles.none;

  const toggleMenu = () => {
    if (width < 769) {
      setOpen(!open);
    }
  };

  const props = useSpring({
    opacity: open ? 1 : 0,
    height: open ? '100%' : '0%',
    config: { ...config.molasses, duration: 800 },
  });

  return (
    <div className={styles.pos}>
      <nav className={styles.header}>
        <div className={styles.logo}>
          <a href='#five'>Gravity</a>
        </div>
        <div className={styles.left_nav}>
          <div className={styles.nav_list}>
            <ul className={styles.nav}>
              <li className={styles.nav_item}>
                <p className={styles.arrow}>
                  <a href='#five'>Go to the projects </a> &#8594;
                </p>
              </li>
            </ul>
          </div>
          <div onClick={toggleMenu} className={styles.hamburger}>
            <div className={open ? none : styles.hamburger_icon}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      <animated.div style={props} className={styles.menubar}>
        <ul className={styles.menu_links}>
          <li className={styles.nav_item}>
            <a className={styles.active} href='#five'>
              Home
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href='#five'>Contact</a>
          </li>
        </ul>
      </animated.div>
    </div>
  );
};

export default NavBar;
