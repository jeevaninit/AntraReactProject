import React from 'react'
import Menunavbar from './MenuNavigationbar'
import BoostrapBanner from './BoostrapBanner'
import BodyContent from './BodyContent'
import MediaCard from './CardItem'

const BootstrapComponent = () => {
  return (
    <div>
        <Menunavbar />
        <BoostrapBanner />
        <BodyContent />
        <MediaCard />
    </div>
  )
}

export default BootstrapComponent