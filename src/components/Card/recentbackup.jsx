import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './backupmain.css'
import { images } from '../../assets/images';

const cardData = [
  {
    name: 'Artificial \n  Intelligence',
    photoName: images.ai || 'photo/undraw_artificial_intelligence_re_enpp 1.svg',
  },
  {
    name: 'Blockchain',
    photoName: images.blockchain || 'photo/undraw_nakamoto_-2-iv6 (1).svg',
  },
  {
    name: 'The web',
    photoName: images.web || 'photo/web.svg',
  },
  {
    name: 'Devops',
    photoName: images.devops || 'photo/undraw_code_typing_re_p8b9.svg',
  },
];

const cardDatas = [
  {
    name: 'Artificial \n Intelligence',
    photoName: images.aiDark || 'photo/undraw_artificial_intelligence_re_enpp_dark_mode 1.svg',
  },
  {
    name: 'Blockchain',
    photoName: images.blockchainDark || 'photo/undraw_nakamoto_-2-iv6 _dark_mode.svg',
  },
  {
    name: 'Web',
    photoName: images.webDark || 'photo/web_dark_mode.svg',
  },
  {
    name: 'Devops',
    photoName: images.devopsDark || 'photo/undraw_code_typing_re_dark_mode.svg',
  },
];

const Card = ({ isDarkMode }) => {
  const [firstData, setDarkModeData] = useState(cardData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDarkModeData(isDarkMode ? cardDatas : cardData);
    setCurrentIndex(0);
  }, [isDarkMode]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prev) => (prev + 1) % firstData.length);
    },
    onSwipedRight: () => {
      setCurrentIndex((prev) => (prev - 1 + firstData.length) % firstData.length);
    },
    delta: 10,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + firstData.length) % firstData.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % firstData.length);
  };

  const renderName = (name) =>
    name.split('\n').map((line, idx, arr) => (
      <React.Fragment key={idx}>
        {line}
        {idx !== arr.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <div className="card-container" {...swipeHandlers}>
      <ul className="card-box" style={{ '--current-index': currentIndex }}>
        {firstData.map((card, index) => (
          <li
            key={index}
            className={`card ${isDarkMode ? 'dark' : ''} ${
              index === currentIndex ? 'active' : ''
            }`}
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
        alt="previous"
        className="card-previous-btn"
        onClick={handlePrev}
      />
      <img
        src={images.next}
        alt="next"
        className="card-next-btn"
        onClick={handleNext}
      />
      <div className="carousel-dots">
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