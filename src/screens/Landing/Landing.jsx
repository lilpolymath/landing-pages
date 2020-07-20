import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';
import data from './data';

const Landing = () => {
  return (
    <>
      <h1 className={styles.main_text}>Gravity Headers</h1>
      <p className={styles.desc}>(6 is under work. xD)</p>
      <section className={styles.container}>
        {data.map(item => (
          <div style={{ position: 'relative' }}>
            <div onClick={item.link} className={styles.item} key={item.key}>
              <img
                className={styles.image_landing}
                alt='landing'
                src={item.url}
              />
            </div>
            <div className={styles.preview}>
              <Link style={{ color: 'black' }} to={item.path}>
                Visit &#8594;
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Landing;
