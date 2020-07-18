import React from 'react';

import Button from '../../common/Button';
import styles from './style.module.css';

const imageSrc =
  'https://res.cloudinary.com/favourcodes/image/upload/v1588658554/Browser_xoynxe.png';

const Hero = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.text}>
          <h2>Branding do you know who you are</h2>
          <p className={styles.desc}>
            The following tips on creating a direct mail advertising campaign
            have been street-tested and will bring you huge returns in a short
            period of time.
          </p>
        </div>
        <div className={styles.buttons}>
          <Button label='Design your module' />
          <button className={styles.second}>Get Demo version</button>
          <a className={styles.external} href='/'>
            Learn More
          </a>
        </div>
      </section>
      <section className={styles.preview}>
        <figure>
          <img className={styles.image} alt='' src={imageSrc} />
        </figure>
      </section>
    </main>
  );
};

export default Hero;
