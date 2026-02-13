import React from 'react'
import Video from '../components/Home/Video.jsx'
import HomeHeroText from '../components/Home/HomeHeroText.jsx'
import HomeBodyText from '../components/Home/HomeBodyText.jsx'
import HomeBottomText from '../components/Home/HomeBottomText.jsx'

function Home() {
  return (
    <>
      <div className="w-screen h-screen fixed">
        <Video />
      </div>
      <div className='w-screen h-screen relative flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBodyText />
        <HomeBottomText />
      </div>
    </>
  )
}

export default Home