import React from 'react'
import { Link } from 'react-router-dom'
import User from '../assets/user.jpeg'
import Vendor from '../assets/Vendor.jpeg'
import Title from './Title'

const Working = () => {
  return (
    <div className='bg-[#FBFAFE] py-10 px-4'>

      <Title
        title="How It Works"
        desc="Providing Special Services for our valued users. We implement your Plan according to Desires."
      />

      <div className='flex flex-col md:flex-row flex-wrap justify-center gap-10 lg:gap-28 pt-11'>

        {/* User */}
        <div className='flex flex-col items-center text-center w-full max-w-[300px] min-h-[420px]'>

          <img src={User} alt="user" className='w-[80px] sm:w-[100px]' />

          <div className='font-bold text-xl sm:text-2xl text-gray-600 pt-4'>
            User
          </div>

          <ul className='list-disc marker:text-pink-800 text-left text-gray-700 mt-4 space-y-2 text-sm sm:text-base'>
            <li>User can register his profile</li>
            <li>User will provide complete information and also partner requirements</li>
            <li>User can find exact match by filtering the profiles</li>
            <li>User can connect directly to users</li>
          </ul>

          <div className='mt-auto w-full flex justify-center'>
            <Link to="/login">
              <button className='bg-pink-700 text-white px-6 py-2 w-[200px] cursor-pointer'>
                Register Now
              </button>
            </Link>
          </div>

        </div>

        {/* Vendor */}
        <div className='flex flex-col items-center text-center w-full max-w-[300px] min-h-[420px]'>

          <img src={Vendor} alt="vendor" className='w-[80px] sm:w-[100px]' />

          <div className='font-bold text-xl sm:text-2xl text-gray-600 pt-4'>
            Vendor
          </div>

          <ul className='list-disc marker:text-pink-800 text-left text-gray-700 mt-4 space-y-2 text-sm sm:text-base'>
            <li>Vendor can create his profile</li>
            <li>Vendor can add his services</li>
            <li>Vendor can add his packages</li>
            <li>Vendor can add albums to show his work</li>
            <li>Vendor can add videos to show his work</li>
          </ul>

          <div className='mt-auto w-full flex justify-center'>
            <Link to="/login">
              <button className='bg-pink-700 text-white px-6 py-2 w-[200px] cursor-pointer'>
                Register Now
              </button>
            </Link>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Working