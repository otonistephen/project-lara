import React from 'react';
import './DemystifyArticles.css';
import { images } from '../../assets/images';
import GuideFooter from '../GuideFooter/GuideFooter';

const DemystifyArticles = ({ filteredDemystify, activeArticle }) => {
  return (
    <div className='dem-article-container'>
      {filteredDemystify.map((card, index) => (
        <div className='early-days-cont' key={index}>
          <h1 className='early-days-h1'>{card.title}</h1>
          <p className='spantext'>
            <i>{card.spanText}</i>
          </p>
          <p className='early-days-p'>{card.content}</p>

          <div className={`early-days-flex ${card.btnNext ? '':'active'}`}>
            
            {card.btnPrev && (
              <div
                className={`prev-button ${
                  activeArticle === 'The Early Days' && index === 0
                    ? 'active'
                    : ''
                }`}
              >
                <h2 className='hide'>y</h2>
                <button className='previous'>
                  <img src={images.arrowleft} alt={images.arrowleft} />
                  {card.btnPrev}
                </button>
              </div>
            )}
            {/* {card.btnNext && (
              <div className='cont-button'>
                <h2>{card.contBtnTitle}</h2>
                <button className='cont-reading'>
                  {card.btnNext}{' '}
                  <img src={images.arrowright} alt={images.arrowright} />
                </button>
              </div>
            )} */}

            {card.btnNext ? (
              <div className='cont-button'>
                <h2>{card.contBtnTitle}</h2>
                <button className='cont-reading'>
                  {card.btnNext}{' '}
                  <img src={images.arrowright} alt={images.arrowright} />
                </button>
              </div>
              
            ) : (
              <div className='author-section'>
                <div className='author-container'>
                  <h2>Author</h2>
                  <div className='img-social-flex'>
                    <div className='author-img'>
                      <img src={images.tech_guy_img} alt='tech-guy-img' />
                    </div>
                    <div className='social-text'>
                      <h3>
                        Nyior <br />
                        Clement
                      </h3>
                      <div className='social'>
                        <img
                          src={images.x_twitter}
                          alt='x-twitter'
                          className='twitter-x'
                        />
                        <img
                          src={images.linkedin_58}
                          alt='linkedin'
                          className='linkedin'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                 <GuideFooter />
              </div>
            )}
          </div>

          {/* {card.btnNext || (
            <div className='author-section'>
              <div className='author-container'>
                <h2>Author</h2>
                <div className='img-social-flex'>
                  <div className='author-img'>
                    <img src={images.tech_guy_img} alt='tech-guy-img' />
                  </div>
                  <div className='social-text'>
                    <h3>
                      Nyior <br />
                      Clement
                    </h3>
                    <div className='social'>
                      <img
                        src={images.x_twitter}
                        alt='x-twitter'
                        className='twitter-x'
                      />
                      <img
                        src={images.linkedin_58}
                        alt='linkedin'
                        className='linkedin'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <GuideFooter />
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default DemystifyArticles;
