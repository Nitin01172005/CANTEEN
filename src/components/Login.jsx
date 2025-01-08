import React from 'react'
import  { useState } from 'react';


  const Login = () => {
    const [isExistingCustomer, setIsExistingCustomer] = useState(true);

    return (
      <div className='h-screen bg-gradient-to-r from-violet-200 to-gray-700'>
        <div  className='container pt-[300px]'></div>
        <div data-aos="zoom-in" className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg'>
          <h2 data-aos="zoom-out" className='text-2xl font-bold mb-6 text-center'>{isExistingCustomer ? 'Login' : 'Sign Up'}</h2>
          <form>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                Username
              </label>
              <input
                className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500'
                type='text'
                id='username'
                name='username'
                required
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <input
                className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500'
                type='password'
                id='password'
                name='password'
                required
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                {isExistingCustomer ? 'Sign In' : 'Sign Up'}
              </button>
              <a
                className='inline-block align-baseline font-bold text-sm text-violet-500 hover:text-violet-800'
                href='#'
                onClick={() => setIsExistingCustomer(!isExistingCustomer)}
              >
                {isExistingCustomer ? 'Sign Up' : 'Sign In'}
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  };



export default Login
