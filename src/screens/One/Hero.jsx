import React from 'react';

const imageSrc =
  'https://res.cloudinary.com/favourcodes/image/upload/v1588658554/Placeholder_hoy0ma.png';

const Hero = () => {
  return (
    <main>
      <section className='hero'>
        <div className='left'>
          <p className='label'>Shooting Stars</p>
          <h3 className='main'>The Amazing Hubble</h3>
          <p className='desc'>
            In efforts to expand our horizons, we welcome every
            investment-minded individuals to join us in Contodel Investment
            Company
          </p>
          <div className='buttons'>
            <button className='first'>Get Started</button>
            <button className='second'>Learn More</button>
          </div>
        </div>
        <div className='right'>
          <figure>
            <img src={imageSrc} className='image' alt='hollywood' />
          </figure>
          <div className='play'>
            <div className='play-button'></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
