import React, { useState } from 'react';
import { animated, useSpring, config } from 'react-spring';

import Hamburger from '../../common/Hamburger';
import useWindowDimensions from '../../hooks/use-window-dimension';
import styles from './style.module.css';

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
    height: open ? '100%' : '0%',
    config: config.molasses,
  });

  return (
    <div className={styles.pos}>
      <nav className={styles.header}>
        <div className={styles.logo}>
          <a href='#default'>Gravity</a>
        </div>
        <ul className={styles.nav}>
          <li className={styles.nav_item}>
            <a className={styles.link_inactive} href='#default'>
              Home
            </a>
          </li>

          <li className={styles.nav_item}>
            <a href='#default'>Contact</a>
          </li>
        </ul>
        <Hamburger toggleMenu={toggleMenu} open={open} />
      </nav>
      <animated.div style={props} className={styles.menubar}>
        <ul className={styles.menu_links}>
          <li className={styles.nav_item}>
            <a className={styles.link_inactive} href='#default'>
              Home
            </a>
          </li>
          <li className={styles.nav_item}>
            <a href='#default'>Contact</a>
          </li>
        </ul>
      </animated.div>
    </div>
  );
};

export default NavBar;
