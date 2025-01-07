import React from 'react';
import img1 from '../assets/burger.jpeg';
import img2 from '../assets/slice.jpeg';
import img3 from '../assets/roll.jpeg';

const Subscription = () => {
  return (
    <div id='subscription' className='bg-gray-900'>
      <div className='container text-gray-100 pb-[300px] pt-[150px]'>
        <p data-aos="zoom-in" className='text-5xl font-bold text-center'>Subscriptions</p><br /><br /> <br /><br /><br /><br /><br />
        <div className='grid grid-cols-3 gap-[40px]'>
        <div data-aos="fade-right" className='bg-gradient-to-br relative from-black/90 to-black/70 rounded-2xl h-[450px] pl-5 py-10 flex items-end'>
            <div className='mb-4 '>
            <p data-aos="fade-down" className='text-gray-300 pb-2 text-4xl'>WEEKLY </p>
            <p data-aos="fade-right" className='text-2xl font-bold p-2 text-white'>subscription</p>
            <p data-aos="fade-up" className='text-gray-400 font-bold text-5xl'>10% off</p>
          
            </div>
            <img data-aos="zoom-out" className='absolute top-10 z-0 h-[150px] ' src={img1} alt="" /> <br />
          </div>

          <div data-aos="zoom-in" className='bg-gradient-to-br relative from-black/90 to-black/70 rounded-2xl h-[450px] pl-5 py-10 flex items-end'>
            <div className='mb-4 '>
            <p data-aos="fade-down" className='text-gray-300 pb-2 text-4xl'>Monthly</p>
            <p data-aos="zoom-in" className='text-2xl font-bold p-2 text-white'>subscription</p>
            <p data-aos="fade-up" className='text-gray-400 font-bold text-5xl'>20% off</p>
            
            </div>
            <img data-aos="zoom-out" className='absolute top-10 z-0 h-[150px] duration-600' src={img2} alt="" /> <br />
          </div>

          <div data-aos="fade-left" className='bg-gradient-to-br relative from-black/90 to-black/70 rounded-2xl h-[450px] pl-5 py-10 flex items-end'>
            <div className='mb-4 '>
            <p data-aos="fade-down" className='text-gray-300 pb-2 text-4xl'>Yearly</p>
            <p data-aos="fade-left" className='text-2xl font-bold p-2 text-white'>subscription</p>
            <p data-aos="fade-up" className='text-gray-400 font-bold text-5xl'>30% off</p>
            
            </div>
            <img data-aos="zoom-out" className='absolute top-10 z-0 h-[150px] ' src={img3} alt="" /> <br />
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Subscription
