import React from 'react';

import Google from '../../assets/icons/Google';
import LinkedIn from '../../assets/icons/LinkedIn';
import Twitter from '../../assets/icons/Twitter';

const imageSrc =
  'https://res.cloudinary.com/favourcodes/image/upload/v1594425842/Placeholder_2_fl0psx.png';

const nextImage =
  'https://res.cloudinary.com/favourcodes/image/upload/v1594493520/Placeholder_3_ythadq.png';

const Hero = () => {
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
          <div className='numbers active'>1</div>
          <div className='numbers'>2</div>
          <div className='numbers'>3</div>
        </div>
      </div>
      <div className='hero-image'>
        <figure>
          <img className='image' alt='' src={imageSrc} />
        </figure>
        <div className='next'>
          <img className='next-image' alt='' src={nextImage} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
