import React from 'react'

const BannerImg = {
  backgroundColor: "gray-100",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%", 
}

const Subscribe = () => {
  return (
    <div>
    <div
    data-aos="zoom-in"
    className='bg-gray-100 dark:bg-gray-900 text-white'
    style={BannerImg}>
      <div className='container backdrop-blur-sm py-10'>
        <div className='text-center  max-w-[640px] mx-auto'>
          <h1 className='text-3xl font-bold pb-6'>Get Notified About New Products</h1>
          <input data-aos="fade-up" type="text" placeholder='Enter Your Email' className='pl-4 py-4 w-[500px] mb-2' />
        </div>
      </div>
     
      </div>
      
    </div>
    
  )
}

export default Subscribe
