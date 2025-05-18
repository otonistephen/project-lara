import React, { useState } from 'react';
import './HomeGuide.css';
import { images } from '../../assets/images';
import HomeGuideCard from '../HomeGuideCard/HomeGuideCard';

const HomeGuide = ({isDarkMode}) => {
  const [imageSrc, setImageSrc] = useState(images.group_32);
  // const [currentIndex, setCurrentIndex] = useState(0)

 

  return (
    <section className={`guide-section ${isDarkMode ? 'dark' : ''}`}>
      <div className={`guide-img ${isDarkMode ? 'dark' : ''}`}>
        <img src={imageSrc} alt={images.group_32} />
      </div>
      <HomeGuideCard imageSrc={imageSrc} setImageSrc={setImageSrc} isDarkMode={isDarkMode}/>
      
    </section>
  );
};

export default HomeGuide;
