import React from 'react';
import './NewsLetter.css';
import { images } from '../../assets/images';
import SubButton from '../../components/SubButton/SubButton';

const NewLetter = ({isDarkMode}) => {
  return (
    <div className='wrapper'>
      <div className='newsletter-container'>
        <div className='header-primary header'>Newsletter</div>

        <h2>📣 Stay in the Know with Guidelyy's Tech Explorations! 🚀</h2>
        <p>
          We're focused on bringing the realm of technology to those who might
          not possess a technical background using well researched and easy to
          understand articles called “Guides”. Each guide is meticulously
          designed to transition you from a novice to someone with an
          above-average grasp of the subject matter. Our guides are divided into
          small and easily digestible parts.
        </p>
        <h2 className='sample'>Here’s a sample</h2>

        <div className='newsletter-img'>
          <img src={images.newsletter} alt={images.newsletter} />
        </div>
      </div>

      <div className='news-flex'>
        
        <div className='newletter-flex-img'>
          <h2 className='newsl-sub-h2'>
            Get notified when we post a guide, Subscribe!
          </h2>
          <img src={images.group_98} alt={images.group_98} />
        </div>
        <div className='newsletter-subscribe'>
          <h2 className='newsl-sub-h2'>
            Get notified when we post a guide, Subscribe!
          </h2>
          <p className='newsl-sub-p'>
            Subscribe to our newsletter to be notified first when we release a
            new awesome guide. We promise not to spam your inbox :)
          </p>
          <SubButton isDarkMode={isDarkMode}/>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
