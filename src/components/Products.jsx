/* eslint-disable react/jsx-key */
import React from 'react'
import Img1 from '../assets/chicken-fajita-chicken-fillet-fried-with-bell-pepper-lavash-with-bread-slices-white-plate.jpg'
import Img2 from  '../assets/lentil-soup-bowl-mint-lemon-crackers-side-view.jpg'
import Img3 from  '../assets/rb_10377.png'
import Img4 from '../assets/sauteed-mushrooms-with-pumpkin-sweet-pepper.jpg'
import Img5 from  '../assets/front-view-tasty-meat-burger-with-cheese-salad-dark-background.jpg'
import Img6 from  '../assets/traditional-caucasian-gutab-kutab-gozleme-with-sumakh-yogurt-wooden-plate.jpg'
import Img7 from  '../assets/sauteed-mushrooms-with-pumpkin-sweet-pepper.jpg'
import Img8 from  '../assets/overhead-view-chicken-pad-thai-noodles-bowl.jpg'
import Img9 from  '../assets/delicious-food-table.jpg'
import Img10 from  '../assets/bakedpotato.jpg'


import { FaStar } from 'react-icons/fa6'
const ProductsData = [
  {
    id:1,
    img:  Img1,
    title: "Rosoto garlic",
    rating: 5.0,
    
    aosDelay: "0",
  },

  {
    id:2,
    img:  Img2,
    title: "pulses soup",
    rating: 4.5,

    aosDelay: "200",
  },

  {
    id:3,
    img:  Img3,
    title: "Coffe mocha",
    rating: 4.0,

    aosDelay: "400",
  },

  {
    id:4,
    img:  Img4,
    title: "Mushroom Salad",
    rating: 4.4,

    aosDelay: "300",
  },

  {
    id:5,
    img:  Img5,
    title: "Burgirrrrrr",
    rating: 4.4,

    aosDelay: "300",
  },
  {
    id:6,
    img:  Img6,
    title: "Paratha",
    rating: 4.4,

    aosDelay: "300",
  },
  {
    id:7,
    img:  Img7,
    title: "Mushroom Salad with honey",
    rating: 4.4,

    aosDelay: "300",
  },
  {
    id:8,
    img:  Img8,
    title: "Noodles",
    rating: 4.4,

    aosDelay: "300",
  },
  {
    id:9,
    img:  Img9,
    title: "Indian Thali",
    rating: 4.4,

    aosDelay: "300",
  },

  {
    id:10,
    img:  Img10,
    title: "baked potato",
    rating: 4.0,

    aosDelay: "300",
  },


];

const Products = ({handleOrderPopup}) => {
  return (
    <div id='menu' className='pt-14 pb-12  sm:min-h-[450px] bg-gray-300 duration-200 relative z-40'>
      <div className='container'>
        {/* --heqader section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm '>Top Selling food for You</p>
          <h1 data-aos="fade-up"
           className='text-3xl font-bold '>Menu</h1>
          <p data-aos="fade-up" className='text-xs text-gray-800 '>Juicy burgers with melted cheese are perfect for summer cookouts..</p>
        </div>
        {/* body */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-15 pb-4'>
            {
              ProductsData.map((data) => (
                <div
                data-aos="fade-up"
                data-aos-delay= {data.aosDelay} 
                key={data.id}
                className='space-y-3'
                >
                  <img src={data.img} alt="" 
                  className='h-[220px] w-[150px] object-cover rounded-md'
                  />
                  <div>
                    <h3 className='font-semibold mt-2 mb-1'>{data.title}</h3>
                    <p className='text-sm text-gray-700'>{data.author}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-yellow-500' />
                    <span>{data.rating}</span>
                  </div>
                  <div>
                  <button   onClick={() => handleOrderPopup()}
                  className='bg-white px-4 py-1 mb-2 hover:scake-105 duration-300 text-black rounded-full group-hover:bg-white group-hover:text-primary'>Order now</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Products