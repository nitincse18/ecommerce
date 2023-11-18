import React from 'react'
import SubHeader from './SubHeader'
import Slider from './Slider'
import BestMobile from './BestMobile'
import TopDeals from './TopDeals'

const MainContainer = () => {
  return (
    <div>
        <SubHeader />
        <Slider/>
        <BestMobile />
        <TopDeals />
    </div>
  )
}

export default MainContainer