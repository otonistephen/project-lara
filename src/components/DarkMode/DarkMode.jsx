import React, { useState } from 'react';


import { images } from '../../assets/images';
import './DarkMode.css';


const DarkMode = ({toggleDarkMode, isDarkMode}) => {
 

  return (
    <div className='toggle'>
      <div className='toggle'>
        {/* Day Icon */}
        <img
          src={images.day_icon}
          alt={images.day_icon}
          className={`day-night-icon ${isDarkMode ? 'active' : ''}`}
        />

        {/* Toggle Button */}
        <div
          className={`toggle-btn ${isDarkMode ? 'active' : ''}`}
          onClick={toggleDarkMode}
        >
          <i className='indicator'></i>
        </div>

        {/* Night Icon */}
        <img
          src={images.night_icon}
          alt={images.night_icon}
          className={`day-night-icon ${isDarkMode ? 'active' : ''}`}
        />
      </div>
    </div>
  );
};

export default DarkMode;
