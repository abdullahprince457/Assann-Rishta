import React from 'react'
import Top from './Top'
import Navbar from './Navbar'
import { Link } from "react-router-dom"
const ContactUs = () => {
  return (
    <div>
        <Top/>
        <Navbar/>
        <div className="px-6 lg:px-50 mt-4">
        <p className="text-sm text-gray-600">
          <Link to="/home" className="hover:text-pink-600">Home</Link> / ContactUs
        </p>
      </div>
        <div className='pl-35 pt-20'>
            <h1 className='text-[#e72d65] text-3xl font-bold'>Get In Touch</h1>
            <p className=' pt-2'>We'll be glad to hear from you and our team is looking forward to help you in any way possible.</p>
            <div className='bg-[#e72d65] mr-130  p-30 py-60'>
            </div>
            <div className='flex justify-end relative top-0 right-0'>
                <h1 className='text-[#e72d65]'>Office Location</h1>
            </div>
        </div>

    </div>
  )
}

export default ContactUs