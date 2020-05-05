import React from 'react';
const imageSrc =
  'https://res.cloudinary.com/favourcodes/image/upload/v1588658554/Browser_fswsi8.png';

const Hero = () => {
  return (
    <main>
      <section className='hero'>
        <div className='main'>
          <h2>Branding do you know who you are</h2>
          <p className='desc'>
            The following tips on creating a direct mail advertising campaign
            have been street-tested and will bring you huge returns in a short
            period of time.
          </p>
        </div>
        <div className='buttons'>
          <button className='first'>Design your module</button>
          <button className='second'>Get Demo version</button>
          <a className='external' href='/'>
            Learn More
          </a>
        </div>
      </section>
      <section className='preview'>
        <figure>
          <img className='image' alt='' src={imageSrc} />
        </figure>
      </section>
    </main>
  );
};

export default Hero;
