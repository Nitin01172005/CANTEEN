import React from 'react'
import Img1 from '../assets/HALL.jpeg';
import Img2 from '../assets/Röe_gård_café_2.jpg';
import Aos from 'aos';
import Img4 from '../assets/pexels-igor-starkov-233202-1307698.jpg';


const About = () => {
  return (
    <div className='flex h-14 bg-gradient-to-r from-violet-200 to-gray-700  justify-center items-center min-h-screen'>
      <div className='container flex flex-col items-center text-center mt-5'>

         <h1 className='text-5xl font-bold' 
                     data-aos="zoom-out"
                     data-aos-duration="500"
                     data-aos-once="false">About Our Canteen</h1> <br /><br /> 
         <div className='grid grid-cols-3 gap-[40px]  hover:scale-110 duration-200'>
       
            <img src={Img1} 
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-once="false"
               alt="" className='h-[320px] w-[290px] rounded-2xl object-cover border-none shadow-2xl hover:scale-150 duration-200' />
            <img src={Img2} 
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-once="false"
               alt="" className='h-[320px] w-[290px] object-cover border-none shadow-2xl hover:scale-150 duration-200 rounded-2xl' />
            <img src={Img4} 
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-once="false"
               alt="" className='h-[320px] w-[290px] object-cover border-none shadow-2xl hover:scale-150 duration-200 rounded-2xl' />


         </div><br /><br />
      
      <p className='text-gray-900 transitio-all duration-400 text-xl'data-aos="fade-up" >
        Welcome to our canteen! We offer a variety of delicious and healthy meals to keep you energized throughin the day. Our menu includes a range of options to cater to different tastes and dietary requirements. We are committed to providing high-quality food and excellent service to all our customers. Come and enjoy a meal with us!</p> <br /><br /><br />
      </div>
     
    </div>
  )
}

export default About
