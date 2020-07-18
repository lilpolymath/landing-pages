import React, { useState, useCallback } from 'react';
import { animated, useTransition, config } from 'react-spring';


import styles from './style.module.css';

const Hero = () => {
  const [[index, dir], setIndex] = useState([0, 0]);

  const images = [
    {
      index: 1,
      src: 'v1594830785/Placeholder_6_ukdlcp.png',
    },
    {
      index: 2,
      src: 'v1588658554/Placeholder_hoy0ma.png',
    },
    {
      index: 3,
      src: 'v1594650256/Placeholder_4_xffq2z.png',
    },
  ];

  const onClick = useCallback(
    item =>
      setIndex(prevState => [
        item.index - (1 % images.length),
        item.index > prevState[0] ? 1 : -1,
      ]),
    [images.length]
  );

  const imageTransitions = useTransition(images[index], item => item.index, {
    from: {
      opacity: 0,
      transform: `translateX(${dir === 1 ? 100 : -100}px)`,
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    leave: {
      opacity: 0,
      transform: `translateX(${dir === 1 ? -100 : 100}px)`,
    },
    config: config.molasses,
  });

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <h2 className={styles.main_text}>Click and control your business</h2>
          <p className={styles.desc}>
            From ads that dance or sing to MTV-like commercials, online
            advertisers are now using a new type of technology "rich media" to
            attract consumers.
          </p>
          <div className={styles.buttons}>
            <button className={styles.first}>Buy now</button>
          </div>
        </div>
        <div className={styles.index}>
          <div className={styles.slider}>
            <p className={styles.slider_text}>01</p>
            {images.map(item => (
              <div
                key={item.index}
                onClick={() => onClick(item)}
                className={
                  index === item.index - 1
                    ? styles.numbers_active
                    : styles.numbers
                }
              />
            ))}
            <p className={styles.slider_text}>0{images.length}</p>
          </div>
        </div>
      </div>

      <div className={styles.hero_image}>
        <figure className={styles.figure}>
          <div
            className={styles.image}
            style={{
              backgroundImage:
                'url(https://res.cloudinary.com/favourcodes/image/upload/v1594830783/Placeholder_5_zytpbh.png)',
            }}
          />
        </figure>

        <div className={styles.next}>
          {imageTransitions.map(({ item, props, key }) => (
            <animated.div
              className={styles.next_image}
              alt=''
              key={key}
              style={{
                ...props,
                backgroundImage: `url(https://res.cloudinary.com/favourcodes/image/upload/${item.src})`,
              }}
            />
          ))}
          <div className={styles.play}>
            <div className={styles.play_button} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
