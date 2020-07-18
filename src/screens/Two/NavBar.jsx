import React from 'react';
import MenuIcon from '../../assets/icons/MenuIcon';

import styles from "./style.module.css";

const NavBar = () => {
  return (
    <header>
      <a href='#default' className={styles.logo}>
        Gravity
      </a>
      <nav>
        <a className={styles.hamburger} href='#default'>
          <MenuIcon />
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
