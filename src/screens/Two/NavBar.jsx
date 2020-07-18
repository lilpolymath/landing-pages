import React from 'react';
import MenuIcon from '../../assets/icons/MenuIcon';
import Hamburger from '../../common/Hamburger'

import styles from "./style.module.css";

const NavBar = () => {
  return (
    <header>
      <a href='#default' className={styles.logo}>
        Gravity
      </a>
      <nav>
       <Hamburger />
      </nav>
    </header>
  );
};

export default NavBar;
