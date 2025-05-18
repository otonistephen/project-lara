import React from 'react'
import './Demystify.css'
import DemystifyHero from '../../components/DemystifyHero/DemystifyHero'

const Demystify = ({isDarkMode}) => {
  return (
    <div className='c'>
      <DemystifyHero isDarkMode={isDarkMode}/>
    </div>
  )
}

export default Demystify
