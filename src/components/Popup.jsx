
import React from 'react';
import { SiRazorpay } from "react-icons/si";
import { SiPhonepe } from "react-icons/si";
import { SiPaytm } from "react-icons/si";
import { CgPaypal } from "react-icons/cg";
import { FaGooglePay } from "react-icons/fa6";
import { IoCloseOutline } from 'react-icons/io5';



const Popup = ({orderPopup, setOrderPopup}) => {

  return (
    <>
      {orderPopup && (
      <div className='popup'>
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
          <textarea placeholder='Address' className='border w-full h-[100px] rounded-xl border-gray-300 px-2 py-1 mb-4' ></textarea>
          <br /> <br />
          <div data-aos="fade-up" className='text-xl text-center text-white'>
            Select the Payment Gateway
          </div> <br /> <br />
          <div className='flex justify-center'>
            <div className='flex items-center justify-between'>
            <div className='flex flex-row gap-5 justify-center items-center'>
              <CgPaypal data-aos="fade-left" size={30} className='text-white cursor-pointer' onClick={() => window.location.href = 'https://www.paypal.com/signin'} />
              <SiPaytm data-aos="fade-left" size={30} className='text-white cursor-pointer' onClick={() => window.location.href = 'https://paytm.com/'} />
              <SiPhonepe data-aos="fade-right" size={30} className='text-white cursor-pointer' onClick={() => window.location.href = 'https://business.phonepe.com/register'} />
              <SiRazorpay data-aos="fade-right" size={30} className='text-white cursor-pointer' onClick={() => window.location.href = 'https://accounts.razorpay.com/auth/?redirecturl=https%3A%2F%2Fdashboard.razorpay.com&auth_intent=login'} />
              <FaGooglePay data-aos="fade-right" size={30} className='text-white cursor-pointer' onClick={() => window.location.href = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fpay.google.com%2Fsend%2Fhome&followup=https%3A%2F%2Fpay.google.com%2Fsend%2Fhome&ifkv=AeZLP9_S-Wk9Ecb20BlZmCkDdgv2q0DZgqADs2U9UFd3z72hv8OCgXZzm70fZnRK3zpz0Ip1WB6RmA&osid=1&passive=1209600&service=sierra&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S956398925%3A1736355493734008&ddm=1'} />
            </div>
            </div>
          </div>
          <br />
          <br /><br />
          </div>
        </div>
        </div>
      </div>
      )}
    </>
    )
}


export default Popup
