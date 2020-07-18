import React from 'react';

import styles from './style.module.css'
import Google from '../../assets/icons/Google';
import LinkedIn from '../../assets/icons/LinkedIn';
import Twitter from '../../assets/icons/Twitter';

const imageSrc =
  'https://res.cloudinary.com/favourcodes/image/upload/v1594228052/Placeholder_1_ye5ru5.png';

const Hero = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.social}>
          <Twitter />
          <LinkedIn />
          <Google />
        </div>
        <div className={styles.hero_text}>
          <h2 className={styles.main}>Vampires: the Romantic Ideology Behind Them.</h2>
          <p className={styles.desc}>
            Many people have the notion that enlightenment is one state. Many
            also believe that when it is attained, a person is forever in that
            state.
          </p>
          <div className={styles.buttons}>
            <button className={styles.first}>Get Started</button>
          </div>
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
