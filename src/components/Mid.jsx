import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaWallet } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";


const Mid = () => {
  return (
    <>
    <div className='py-20 container'>
      <div className='flex justify-between text-black dark:white'>
        <div data-aos="zoom-in" className='flex gap-4'><FaCarSide className='text-red-700 ' size={42} />
        <div className='flex-col'>
          <p className='font-bold text-lg text-gray-100'>Free Shipping</p>
          <p className='text-sm text-gray-400'>Free Shiping On All Order</p>
        </div>
        </div>
        <div data-aos="zoom-in" className='flex gap-4'><TiTick className='text-red-700 ' size={42}/>
        <div className='flex-col '>
          <p className='font-bold text-lg text-gray-100'>Safe Money</p>
          <p className='text-sm text-gray-400'>Free Shiping On All Order</p>
        </div>
        </div>
        <div data-aos="zoom-in" className='flex gap-4'><FaWallet className='text-red-700 ' size={42}/>
        <div className='flex-col '>
          <p className='font-bold text-lg text-gray-100'>Secure Payment</p>
          <p className='text-sm text-gray-400'>Free Shiping On All Order</p>
        </div>
         </div>
        <div data-aos="zoom-in" className='flex gap-4'><FaHeadphonesAlt className='text-red-700 ' size={42}/>
        <div className='flex-col '>
          <p className='font-bold text-lg text-gray-100'>Online Support 24/7</p>
          <p className='text-sm text-gray-400'>Free Shiping On All Order</p>
        </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Mid
