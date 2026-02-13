import React from 'react'
import Video from './Video'


function HomeHeroText() {
  return (
    <div className='font-[font1] text-5xl text-white text-center'>
        <div className='text-[9vw] uppercase leading-[9vw] flex justify-center items-center'>
            The spark for
            </div>
        <div className='text-[9vw] uppercase leading-[9vw] flex justify-center items-center'>
            all
            <div className='h-[7vw] w-[15vw] mb-5 rounded-full '>
                <Video />
            </div>
            things
        </div>
        <div className='text-[9vw] uppercase leading-[9vw] flex justify-center items-center'>
            creative
        </div>
    </div>
  )
}

export default HomeHeroText