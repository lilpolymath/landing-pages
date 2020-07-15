import React, { useState, useCallback } from 'react';
import { animated, useTransition, config } from 'react-spring';

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
    <main>
      <div className='hero'>
        <div className='hero-text'>
          <h2 className='main'>Click and control your business</h2>
          <p className='desc'>
            From ads that dance or sing to MTV-like commercials, online
            advertisers are now using a new type of technology "rich media" to
            attract consumers.
          </p>
          <div className='buttons'>
            <button className='first'>Buy now</button>
          </div>
        </div>
        <div className='index'>
          <div className='slider'>
            <p className='slider-text'>01</p>
            {images.map(item => (
              <div
                key={item.index}
                onClick={() => onClick(item)}
                className={
                  index === item.index - 1 ? 'numbers active' : 'numbers'
                }
              />
            ))}
            <p className='slider-text'>0{images.length}</p>
          </div>
        </div>
      </div>

      <div className='hero-image'>
        <figure>
          <div
            className='image'
            style={{
              backgroundImage:
                'url(https://res.cloudinary.com/favourcodes/image/upload/v1594830783/Placeholder_5_zytpbh.png)',
            }}
          />
        </figure>

        <div className='next'>
          {imageTransitions.map(({ item, props, key }) => (
            <animated.div
              className='next-image'
              alt=''
              key={key}
              style={{
                ...props,
                backgroundImage: `url(https://res.cloudinary.com/favourcodes/image/upload/${item.src})`,
              }}
            />
          ))}
          <div className='play'>
            <div className='play-button' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
