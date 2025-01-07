import React from 'react'
import FooterLogo from '../assets/bite.png'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {

  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%", 
};

const FooterLinks = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "menu",
    link: "#menu",
  },
  {
    title: "Top rated",
    link: "#TopProducts",
  },
]
const Footer = () => {
  return (
    <div style={BannerImg} data-aos="fade-up" className='text-white pb-10 bg-gray-800'>
      <div className='container'>
        <div className='grid py-8 gap-[240px] grid-cols-1 md:grid-cols-3 sm:my-8'>
          <div data-aos="fade-up">

              <a href="/#" className='flex flex-row font-bold text-2xl gap-2 '><img src={FooterLogo} alt="img" className='max-w-[50px] contain' /> <span className='pt-2'>Bite & Sip</span> </a>

              <p className='py-10'>Enjoy a cozy atmosphere, delicious meals, freshly brewed coffee, and exceptional service at our vibrant, welcoming cafe.</p> 
            
          </div>
         
          <div>
            <div data-aos="zoom-in">
            <h1 className='font-bold text-2xl py-2 pb-4 sm:text-2xl'> Links</h1>
            <ul className='flex flex-col gap-3'>
                {
                  FooterLinks.map((link) => (
                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                      <a href={link.link}>{link.title} </a>
                    </li>
                  ))
                }
              </ul>  
            </div>
          </div>
          <div data-aos="zoom-in">
            <div className='flex flex-col items-left gap-6 py-2 sm:py-4'>
              <div className='flex gap-3'>
                <FaInstagram size={30} />
                <FaFacebook  size={30}/>
                <FaLinkedin  size={30}/>
                </div>
              <div className='flex gap-3 items-center'>
                <FaLocationArrow />
                <span>Ghaziabad, UttarPradesh</span>
              </div>
              <div className='flex gap-3 items-center'>
                <FaMobileAlt />
                <span>+91 123456783</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
