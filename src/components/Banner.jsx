import React from 'react'
import BannerImg from '../assets/BURRGIRR.png'
import {GrSecure} from 'react-icons/gr';
import { IoFastFood} from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className='min-h-[650px] pt-[300px] flex justify-center items-center py-8 sm:py-0 dark:bg-gray-900 dark:text-white duration-200 relative z-40' >
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center '>
          {/* image */}
          <div data-aos="zoom-in">
            <img className='max-w-[500px] h-[450px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-contain' src={BannerImg} alt="banner" />
          </div>
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Winter Sale Upto 10% Off</h1>
            
            <div className='flex flex-col gap-4 '>
              <div data-aos="fade-up" className='flex gap-4 items-center'>
                <GrSecure  className='text-4xl h-12 w-12 shadow-sm p-4 mr-2  rounded-full bg-violet-100 dark:bg-violet-400'/>
                <p >Quality Products</p>
              </div>
              <div data-aos="fade-up" className='flex gap-4 items-center'>
              <IoFastFood  className='text-4xl h-12 w-12 shadow-sm p-4 mr-2 rounded-full bg-yellow-100 dark:bg-yellow-400'/>
              <p >Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className='flex gap-4 items-center'>
              <GiFoodTruck  className='text-4xl h-12 w-12 shadow-sm p-4 mr-2 rounded-full bg-green-100 dark:bg-green-400'/>
              <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className='flex gap-4 items-center'>
              <GiFoodTruck  className='text-4xl h-12 w-12 shadow-sm p-4 mr-2 rounded-full bg-orange-100 dark:bg-orange-400'/>
              <p >Get Offers</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner
