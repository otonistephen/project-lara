import React from 'react';
import './About.css';
import { images } from '../../assets/images';
import Footer from '../../components/Footer/Footer';

const About = ({ isDarkMode }) => {
  return (
    <div className={`wrapper ${isDarkMode ? 'dark' : ''} about-container`}>
      <div className='container'>
        <h1>About Guidelily</h1>
        <p>
          Welcome to Guidelyy, your reliable destination for unraveling the
          complexities of technology in the simplest and most approachable
          manner. Our mission is crystal clear: to bridge the gap between the
          tech-savvy and the tech-curious. Our aim is to demystify intricate
          technical concepts and present them to non-technical individuals in a
          language that resonates. We intend to measure our success not merely
          through statistics but through the multitude of "aha" moments
          experienced by our readers as they unravel the enigma of technology.
        </p>
      </div>
      <div className='grid-width'>
        <div className='grid-about'>
          <div className='grid-one'>
            <h2 className='grid-about-h2'>
              Simplifying Tech for Non-Technical Minds
            </h2>
            <img src={images.brain} alt={images.brain} />
            <p className='grid-about-p'>
              We're focused on bringing the realm of technology to those who
              might not possess a technical background using well researched and
              easy to understand articles called “Guides”. Each guide is
              meticulously designed to transition you from a novice to someone
              with an above-average grasp of the subject matter. Our guides are
              divided into small and easily digestible parts.
            </p>
          </div>

          <div className='brain-img'>
            <img src={images.brain} alt={images.brain} />
          </div>

          <div className='grid-3'>
            <h2 className='grid-h22'>United in Learning, United in Progress</h2>
            <div className='team-img'>
              <img src={images.team} alt={images.team} />
            </div>
          </div>
          <div className='grid-4'>
            <h2 className='grid-h22'>United in Learning, United in Progress</h2>

            <p className='grid-p2'>
              Guidelyy isn't just a tech blog; it's a community-driven
              initiative to make technology accessible to all. We're here to
              accompany you on your tech journey, one simplified concept at a
              time. Join us and embark on a path of empowered learning.
            </p>
          </div>
        </div>
      </div>

      <div className={`about-bottom ${isDarkMode ? 'dark' : ''}`}>
        <h2>Tech Guy</h2>

        <div className={`horizontal-line ${isDarkMode ? 'dark' : ''}`}>
          <span className={`hr ${isDarkMode ? 'dark' : ''}`}>\\</span>
        </div>
        <div className='tech-guy-img'>
          <img src={images.tech_guy_img} alt={images.tech_guy_img} />
          <h3>Nyior Clement</h3>
        </div>
        <p className='tech-guy-img-p'>
          Meet the brain behind Guidelyy – your tech guru and guide, Nyior.
          Armed with a deep understanding of technology and a passion for making
          it comprehensible, Nyior is at the forefront of our mission to bridge
          help you sail through AI, Blockchain, DevOps, and the Web like a pro.
          When not decoding tech, you might find him enjoying a cup of coffee,
          dreaming up new ways to simplify the complex, or exploring the latest
          in the tech universe.
        </p>
        <h3 className='connect connect-h3'>connect with us</h3>
        <div className='connect connect-flex'>
          <img
            src={images.x_twitter}
            alt={images.x_twitter}
            className={`x-twitter ${isDarkMode ? 'dark' : ''}`}
          />
          <img src={images.linkedin_58} alt={images.linkedin_58} />
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default About;
