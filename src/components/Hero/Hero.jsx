import React from 'react';
import './Hero.css';
import Card from '../Card/Card';
import { images } from '../../assets/images';
// import home_page_background from '../../assets/home_page_background.svg'

const Hero = ({ isDarkMode }) => {
  return (
    <section className={`hero ${isDarkMode ? 'dark' : ''}`}>
      <div className='hero-top'>
        <h1 className='header-primary'>Tech Explained Simply</h1>
        <p className='para-primary'>
          Demystifying Tech from the Non-Tech crowd
        </p>
      </div>
      <div className='hero-bottom-main'>
        <div
          className='hero-bottom'
          style={{
            backgroundImage: `url(photo/home_page_background.svg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPositionX: 'right',
          }}
        >
          <div className='hero-bottom-flex'>
            <div>
              <img
                src={images.group_93}
                alt={images.group_93}
                className={`dot-img ${isDarkMode ? 'dark' : ''}`}
              />
            </div>
            <Card isDarkMode={isDarkMode} />
          </div>

          <div className='hero-text'>
            <h1 className='header-primary'>Featured Guides</h1>
            <p className='para-primary'>We call our articles "Guides".</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
