import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DemystifyHero.css';
import { images } from '../../assets/images';
import DemystifyArticles from '../DemystifyArticles/DemystifyArticles';

const demystifyContent = [
  {
    menu: 'The Early Days',
    title: 'The Early Days: Dreams & Nightmares ',
    spanText: `"Any sufficiently advanced technology is indistinguishable from magic." - Arthur C. Clarke`,
    content: ` The allure of artificial intelligence (AI) has captured the human imagination for decades, fueling visions of machines that think, learn, and even feel like humans. From the pages of science fiction novels to the silver screens of Hollywood, AI has been portrayed as both a benevolent friend and a menacing foe. But what is the reality behind the hype? How has AI evolved from the realms of science fiction into the fabric of our daily lives? Let's embark on a journey to demystify AI and explore the fascinating transition from sci-fi to reality. The allure of artificial intelligence (AI) has captured the human imagination for decades, fueling visions of machines that think, learn, and even feel like humans. From the pages of science fiction novels to the silver screens of Hollywood, AI has been portrayed as both a benevolent friend and a menacing foe. But what is the reality behind the hype? How has AI evolved from the realms of science fiction into the fabric of our daily lives? Let's embark on a journey to demystify AI and explore the fascinating transition from sci-fi to reality.`,
    btnPrev: 'previous',
    btnNext: 'CONTINUE READING',
    contBtnTitle: 'UP NEXT:: AI Ethics and challenge',
  },
  {
    menu: 'AI Winter',
    title: 'AI Winter: False Starts and Breakthroughs',
    content:
      'After the initial excitement, the field experienced what came to be known as "AI winter." The early promise of AI faced challenges that highlighted the complexities of human intelligence. Computers struggled with tasks that humans found trivial, leading to a period of reduced funding and waning interest.After the initial excitement, the field experienced what came to be known as "AI winter." The early promise of AI faced challenges that highlighted the complexities of human intelligence. Computers struggled with tasks that humans found trivial, leading to a period of reduced funding and waning interest.After the initial excitement, the field experienced what came to be known as "AI winter." The early promise of AI faced challenges that highlighted the complexities of human intelligence. Computers struggled with tasks that humans found trivial, leading to a period of reduced funding and waning interest.After the initial excitement, the field experienced what came to be known as "AI winter." The early promise of AI faced challenges that highlighted the complexities of human intelligence. Computers struggled with tasks that humans found trivial, leading to a period of reduced funding and waning interest.',
    btnPrev: 'PREVIOUS PAGE',
    btnNext: 'CONTINUE READING',
    contBtnTitle: "UP NEXT:: Today's AI: Invisible Yet Ubiquitous",
  },
  {
    menu: `Today's AI`,
    title: `Today's AI`,
    content:
      'Fast forward to today, and AI has woven itself into the fabric of our daily lives in ways we might not even notice. From personalized recommendations on streaming platforms to voice assistants like Siri and Alexa, AI algorithms work tirelessly behind the scenes.',
    btnPrev: 'PREVIOUS PAGE',
    btnNext: 'CONTINUE READING',
    contBtnTitle: 'UP NEXT:: AI Ethics and challenge',
  },
  {
    menu: 'The Road Ahead',
    title: 'The Road Ahead',
    content:
      'As AI becomes more integrated into our lives, ethical considerations come to the forefront. Questions arise about bias in AI algorithms, data privacy, and the potential for job displacement due to automation.',
  },
];

const DemystifyHero = () => {
  const [activeArticle, setActiveArticle] = useState('The Early Days');
  const [filteredDemystify, setFilteredDemystify] = useState(
    demystifyContent.filter(item => item.menu === 'The Early Days')
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuClick = category => {
    setActiveArticle(category);
    setFilteredDemystify(
      demystifyContent.filter(item => item.menu === category)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div>
      <div className='header-dem'>
        <div className={`head-dem ${isScrolled ? 'scrolled' : ''}`}>
          <div className='views'>
            <img src={images.eye} alt='Eye Icon' />
            <span className='views-count'>12</span>
          </div>
          <h2 className='dem-header'>
            Demystifying AI: From Sci-Fi to Reality
          </h2>
          <p className='dem-p'>Published: 19 Mar 2023</p>
        </div>
      </div>
      <div className='dem-hero'>
        <div className='dem-img'>
          <img src={images.group_34_AI} alt='AI Illustration' />
        </div>
        <div className='dem-menu-container'>
          <ul className='dem-menu'>
            {/* Menu items with dynamic active state */}
            {demystifyContent.map(item => (
              <li
                key={item.menu}
                onClick={() => handleMenuClick(item.menu)}
                className={activeArticle === item.menu ? 'active' : ''}
              >
                {item.menu}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Render filtered articles */}
      <DemystifyArticles
        filteredDemystify={filteredDemystify}
        activeArticle={activeArticle}
      />
    </div>
  );
};

export default DemystifyHero;
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Guides from './pages/Guides/Guides';
import Demystify from './pages/Demystify/Demystify';
import { Route, Routes } from 'react-router-dom';
import NewLetter from './pages/NewLetter/NewLetter';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode
  // const [imageCard, setImageCard] = useState()
 
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode); // Toggle global dark-mode class
  };

  return (
    <div className={`wrapper ${isDarkMode ? 'dark' : ''}`}>
      <header>
        {/* Pass toggleDarkMode and isDarkMode as props to Navbar */}
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </header>
      <Routes>
        <Route path="/" element={<Home  isDarkMode={isDarkMode}/>} />
        <Route path="/About" element={<About isDarkMode={isDarkMode}/>} />
        <Route path="/Guides" element={<Guides isDarkMode={isDarkMode} />} />
        <Route path="/Demystify" element={<Demystify isDarkMode={isDarkMode}/>} />
        <Route path='/Newsletter' element={<NewLetter  isDarkMode={isDarkMode}/>}/>
      </Routes>
    </div>
  );
};

// export default App;
