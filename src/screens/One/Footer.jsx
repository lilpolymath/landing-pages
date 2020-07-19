import React from 'react';

import styles from './style.module.css';
import Google from '../../assets/icons/Google';
import LinkedIn from '../../assets/icons/LinkedIn';
import Twitter from '../../assets/icons/Twitter';

const Footer = () => {
  return (
    <footer>
      <Twitter className={styles.svg} />
      <LinkedIn className={styles.svg} />
      <Google className={styles.svg} />
    </footer>
  );
};

export default Footer;
