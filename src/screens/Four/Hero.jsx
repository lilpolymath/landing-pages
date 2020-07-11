import React, { useState } from 'react';
import { animated, useSprings } from 'react-spring';

import Google from '../../assets/icons/Google';
import LinkedIn from '../../assets/icons/LinkedIn';
import Twitter from '../../assets/icons/Twitter';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);

  const images = [
    {
      index: 1,
      src:
        'https://res.cloudinary.com/favourcodes/image/upload/v1594228052/Placeholder_1_ye5ru5.png',
    },
    {
      index: 2,
      src:
        'https://res.cloudinary.com/favourcodes/image/upload/v1594425842/Placeholder_2_fl0psx.png',
    },
    {
      index: 3,
      src:
        'https://res.cloudinary.com/favourcodes/image/upload/v1594510804/joao-paulo-de-souza-oliveira-BBNPJnucqYQ-unsplash_d5ns7s.jpg',
    },
    {
      index: 4,
      src:
        'https://res.cloudinary.com/favourcodes/image/upload/v1594510806/honey-yanibel-minaya-cruz-YrYdmIVSE8Y-unsplash_vxwda9.jpg',
    },
    {
      index: 5,
      src:
        'https://res.cloudinary.com/favourcodes/image/upload/v1594510808/juli-kosolapova-h6e1QApgI38-unsplash_ggey3g.jpg',
    },
  ];

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
            <button className='first'>Get Started</button>
            <Twitter />
            <LinkedIn />
            <Google />
          </div>
        </div>
        <div className='index'>
          {images.map(item => (
            <animated.div
              onClick={() => setIndex(item.index - 1)}
              className={
                index === item.index - 1 ? 'numbers active' : 'numbers'
              }
            >
              {item.index}
            </animated.div>
          ))}
        </div>
      </div>

      <div className='hero-image'>
        <figure>
          <img
            onMouseEnter={() => setActive(!active)}
            onMouseLeave={() => setActive(!active)}
            className='image'
            alt=''
            src={images[index].src}
          />
        </figure>
        <div className={active ? 'preview' : 'next'}>
          <img
            className='next-image'
            alt=''
            src={images[(index + 1) % images.length].src}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
