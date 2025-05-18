import React, { useEffect,useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Guides from './pages/Guides/Guides';
import Demystify from './pages/Demystify/Demystify';
import { Route, Routes } from 'react-router-dom';
import NewLetter from './pages/NewLetter/NewLetter';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(()=> {
    const storedMode = localStorage.getItem('darkMode');
    return storedMode === 'true';
  }); // State to track dark mode
  // const [imageCard, setImageCard] = useState()

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);
 
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

export default App;
