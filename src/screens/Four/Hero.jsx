import React, { useState, useCallback } from 'react';
import { animated, useTransition, config } from 'react-spring';

import styles from './style.module.css';

import Google from '../../assets/icons/Google';
import LinkedIn from '../../assets/icons/LinkedIn';
import Twitter from '../../assets/icons/Twitter';

const Hero = () => {
  const [[index, next, dir], setIndex] = useState([0, 1, 0]);
  const [active, setActive] = useState(false);

  const none = styles.numbers + ' ' + styles.active;

  const images = [
    {
      index: 1,
      src: 'v1594228052/Placeholder_1_ye5ru5.png',
    },
    {
      index: 2,
      src: 'v1594425842/Placeholder_2_fl0psx.png',
    },
    {
      index: 3,
      src:
        'v1594510804/joao-paulo-de-souza-oliveira-BBNPJnucqYQ-unsplash_d5ns7s.jpg',
    },
    {
      index: 4,
      src:
        'v1594510806/honey-yanibel-minaya-cruz-YrYdmIVSE8Y-unsplash_vxwda9.jpg',
    },
    {
      index: 5,
      src: 'v1594510808/juli-kosolapova-h6e1QApgI38-unsplash_ggey3g.jpg',
    },
  ];

  const onClick = useCallback(
    item =>
      setIndex(prevState => [
        item.index - 1,
        item.index % images.length,
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
    <main>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <p className={styles.label}>Shooting Stars</p>
          <h2 className={styles.main}>Pictures in the Sky.</h2>
          <p className={styles.desc}>
            Many people have the notion that enlightenment is one state. Many
            also believe that when it is attained, a person is forever in that
            state.
          </p>
          <div className={styles.buttons}>
            <button className={styles.first}>Get Started</button>
            <Twitter />
            <LinkedIn />
            <Google />
          </div>
        </div>
        <div className={styles.index}>
          {images.map(item => (
            <div
              key={item.index}
              onClick={() => onClick(item)}
              className={index === item.index - 1 ? none : styles.numbers}
            >
              {item.index}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.hero_image}>
        <figure
          onMouseEnter={() => setActive(!active)}
          onMouseLeave={() => setActive(!active)}
        >
          {imageTransitions.map(({ item, props, key }) => (
            <animated.div
              className={styles.image}
              key={key}
              style={{
                ...props,
                backgroundImage: `url(https://res.cloudinary.com/favourcodes/image/upload/${item.src})`,
              }}
            />
          ))}
        </figure>

        <div className={active ? styles.preview : styles.next}>
          <img
            className={styles.next_image}
            alt=''
            src={`https://res.cloudinary.com/favourcodes/image/upload/${images[next].src}`}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
