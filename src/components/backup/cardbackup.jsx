import React, { useEffect, useState } from 'react';
import './Card.css';

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
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % cardData.length);
  };
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + cardData.length) % cardData.length);
  };

  useEffect(() => {
    if (isDarkMode) {
      setDarkModeData(cardDatas);
    } else {
      setDarkModeData(cardData);
    }
  }, [isDarkMode]);

  const cardItems = firstData.map((card, index) => (
    <li key={index} className={`card ${isDarkMode ? 'dark' : ''}`}>
      <img
        src={card.photoName}
        alt={card.photoName}
        className={`card-photo ${isDarkMode ? 'dark' : ''}`}
      />
      <p>{card.name}</p>
    </li>
  ));

  return <ul className='card-box'>{cardItems}</ul>;
};

export default Card;
