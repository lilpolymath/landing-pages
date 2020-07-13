import React from 'react';

import Google from '../../assets/icons/Google';
import LinkedIn from '../../assets/icons/LinkedIn';
import Twitter from '../../assets/icons/Twitter';

const imageSrc =
  'https://res.cloudinary.com/favourcodes/image/upload/v1594650256/Placeholder_4_xffq2z.png';

const Hero = () => {
  return (
    <main>
      <section className='hero'>
        <div className='hero-text'>
          <h2 className='main'>From Dreams to Reality</h2>
          <p className='desc'>
            Mobile augmented reality applications are gaining popularity due to
            the wide adoption of mobile and especially.
          </p>
        </div>

        <div className='social'>
          <Twitter />
          <LinkedIn />
          <Google />
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
