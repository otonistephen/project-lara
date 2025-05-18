import React from 'react';
import './DemystifyArticles.css';

const DemystifyArticles = ({ demystifyContent, filteredDemystify}) => {
  return (
    <div>
      {filteredDemystify.map((card, index) => (
        <div className='early-days-cont' key={index}>
          <h1 className='early-days-h1'>{card.title}</h1>
          <p className='early-days-p'>{card.content}</p>

          <div className='early-days-flex'>
            <div className='prev-button'>
              <h2 className='hide'>t</h2>
              <button className='previous'>{card.btnPrev}</button>
            </div>
            <div className='cont-button'>
              <h2>{card.contBtnTitle}</h2>
              <button className='cont-reading'>{card.btnNext}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DemystifyArticles;
