import React from 'react'
import brand_icon from '../assets/icon.png'
const Topbar = () => {
    return (
        <div className='topbar flex flex-row'>
            <div className='topbar_left bg-orange-0 w-3/5 text-start px-8 py-5'>
                <img className='h-[39px] w-[191px]' src={brand_icon} />
            </div>
            <div className='topbar_right w-2/5 p-5 text-end bg-red-0 font-normal'>
                <ul className='flex flex-row text-end w-fit font-inter bg-black-200 items-center'>
                    <li className='px-4 text-[18px] font-[400] text-[#3A3740]'> Home</li>
                    <li className='px-4 text-[18px] font-[400] text-[#3A3740]'> Flashcard</li>
                    <li className='px-4 text-[18px] font-[400] text-[#3A3740]'>Contact</li>
                    <li className='px-4 text-[18px] font-[400] text-[#3A3740]'>FAQ</li>
                    <button className='text-white text-[18px] font-[400] px-8 mx-4 py-2 bg-gradient-to-r from-[#06286E] to-[#164EC0] rounded-full'>Login</button>
                </ul>
            </div>
        </div>
    )
}

export default Topbar
