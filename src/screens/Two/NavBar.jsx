import React from 'react';

import Hamburger from '../../common/Hamburger';

import styles from './style.module.css';

const NavBar = () => {
  return (
    <header>
      <a href='#' className={styles.logo}>
        Gravity
      </a>
      <nav>
        <Hamburger />
      </nav>
    </header>
  );
};

export default NavBar;
