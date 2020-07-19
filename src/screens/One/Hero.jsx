import React from 'react';

import styles from './style.module.css';

const imageSrc =
  'https://res.cloudinary.com/favourcodes/image/upload/v1588658554/Placeholder_hoy0ma.png';

const Hero = () => {
  const first = styles.first + styles.button
  const second = styles.second + styles.button

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.left}>
          <p className={styles.label}>Shooting Stars</p>
          <h3 className={styles.main_text}>The Amazing Hubble</h3>
          <p className={styles.desc}>
            In efforts to expand our horizons, we welcome every
            investment-minded individuals to join us in Contodel Investment
            Company
          </p>
          <div className={styles.buttons}>
            <button className={first}>Get Started</button>
            <button className={second}>Learn More</button>
          </div>
        </div>
        <div className={styles.right}>
          <figure className={styles.figure}>
            <img src={imageSrc} className={styles.image} alt='hollywood' />
          </figure>
          <div className={styles.play}>
            <div className={styles.play_button}></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
