import React, { useState, useCallback } from 'react';
import { animated, useTransition, useSpring, config } from 'react-spring';

import Google from '../../assets/icons/Google';
import LinkedIn from '../../assets/icons/LinkedIn';
import Twitter from '../../assets/icons/Twitter';
import useWindowDimensions from '../../hooks/use-window-dimension';

const Hero = () => {
  const [[index, next, dir], setIndex] = useState([0, 1, 0]);
  const [active, setActive] = useState(false);
  const [consent, setConsent] = useState(false);
  const { width } = useWindowDimensions();

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

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

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

  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <main>
      <div className='hero'>
        <div className='hero-text'>
          <p className='label'>Shooting Stars</p>
          <h2 className='main'>Pictures in the Sky.</h2>
          <p className='desc'>
            Many people have the notion that enlightenment is one state. Many
            also believe that when it is attained, a person is forever in that
            state.
          </p>
          <div className='buttons'>
            <button
              style={{ width: `${width < 800 ? 150 : 250}px` }}
              onClick={() => (width < 800 ? null : setConsent(!consent))}
              className='first'
            >
              {width < 800 ? 'Contact Us' : 'Activate Easter Egg'}
            </button>
            <Twitter />
            <LinkedIn />
            <Google />
          </div>
        </div>
        <div className='index'>
          {images.map(item => (
            <div
              key={item.index}
              onClick={() => onClick(item)}
              className={
                index === item.index - 1 ? 'numbers active' : 'numbers'
              }
            >
              {item.index}
            </div>
          ))}
        </div>
      </div>

      <div className='hero-image'>
        <figure
          onMouseEnter={() => setActive(!active)}
          onMouseLeave={() => setActive(!active)}
        >
          {imageTransitions.map(({ item, props, key }) => (
            <animated.div
              className='image'
              key={key}
              onMouseMove={({ clientX: x, clientY: y }) => {
                set({ xys: calc(x, y) });
              }}
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{
                ...props,
                backgroundImage: `url(https://res.cloudinary.com/favourcodes/image/upload/${item.src})`,
                transform: consent
                  ? springProps.xys.interpolate(trans)
                  : 'none',
              }}
            />
          ))}
        </figure>

        <div className={active ? 'preview' : 'next'}>
          <img
            className='next-image'
            alt=''
            src={`https://res.cloudinary.com/favourcodes/image/upload/${images[next].src}`}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
