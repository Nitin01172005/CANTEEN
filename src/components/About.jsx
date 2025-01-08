import React from 'react'
import Img1 from '../assets/HALL.jpeg';
import Img2 from '../assets/cafe.jpg';
import Aos from 'aos';
import Img4 from '../assets/pexels-igor-starkov-233202-1307698.jpg';


const About = () => {
  return (
    <div className='flex h-14 bg-gradient-to-r from-violet-200 to-gray-700 justify-center items-center min-h-screen'>
      <div className='container flex flex-col items-center text-center mt-5' id='about'>

         <h1 className='text-5xl font-bold' 
                     data-aos="zoom-out"
                     >About Our Canteen</h1> <br /><br /> 
         <div className='grid grid-cols-3 gap-[40px] duration-200'>
       
            <div className='transition-all hover:scale-110 duration-300'>
              <img src={Img1} 
                data-aos="zoom-in"             
                alt="" className='h-[320px] transition-transform transform w-[290px] rounded-2xl object-cover border-none shadow-2xl duration-200 hover:scale-110'  />
            </div>
            

            <div className='transition-all hover:scale-110 duration-300'>
              <img src={Img2} 
                data-aos="zoom-in"             
                alt="" className='h-[320px] transition-transform transform w-[290px] rounded-2xl object-cover border-none shadow-2xl duration-200 hover:scale-110'  />
            </div>

            <div className='transition-all hover:scale-110 duration-300'>
              <img src={Img4} 
                data-aos="zoom-in"             
                alt="" className='h-[320px] transition-transform transform w-[290px] rounded-2xl object-cover border-none shadow-2xl duration-200 hover:scale-110'  />
            </div>


         </div><br /><br />
      
      <p className='text-gray-900 transition-all duration-400 text-xl' data-aos="fade-up" >
        Welcome to our canteen! We offer a variety of delicious and healthy meals to keep you energized throughout the day. Our menu includes a range of options to cater to different tastes and dietary requirements. We are committed to providing high-quality food and excellent service to all our customers. Come and enjoy a meal with us!</p> <br /><br /><br />
      </div>
     
    </div>
  )
}

export default About
