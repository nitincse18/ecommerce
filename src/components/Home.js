import React from 'react'
import Header from './Header'
import SubHeader from './SubHeader'
import Slider from './Slider'
import BestMobile from './BestMobile'
import TopDeals from './TopDeals'

const Home = () => {
  return (
    <div className=''>
        <SubHeader />
        <Slider/>
        <BestMobile />
        <TopDeals />
    </div>
  )
}

export default Home