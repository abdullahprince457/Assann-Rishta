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
        <div className=" lg:px-30 mt-4">
        <p className="text-md text-gray-600">
          <Link to="/home" className="hover:text-pink-600">Home</Link> / ContactUs
        </p>
      </div>
        <div className='pl-35 pt-15 flex justify-between'>
            <div className=''>
            <h1 className='text-[#e72d65] text-3xl font-bold'>Get In Touch</h1>
            <p className=' pt-2'>We'll be glad to hear from you and our team is looking forward to help you in any way possible.</p>
            
            <div className='mt-6 w-[700px] h-[460px]'>
              <iframe
                    src="https://www.google.com/maps?q=Rehmanpura%20Ichra%20Lahore&output=embed"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
            </div>
            </div>
            <div className='mr-64 pr-10 '>
                <h1 className='text-[#e72d65] font-bold text-2xl '>Office Location</h1>
                <p >201-D</p>
                <p>Rehmanpura, Ichra, Lahore</p>
                <hr className='w-31 mt-2' />
                <h5 className='text-[#e72d65] mt-2'>EMAIL</h5>
                <p className='mt-2'>For General Contact</p>
                <a href="#" className='mt-4 text-blue-600 hover:underline'>info@assanrishta.com</a>
                <p className='mt-5'>For Complaint/Reports</p><br />
                <a href="#" className='text-blue-600 hover:underline'>support@asaanrishta.com</a><br />
                <hr className='w-31 mt-2' /><br />
                <h5 className='text-[#e72d65] mt-2'>Phone</h5>
                <p className='mt-2'> +92-306-4727345</p>
                <p> +92-309-4014024</p>
                <hr className='w-31 mt-2' /><br />
                <h4 className='text-[#e72d65] mt-2'>Customer Service Number</h4>
                <p>+92-42-35462537</p>
                <hr className='w-31 mt-2' />
                <h4 className='text-[#e72d65] mt-2'>Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p>Sunday Closed</p>
                <hr className='w-31 mt-2 mb-20' />
            </div>
        </div>
<Footer/>
    </div>
  )
}

export default ContactUs