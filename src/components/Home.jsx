import 'aos/dist/aos.css';
/* eslint-disable react/jsx-key */
import React from 'react'
import Image1 from '../assets/delicious-pizza-with-emojis.png';
import Image2 from '../assets/delicious-3d-food-illustrated.png';
import Image3 from '../assets/rb_10377.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const  ImageList = [
 { id: 1,
  img: Image1,
  title: "Upto 10% off on all on Monday on Pizza",
  Description: "Extensive listings of various food items such as pizza, Coffe, deserts etc.",},

  { id: 2,
    img: Image2,
    title: "Upto 20% off on all on Monthy Subscription",
    Description: "Amazing food at affordable price and quick availability.",},

    { id: 3,
      img: Image3,
      title: "Upto 35% off on all food for Yearly Members",
      Description: " Yearly members can take the benefit of delicious delicacies",}
]



const Hero = ({handleOrderPopup}) => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed:600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div id='home' className='relative overflow-hidden min-h-[750px] sm:min-h-[850px] bg-gradient-to-r from-violet-200 to-gray-500 flex justify-center items-center duration-200'>
      {/* background pattern */}
      

  {/* hero[section] */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((data) => (
                 <div>
                 <div className='grid grid-cols-1 sm:grid-cols-2'>
                   <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 sm:text-left order-2 sm:order-1 relative z-10'>
                     <h1 
                     data-aos="fade-down"
                     data-aos-duration="800"
                     data-aos-once="false"
                     data-aos-delay="1600"
                     className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title} </h1>
                     <p 
                     data-aos="fade-up"
                      data-aos-duration="300"
                      data-aos-delay="100"
                     className='text-md'>{data.Description}</p>
                   
                   <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="1000"
                   >
                     <button   onClick={() => handleOrderPopup()}
                     className='bg-gradient-to-r from-primary to-secondary hover:scale-125 duration-200 text-white y-2 px-4 rounded-full'>Order now</button>
                   </div>
                 </div>
                 <div className='order-2 sm:order-1' >
                   <div className='z-10' 
                   data-aos="zoom-in"
                   data-aos-delay="2200"
                   data-aos-once="true">
                    <img src={data.img} alt="" className='w-[300px] z-10 h-[500px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto lg:scale-125 hover:scale-150 duration-200' />  
                   </div>
                  
                 </div>
               </div>
             </div>
          ))}
   
        </Slider>
        

      </div>
    </div>
  )
}

export default Hero
