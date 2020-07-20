import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';
import data from './data';

const Landing = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <h1 className={styles.main_text}>Gravity Headers</h1>
      <section className={styles.container}>
        {data.map(item => (
          <div className={styles.item_container}>
            <div onClick={item.link} className={styles.item} key={item.key}>
              <img className={styles.image_landing} alt='' src={item.url} />
            </div>
            <div className={styles.overlay}>
              {console.log(item.path)}
              <div className={styles.preview}>
                {item.path === '' ? (
                  <p className={styles.chill}> Chill Small</p>
                ) : (
                  <Link to={item.path}>Visit &#8594;</Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Landing;
