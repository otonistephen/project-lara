import React from 'react'
import Hero from '../../components/Hero/Hero'
import HomeGuide from '../../components/HomeGuide/HomeGuide'
import Footer from '../../components/Footer/Footer'
import './Home.css'

const Home = ({isDarkMode}) => {
  return (
    <div>
      <Hero isDarkMode={isDarkMode}/>
      <HomeGuide isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </div>
  )
}

export default Home
