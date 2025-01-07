import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Logo from '../assets/bite.png'
import { IoMdSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between h-14 bg-gradient-to-r  from-violet-200 to-gray-700 items-center p-4  text-gray-800">
        <div className="text-2xl flex gap-3 font-bold shadow-md" data-aos="fade-right"> <img  src={Logo} alt="logo" className='w-10 uppercase' />Bite & Sip</div>
        <div className="flex gap-5">
          <a data-aos="zoom-in" href="#home" className="text-gray-800 no-underline hover:text-black hover:font-bold hover:scale-x-110 hover:scale-y-110 duration-200">Home</a>
          <a data-aos="zoom-in" href="#TopProducts" className="text-gray-800 no-underline hover:text-black hover:font-bold hover:scale-x-110 hover:scale-y-110 duration-200">Top Rated</a>
          <a data-aos="zoom-in" href="#menu" className="text-gray-800 no-underline hover:text-black hover:font-bold hover:scale-x-110 hover:scale-y-110 duration-200">Menu</a>
          
          <a data-aos="zoom-in" href="#subscription" className="text-gray-800 no-underline hover:text-black hover:font-bold hover:scale-x-110 hover:scale-y-110 duration-200">Subscription</a>
          <a data-aos="zoom-in" href="#menu" className="text-gray-800 no-underline hover:text-black hover:font-bold hover:scale-x-110 hover:scale-y-110 duration-200">Order <span> </span> </a>

        </div>
    
           <input type="text" 
             data-aos="fade-left"
             placeholder='search' 
             className='w-[200px] sm:w-[200px] duration-300 border rounded-full shadow-xl  border-gray-400 px-2 py-1 focus:outline-none focus:border
             focus:border-yellow-300  focus:bg-gray-400 focus:w-[300px]' />
             <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
      </nav>
    </div>
  )
}

export default Navbar
