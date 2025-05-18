import React from 'react';
import './Footer.css';
import { images } from '../../assets/images';
import SubButton from '../SubButton/SubButton';

const Footer = ({isDarkMode}) => {
  return (
    <section className={`footer-section ${isDarkMode ? 'dark': ''}`}>
      <div className='footer-body-flex'>
        <div className='footer-body'>
          <h1 className='header-primary'>Stay in the loop</h1>
          <p className='para-primary'>
            <span className='hidden'>Without getting lost in the jargon.</span> Join our newsletter and unlock a{' '}
            <br />
            world of simplified tech insights delivered straight to your inbox
          </p>
          <SubButton isDarkMode={isDarkMode}/>
        </div>
        <img src={images.dot97} alt={images.dot97} className={`dotted-img ${isDarkMode ? 'dark' : ''}`}/>
      </div>
    </section>
  );
};

export default Footer;
