import React from 'react';

import styles from './style.module.css';

import Google from '../../assets/icons/Google';
import LinkedIn from '../../assets/icons/LinkedIn';
import Twitter from '../../assets/icons/Twitter';

const imageSrc =
  'https://res.cloudinary.com/favourcodes/image/upload/v1594650256/Placeholder_4_xffq2z.png';

const Hero = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.hero_text}>
          <h2 className={styles.main_text}>From Dreams to Reality</h2>
          <p className={styles.desc}>
            Mobile augmented reality applications are gaining popularity due to
            the wide adoption of mobile and especially.
          </p>
        </div>

        <div className={styles.social}>
          <Twitter className={styles.svg} />
          <LinkedIn className={styles.svg} />
          <Google className={styles.svg} />
        </div>
      </section>
      <section className={styles.hero_image}>
        <figure>
          <img className={styles.image} alt='' src={imageSrc} />
        </figure>
        <div className={styles.play}>
          <div className={styles.play_button}></div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
