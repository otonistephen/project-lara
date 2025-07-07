import React, { useState, useEffect } from 'react';
import './HomeGuideCard.css';
import { images } from '../../assets/images';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const hiddenText = [
  {
    div: 'grid-1',
    text: "Learn decentralization, cryptography, and consensus principles, whether you're a newbie or a pro developer.",
    path: '/',
    image: images.group_32,
    title: 'Blockchain',
    time: '6 minutes read',
    heading: 'Creating Your First Blockchain: A Hands-On Workshop',
  },
  {
    div: 'grid-2',
    text: "Explore AI's evolution and real-world applications, from machine learning to industry transformations.",
    path: '/Demystify',
    image: images.group_34_AI,
    title: 'AI',
    time: '11 minutes read',
    heading: 'Demystifying AI: From Sci-Fi to Reality',
  },
  {
    div: 'grid-3',
    text: 'Create fast, responsive, and offline-friendly web applications.',
    path: '/',
    image: images.group_39,
    title: 'Web',
    time: '9 minutes read',
    heading: 'Progressive Web Apps: Bridging the Gap Between Web & Mobile',
  },
];

const HomeGuideCard = ({ setImageSrc, isDarkMode }) => {
  const [hovered, setHovered] = useState(null);
  const [firstIndex, setFirstIndex] = useState(0);

  useEffect(() => {
    setHovered('grid-1'); // Set the first grid as active on initial render
    setFirstIndex(0);
  }, []);

  // Takes the page to the top when clicked
  const handleMenuClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'auto' });
    setFirstIndex(0);
  };

  const handleNext = () => {
    const newIndex = (firstIndex + 1) % hiddenText.length;
    setFirstIndex(newIndex);
    setHovered(hiddenText[newIndex].div);
    setImageSrc(hiddenText[newIndex].image);
  };
  const handlePrev = () => {
    const newIndex = (firstIndex - 1 + hiddenText.length) % hiddenText.length;
    setFirstIndex(newIndex);
    setHovered(hiddenText[newIndex].div);
    setImageSrc(hiddenText[newIndex].image);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      // setFirstIndex(prev => (prev + 1) % hiddenText.length);
      const newIndex = (firstIndex + 1) % hiddenText.length;
      setFirstIndex(newIndex);
      setHovered(hiddenText[newIndex].div);
      setImageSrc(hiddenText[newIndex].image);
    },
    onSwipedRight: () => {
      // setFirstIndex(prev => (prev - 1 + hiddenText.length) % hiddenText.length);
      const newIndex = (firstIndex - 1 + hiddenText.length) % hiddenText.length;
      setFirstIndex(newIndex);
      setHovered(hiddenText[newIndex].div);
      setImageSrc(hiddenText[newIndex].image);
    },
    delta: 2,
    preventDefaultTouchmovementEvent: true,
    trackTouch: true,
  });

  return (
    <div className='animate gruide-container' {...swipeHandlers}>
      <div className='guide-carousel-dots'>
        {hiddenText.map((item, idx) => (
          <button
            key={idx}
            className={`guide-dot ${idx === firstIndex ? 'active' : ''}`}
            onClick={() => {
              setFirstIndex(idx);
              setHovered(item.div);
              setImageSrc(item.image);
            }}
            aria-label={`Go to item ${idx + 1}`}
          />
        ))}
      </div>

      <div className='guide-grid'>
        {/* Dots for mobile only */}

        {hiddenText.map((item, index) => (
          <div
            key={index}
            className={`grid ${item.div} ${
              hovered === item.div ? 'active' : ''
            } ${isDarkMode ? 'dark' : ''} `}
            onMouseEnter={() => {
              setImageSrc(item.image); // Update the image source on hover
              setHovered(item.div); // Set the hovered state
            }}
            // onMouseLeave={() => hovered(null)} // Reset hover state
          >
            <Link to={item.path} onClick={handleMenuClick}>
              <div className='guide-flex'>
                <h4
                  className={`guide-h4 ${hovered === item.div ? 'active' : ''}`}
                >
                  {item.title}
                </h4>

                <img src={images.ellipse_54} alt='Ellipse' />
                <p className='time-p'>{item.time}</p>
              </div>
              <div className='guide-text'>
                <h2
                  className={`guide-h2 ${hovered === item.div ? 'active' : ''}`}
                >
                  {item.heading}
                </h2>
                {hovered === item.div && <p className='grid-p'>{item.text}</p>}
              </div>
            </Link>
          </div>
        ))}
        <div className='button-container'>
          <img
            src={images.previous}
            alt='previous'
            className='dem-previous-btn'
            onClick={handlePrev}
          />
          <img
            src={images.next}
            alt='next'
            className='dem-next-btn'
            onClick={handleNext}
          />
        </div>

        {/* <a href='#' className={`btn ${isDarkMode ? 'dark' : ''}`}>
          SEE ALL GUIDES
          <span className={`arrow-right ${isDarkMode ? 'dark' : ''}`}>
            <img src={images.arrowright} alt='arrow-right' />
          </span>
        </a> */}
        <Link to='./Guides' className={`btn ${isDarkMode ? 'dark' : ''}`} onClick={handleMenuClick}>
          SEE ALL GUIDES{' '}
          <span className={`arrow-right ${isDarkMode ? 'dark' : ''}`}>
            {' '}
            <img src={images.arrowright} alt='arrow-right' />{' '}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomeGuideCard;
