import React from 'react';

import Google from '../../assets/icons/Google';
import LinkedIn from '../../assets/icons/LinkedIn';
import Twitter from '../../assets/icons/Twitter';

const imageSrc =
  'https://res.cloudinary.com/favourcodes/image/upload/v1594228052/Placeholder_1_ye5ru5.png';

const Hero = () => {
  return (
    <main>
      <section className='hero'>
        <div className='social'>
          <Twitter />
          <LinkedIn />
          <Google />
        </div>
        <div className='hero-text'>
          <h2 className='main'>Vampires: the Romantic Ideology Behind Them.</h2>
          <p className='desc'>
            Many people have the notion that enlightenment is one state. Many
            also believe that when it is attained, a person is forever in that
            state.
          </p>
          <div className='buttons'>
            <button className='first'>Get Started</button>
          </div>
        </div>
      </section>
      <section className='hero-image'>
        <figure>
          <img className='image' alt='' src={imageSrc} />
        </figure>
        <div className='play'>
          <div className='play-button'></div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
