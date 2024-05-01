import React, { useState } from 'react';
import '../assets/style.css'
import { useSwipeable } from 'react-swipeable';
import logo from '../assets/icon.png';
import icon_again from '../assets/icon_again.png';
import icon_logo from '../assets/icon_logo.png';
import Faqs from './Faqs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { data } from 'autoprefixer';


const Home = () => {
  const [clickedCard, setClickedCard] = useState(1);

  const cardData = [
    { id: 1, content: 'Study', data: '9 + 6 + 7x - 2x - 3', backwardData: '5x+12' },
    { id: 2, content: 'Quiz', data: 'Quiz', backwardData: 'Quiz Backward' },
    { id: 3, content: 'Test', data: 'Test', backwardData: 'Test Backward' },
    { id: 4, content: 'Game', data: 'Game', backwardData: 'Game Backward' },
    { id: 5, content: 'Others', data: 'Others', backwardData: 'Others Backward' },
  ];

  const [flippedCard, setFlippedCard] = useState(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log('Swiped Left'),
    onSwipedRight: () => console.log('Swiped Right'),
  });

  const handleCardClick = (id) => {
    if (flippedCard === id) {
      setFlippedCard(null);
    } else {
      setFlippedCard(id);
    }
  };

  return (
    <div className='home_sec'>
      <h3 className='font-montserrat font-montserrat w-full text-start px-8 font-bold text-3xl bg-gradient-to-b from-[#06286E] via-[#11329F] to-[#164EC0] inline-block text-transparent bg-clip-text '>Relations and Functions (Mathematics)</h3>
      <div className="px-8 py-8 mb-8">
        <ul className='w-fit text-xl m-auto flex flex-row text-center'>
          {cardData.map(card => (
            <li 
              key={card.id}  
              className={`mx-5 font-inter py-2 px-3 text-[20px] cursor-pointer ${clickedCard === card.id ? ' font-[700] text-[#06286E] border-b-2 border-[#06286E]' : 'text-gray-500 font-[500]'}`} 
              onClick={() => handleCardClick(card.id)}
            >
              {card.content}
            </li>
          ))}
        </ul>{cardData.map(card => (
        <div className={`mx-auto my-[2rem] ${flippedCard === card.id ? 'flipped' : ''}`}>
          
            <div 
              key={card.id} 
              className={`  w-[712px] h-[393.19px] m-auto card rounded-[42.51px] ${clickedCard === card.id ? '' : 'hidden'}`}
              onClick={() => handleCardClick(card.id)}
              {...handlers}
            >
              <div className={`card-inner ${flippedCard === card.id ? 'flipped' : ''}`}>
                <div className='card-front bg-gradient-to-r from-[#164EC0] to-[#06286E] rounded-[42.51px]'>
                  <div className='card-header h-[20%] flex flex-row p-8'>
                    <div className='w-[50%] text-start'>
                      <i className="fa fa-lightbulb-o text-white text-[34.01px]"></i>
                    </div>
                    <div className='w-[50%] text-end'>
                      <i className="fa fa-volume-up text-white text-[24.85px]"></i>
                    </div>
                  </div>
                  <div className='data_box h-[80%] items-center text-inter text-white text-[38.26px]'>
                    <p className='font-medium font-lato'>{card.data}</p>
                  </div>
                </div>
                <div className='card-back bg-gradient-to-r from-[#2D87B6] to-[#071844] rounded-[42.51px] '>
                  <div className='card-header h-[20%] flex flex-row p-8'>
                    <div className='w-[50%] text-start'>
                      <i className="fa fa-lightbulb-o text-white text-[34.01px]"></i>
                    </div>
                    <div className='w-[50%] text-end'>
                      <i className="fa fa-volume-up text-white text-[24.85px]"></i>
                    </div>
                  </div>
                  <div className='data_box h-[80%] items-center text-inter text-white text-[38.26px]'>
                    <p className='font-medium font-lato'>{card.backwardData}</p>
                  </div>
                </div>
              </div>
            </div>
         
        </div> ))}
        <div className='carb_bottom flex flex-row w-[712px] m-auto mb-20'>
          <div className='card_bottom_start w-[20%] flex items-center'>
            <FontAwesomeIcon icon={faRedo} className="ml-auto text-[30px] text-[#06286E]" />
          </div>
          <div className='card_bottom_center w-[60%] flex flex-row items-center justify-center'>
            <span className='text-white mx-4 px-5 py-1.5 text-[28px] bg-gradient-to-r from-[#164EC0] to-[#06286E] rounded-full'>&#10094;</span>
            <div className='text-center text-[24px] font-[700] mx-4'>01/10</div>
            <span className='text-white mx-4 px-5 py-1.5 text-[28px] bg-gradient-to-r from-[#164EC0] to-[#06286E] rounded-full'>&#10095;</span>
          </div>
          <div className='card_bottom_end w-[20%] flex items-center text-start'>
            <i className="material-icons text-[40px]  bg-gradient-to-b from-[#06286E] via-[#11329F] to-[#164EC0] inline-block text-transparent bg-clip-text ">&#xe5d0;</i>
          </div>
        </div>
        <div className='w-full flex flex-row px-4'>
          <div className='w-[50%] flex flex-row'>
            <img src={icon_logo} className='h-[54.69px] w-[54.69px] bg-white px-[7.955px] py-[12.975px] shadow-custom rounded-full' />
            <div className='flex flex-col text-start px-4'>
              <p className='text-[12.4px] font-[700] text-[#696671]'>Published by</p>
              <img src={icon_again} className='h-[34.54px] w-[115.14px]' />
            </div>
          </div>
          <div className='w-[60%] flex justify-end gap-[10px]'>
            <i className="fa fa-plus rounded-full p-2 h-[50px] w-[50px] flex items-center justify-center text-center  bg-gradient-to-r from-[#164EC0] to-[#06286E] text-white"></i>
            <p className=' bg-gradient-to-r from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text text-[28px] font-[600]'> Create Flashcard</p>
          </div>
        </div>
      </div>
      <Faqs />
    </div>
  )
}

export default Home;
