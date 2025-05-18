import React from 'react';
import './GuideCardPage.css';
import { images } from '../../assets/images';

const GuideCardPage = ({ filteredGuides}) => {
  return (
    <div className='guide-card-grid'>
      {filteredGuides.map((card, index) => (
        <div className='guide-card' key={index}>
          <div className='guide-card-image'>
            <img src={card.image} alt={card.title} />
          </div>

          <div className='guide-card-text-all'>
            <div className='guide-card-text-flex'>
              <h4>
                <u>{card.title}</u>
              </h4>
              <p className='guide-timer'>
                <span>
                  <img src={images.timer} alt={images.timer} />
                </span>
                {card.time} minutes read
              </p>
            </div>
            <div className='guide-card-text'>
              <h2>{card.heading}</h2>
              <p className='guide-p'>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuideCardPage;
