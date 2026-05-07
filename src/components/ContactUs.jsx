import React from 'react'
import Top from './Top'
import Navbar from './Navbar'
import { Link } from "react-router-dom"
import Footer from './Footer'

const ContactUs = () => {
  return (
    <div>
      <Top/>
      <Navbar/>

      <div className="lg:px-30 px-5 mt-3">
        <p className="text-md text-gray-600">
          <Link to="/home" className="hover:text-pink-600">
            Home
          </Link> / ContactUs
        </p>
      </div>

      <div className='lg:pl-35 px-5 pt-10 lg:pt-15 flex flex-col lg:flex-row lg:justify-between gap-8 mb-5'>

        <div className='w-full'>
          <h1 className='text-[#e72d65] text-3xl font-bold'>
            Get In Touch
          </h1>

          <p className='pt-2'>
            We'll be glad to hear from you and our team is looking forward to help you in any way possible.
          </p>

          <div className='mt-6 w-full lg:w-[700px] h-[300px] sm:h-[400px] lg:h-[460px]'>
            <iframe
              src="https://www.google.com/maps?q=Rehmanpura%20Ichra%20Lahore&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className='lg:mr-64 lg:pr-10 w-full lg:w-auto leading-7'>

          <h1 className='text-[#e72d65] font-bold text-2xl'>
            Office Location
          </h1>

          <p>201-D</p>

          <p className='mb-4'>
            Rehmanpura, Ichra, Lahore
          </p>

          <h5 className='text-[#e72d65] font-semibold'>
            EMAIL
          </h5>

          <p>For General Contact</p>

          <a href="#" className='text-blue-600 hover:underline'>
            info@asaanrishta.com
          </a>

          <p className='mt-4'>
            For Complaint/Reorts
          </p>

          <a href="#" className='text-blue-600 hover:underline'>
            support@asaanrishta.com
          </a>

          <h5 className='text-[#e72d65] font-semibold mt-5'>
            PHONE
          </h5>

          <p>+92-306-4727345</p>

          <p className='mb-4'>
            +92-309-4014024
          </p>

          <h4 className='text-[#e72d65] font-semibold'>
            CUSTOMER SERVICE NUMBER
          </h4>

          <p className='mb-4'>
            +92-42-35462537
          </p>

          <h4 className='text-[#e72d65] font-semibold'>
            WORKING HOURS
          </h4>

          <p>Mon - Sat: 9:00 AM - 6:00 PM</p>

          <p>Sun: Office Closed</p>

        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default ContactUs