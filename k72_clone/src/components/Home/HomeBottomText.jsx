import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
    <div className='font-[font2] text-[6vw] text-white text-center mt-auto flex justify-center gap-10'>
      <Link to="/work" className='hover:border-[#D3FD50] hover:text-[#D3FD50] leading-[6vw] text-[5.5vw] border-5 border-white rounded-full px-13 uppercase pt-1 pb-0'>Work</Link>
      <Link to="/agency" className='hover:border-[#D3FD50] hover:text-[#D3FD50] leading-[6vw] text-[5.5vw] border-5 border-white rounded-full px-13 pt-1 pb-0 uppercase'>Agency</Link>
    </div>
  )
}

export default HomeBottomText