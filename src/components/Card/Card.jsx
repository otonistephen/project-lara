import React, { useEffect, useRef, useState } from 'react';
import './Card.css';
import { images } from '../../assets/images';

const cardData = [
  {
    name: 'Artificial \n  Intelligence',
    photoName: 'photo/undraw_artificial_intelligence_re_enpp 1.svg',
  },
  {
    name: 'Blockchain',
    photoName: 'photo/undraw_nakamoto_-2-iv6 (1).svg',
  },
  {
    name: 'The web',
    photoName: 'photo/web.svg',
  },
  {
    name: 'Devops',
    photoName: 'photo/undraw_code_typing_re_p8b9.svg',
  },
];

const cardDatas = [
  {
    name: 'Artificial \n Intelligence',
    photoName: 'photo/undraw_artificial_intelligence_re_enpp_dark_mode 1.svg',
  },
  {
    name: 'Blockchain',
    photoName: 'photo/undraw_nakamoto_-2-iv6 _dark_mode.svg',
  },
  {
    name: 'Web',
    photoName: 'photo/web_dark_mode.svg',
  },
  {
    name: 'Devops',
    photoName: 'photo/undraw_code_typing_re_dark_mode.svg',
  },
];

const Card = ({ isDarkMode }) => {
  const [firstData, setDarkModeData] = useState(cardData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = e => {
    setTouchStartX(e.touches[0].clientx);
  };
  const handleTouchMove = e => {
    const touchMoveX = e.touches[0].clientX;
    const diff = touchStartX - touchMoveX;

    if (diff > 50) {
      handleNext();
      setTouchStartX(0);
    } else if (diff < -50) {
      handlePrev();
      setTouchStartX(0);
    }
  };

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.addEventListener('touchstart', handleTouchStart);
      cardRef.current.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('touchstart', handleTouchStart);
        cardRef.current.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [handleTouchStart, handleTouchMove]);

  useEffect(() => {
    setDarkModeData(isDarkMode ? cardDatas : cardData);
    setCurrentIndex(0); // Reset when theme changes
  }, [isDarkMode]);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + firstData.length) % firstData.length);
  };
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % firstData.length);
  };

  // Helper for rendering line breaks in names
  const renderName = name =>
    name.split('\n').map((line, idx, arr) => (
      <React.Fragment key={idx}>
        {line}
        {idx !== arr.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <div className='card-container'>
      {/* Desktop: Grid, Mobile: Carousel */}

      <ul className='card-box' ref={cardRef}>
        {firstData.map((card, index) => (
          <li
            key={index}
            className={`card ${isDarkMode ? 'dark' : ''} ${
              index === currentIndex ? 'active' : ''
            }`}
            style={{transform: `translateX(${index === currentIndex ? 0 : 100}%)`, transition: '0.5s'}}
          >
            <img
              src={card.photoName}
              alt={card.name}
              className={`card-photo ${isDarkMode ? 'dark' : ''}`}
            />
            <p>{renderName(card.name)}</p>
          </li>
        ))}
      </ul>
      <img
        src={images.previous}
        alt='previous'
        className='card-previous-btn'
        onClick={handlePrev}
      />
      <img
        src={images.next}
        alt='next'
        className='card-next-btn'
        onClick={handleNext}
      />
      {/* Dots for mobile only */}
      <div className='carousel-dots'>
        {firstData.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to item ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
