/* eslint-disable react/jsx-key */
import React from 'react'
import Image1 from '../assets/bakedpotato.jpg'
import Image2 from '../assets/front-view-tasty-meat-burger-with-cheese-salad-dark-background.jpg'
import Image3 from '../assets/overhead-view-chicken-pad-thai-noodles-bowl.jpg'

import { FaStar } from 'react-icons/fa6';


const ProductsData = [
  

    { id: 1,
      img: Image1,
      title: "Baked Potato",
      Description: "Rich in nutrients with less level of spice",},
    
    

  { id: 2,
    img: Image2,
    title: "Burgirrrrrr",
    Description: "The classic Burger with loads of veggies.",},
  
  
    { id: 3,
      img: Image3,
      title: "Noodles",
      Description: "Noodles full of belpepper, chillies.",}

];
const TopProducts = ({handleOrderPopup}) => {
  return (
    
    <div className='py-10 bg-gradient-to-r from-violet-200 to-gray-700 duration-200 relative z-40' id='TopProducts'>
      <div className='container'>
        {/* header-section */}
        <div className='text-center mb-24 pb-20'>
          <p data-aos="fade-up" className='text-primary text-sm '>Top Rated Products for You</p>
          <h1 data-aos="fade-up"
           className='text-3xl font-bold '>Best Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-900 '>Stylish, comfortable, breathable, durable, trendy, versatile, timeless, elegant.</p>
        </div>

        <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {
            ProductsData.map((data) => (
              <div data-aos="zoom-in"
              className='rounded-2xl bg-white hover:bg-black/80  hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                <div className='h-[100px]'>
                  <img src={data.img} alt="IMAGE" className='max-w-[140px] max-h-[150px] block mx-auto scale-100 transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                </div>
                <div className='p-4 text-center'>
                  {/*  */}
                  <div className='w-full flex items-center justify-center gap-1'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                  </div>
                  <h1 className='text-xl font-bold mt-1'>{data.title}</h1>
                  <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-2'>{data.Description} </p>
                  <button   onClick={() => handleOrderPopup()}
                  className='bg-primary hover:scake-105 duration-300 text-black py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>Order now</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopProducts
