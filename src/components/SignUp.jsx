import React from 'react'
import Top from './Top'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Icon from '../assets/Icon.png'

const signUp = () => {
  return (
    <div>

      <div className="px-4 sm:px-6 lg:px-55 mt-5">
        <p className="text-gray-600">
          <Link to="/home" className="hover:text-pink-600">Home</Link> / sign up
        </p>
      </div>

      <div className='max-w-[1140px] w-full shadow-md bg-white mt-5 mb-10 mx-auto'>
        <div className='bg-pink-800 text-white text-2xl sm:text-3xl p-5 sm:p-7 text-center font-bold'>
          <h1>Register As</h1>
        </div>

        <div className='flex flex-col md:flex-row gap-5 p-4 sm:p-6'>
          
          <div className='w-full md:w-1/2 shadow-sm hover:shadow-md hover:shadow-pink-300 mb-3 transition-all duration-300'>
            <h2 className='text-gray-600 text-xl sm:text-2xl text-center'>User</h2>
            <img src={Icon} alt="" className='mx-auto mt-4 mb-4 w-20 sm:w-24'/>
            <p className='text-gray-500 text-center mb-4 leading-relaxed p-1 text-sm sm:text-base'>
              You won't have to pay match makers anymore! we have got hundred of profiles waiting for you for free  
              <span className='text-gray-700'> Yes you heard it right it's Free! </span>.
              So register now to find best possible proposals from every singlr race , ethinicity , caste and community
            </p>
            <Link
              to="/forms"
              className="bg-pink-700 text-white font-bold py-2 px-4 mx-auto block mb-4 text-center w-32"
            >
              Register
            </Link>
          </div>

          <div className='w-full md:w-1/2 shadow-sm hover:shadow-md hover:shadow-pink-300 mb-3 transition-all duration-300'>
            <h2 className='text-gray-600 text-xl sm:text-2xl text-center'>Vendor</h2>
            <img src={Icon} alt="" className='mx-auto mt-4 mb-4 w-20 sm:w-24'/>
            <p className='text-gray-500 text-center mb-4 leading-relaxed p-1 text-sm sm:text-base'>
              You think you are best in your services and want to increase your sales. Reaching more people help you increase your sales. 
              <span className='text-gray-700'>Asaan Rishta </span> will help you grow your business.Register now and groom your business.
            </p>
            <Link
              to="/forms"
              className="bg-pink-700 text-white font-bold py-2 px-4 mx-auto block mb-4 text-center w-32"
            >
              Register
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default signUp