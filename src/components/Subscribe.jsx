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
    className='bg-gray-100 dark:bg-gray-900 text-gray-900'
    style={BannerImg}>
      <div className='container backdrop-blur-sm py-10'>
        <div className='text-center  max-w-[640px] mx-auto'>
          <h1 className='text-3xl font-bold pb-6 text-white'>Get Notified About New Products</h1>
          <div className="flex flex-row gap-10">
            <form action="#">
            <input data-aos="fade-up" type="text" placeholder='Enter Your Email' className='pl-4 py-4 w-[500px] mb-2' />
                      
            <button className='rounded-3xl w-[90px] py-2 hover:scale-125 ml-10 text-gray-900 bg-gray-100'>submit</button>
            </form>
 
          </div>
          </div>
          
      </div>
     
      </div>
      
    </div>
    
  )
}

export default Subscribe
