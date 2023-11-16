import React from 'react'
import Mainpage from './Mainpage'
import ServiceCard from './ServiceCard'
import CounterSection from './CounterSection'
import SocialShareMenu from './SocialShareMenu'
import Alumni from './Alumni'
import Company from './Company'
import Navbar from '../Components/Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='home-wrapper'>
      <Mainpage/>
      <SocialShareMenu/>
      <Alumni/>
      <CounterSection/>
      <Company/>
  <Footer/>
    </div>
  )
}

export default Home
