import React from 'react';
import './GuideFooter.css';

import { images } from '../../assets/images';

const GuideFooter = ({ isDarkMode }) => {
  return (
    <section className=' guide-footer-section'>
      <div className='guide-footer'>
        <div className='guide-footer-body'>
          <div className='footer-text'>
            <h1 className='header-primary'>
              If you enjoyed this guide, Subscribe!
            </h1>
            <p className='para-primary'>
              Subscribe to our newsletter to be notified first when we <br />release a
              new guide.
               We promise not to spam your inbox :)
            </p>
          </div>
          <div className='subscribe-button'>
            <input
              type='text'
              
              placeholder='Email Addrress'
              className={`placeholder ${isDarkMode ? 'dark' : ''}`}
            />
            <div>
            <button className={`subscribe-btn ${isDarkMode ? 'dark' : ''}`}>
              SUBSCRIBE
            </button>
            </div>
          </div>
        </div>
        <img
          src={images.dot97}
          alt={images.dot97}
          className={`dotted-img ${isDarkMode ? 'dark' : ''}`}
        />
      </div>
    </section>
  );
};

export default GuideFooter;
