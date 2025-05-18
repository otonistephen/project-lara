import React from 'react';
import './SubButton.css'

const SubButton = ({isDarkMode}) => {
  return (
    <div className='sub-btn'>
      <input type='text' placeholder='Email Addrress' className={`placeholder ${isDarkMode ? 'dark' : ''}`}/>
      <button className={`subscribe-btn ${isDarkMode ? 'dark':''}`}>SUBSCRIBE</button>
    </div>
  );
};

export default SubButton;
