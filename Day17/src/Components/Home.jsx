import React from 'react'
import MainPage from '../Pages/MainPage'
import Events from '../Pages/Events'
import ScrollAnimationComponent from './ScrollAnimationComponent'

const Home = () => {
  return (
    <div className='homepage-wrapper'>
     
      <MainPage/>
      <ScrollAnimationComponent/>
      <Events/>
    </div>
  )
}

export default Home
