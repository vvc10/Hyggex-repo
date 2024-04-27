import React from 'react'
import Topbar from './Topbar'
import Home from './Home'

const Frame = () => {
  return (
    <div className='h-[1818px] w-[1440px] m-auto'>
      <Topbar />

      <div className='acitve_tab w-fit px-8 py-8'>
        <i class="fa fa-home text-[#696671] text-[24px]"></i>
        <span className='text-[#696671] px-2 text-[18px]'>&#10095;</span>
        <span className='text-[#696671] px-2 text-[18px]'>Flashcard</span>
        <span className='text-[#696671] px-2 text-[18px]'>&#10095;</span>
        <span className='text-[#696671] px-2 text-[18px]'>Mathemathics</span>
        <span className='text-[#696671] px-2 text-[18px]'>&#10095;</span>
        <span className='text-[#696671] px-2 text-[18px]'>Relation and Function</span>


      </div>
      <Home />
    </div>
  )
}

export default Frame
