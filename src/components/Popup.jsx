
import React from 'react';
import { MdPayments } from "react-icons/md";
import { SiPhonepe } from "react-icons/si";
import { SiPaytm } from "react-icons/si";
import { CgPaypal } from "react-icons/cg";
import { IoCloseOutline } from 'react-icons/io5';
import { FaGooglePay } from "react-icons/fa6";

const Popup = ({orderPopup, setOrderPopup}) => {

  return ( <>
      {orderPopup  && (<div className='popup'>
          <div data-aos="zoom-in" className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 bacdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md p-4 shadow-md bg-white dark:bg-gray-900 durayion-200 w-[300px]'>
              <div className='flex items-center justify-between '>
                <div>
                  <h1 className='dark:text-white'>Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline className='text-2xl cursor-pointer dark:text-white' onClick={() => setOrderPopup(false)} />
                </div>
              </div>  
              <div className='mt-4'>
                <input type="text" placeholder='Name' className='border w-full rounded-full border-gray-300 px-2 py-1 mb-4' />
                <input type="text" placeholder='Email' className='border w-full rounded-full border-gray-300 px-2 py-1 mb-4' />
                <input type="text" placeholder='Address' className='border w-full rounded-full border-gray-300 px-2 py-1 mb-4' />
                <div className='flex justify-center'>
                  <button className='bg-gradient-to-r from-primary to-secondary px-4 py-1  rounded-full transition-all text-white hover:scale-105 duration-200'>Order Now</button> <br /> <br />
                </div>
                <div data-aos="fade-up" className='text-xl text-center text-white'>
                  Payment Gateway

                </div> <br />
              <div className='flex flex-row gap-5  justify-center items-center'>
              <CgPaypal size={30} className='text-white' />
              <SiPaytm size={30} className='text-white'  />
              <SiPhonepe  size={30} className='text-white' />
              <MdPayments size={30} className='text-white'  />
              <FaGooglePay size={30} className='text-white' />

              </div>
             
                
              </div>
            </div>
          </div>
        </div>
      )}

      </>
     
    
  
  )
}

export default Popup
