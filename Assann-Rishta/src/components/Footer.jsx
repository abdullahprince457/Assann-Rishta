import React from 'react'
import logo from '../assets/logo.PNG'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#212529] pt-10 px-6'>

      <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-6'>

        <div className='max-w-[300px]'>
          <img src={logo} alt="" className='w-[150px] pb-3'/>

          <p className='whitespace-pre-line text-gray-400'>
            <a href="#" className='text-pink-800 hover:underline transition-all duration-300'>
              Asaan Rishta
            </a>
{` is a leading Matrimonial & 
Vendors service provider for Pakistanis 
worldwide, with the core objective to 
solve the problem of finding a match, by 
connecting people directly in a most 
secure, economical and convenient 
manner.`}
          </p>
        </div>

        <div>
          <h1 className='text-pink-800 underline font-semibold text-2xl mb-3'>
            Information
          </h1>

          <ul className='list-disc marker:text-pink-800 space-y-2'>
            <li><a href="#" className='text-gray-400 hover:underline'>Privacy Policy</a></li>
            <li><a href="#" className='text-gray-400 hover:underline'>FAQ's</a></li>
            <li><a href="#" className='text-gray-400 hover:underline'>User Guide</a></li>
            <li><a href="#" className='text-gray-400 hover:underline'>Terms & Conditions</a></li>
            <li><a href="#" className='text-gray-400 hover:underline'>Disclaimers</a></li>
            <li><a href="#" className='text-gray-400 hover:underline'>Refund Policy</a></li>
          </ul>
        </div>

        <div>
          <h1 className='text-pink-800 underline font-semibold text-2xl mb-3'>
            Follow Us
          </h1>

          <div className='flex gap-4 text-pink-800 text-xl'>
            <FaFacebookF className='cursor-pointer hover:scale-110 transition' />
            <FaInstagram className='cursor-pointer hover:scale-110 transition' />
            <FaTwitter className='cursor-pointer hover:scale-110 transition' />
            <FaYoutube className='cursor-pointer hover:scale-110 transition' />
          </div>
        </div>

        <div>
          <h1 className='text-pink-800 underline font-semibold text-2xl mb-3'>
            Contact Us
          </h1>

          <ul className='list-disc marker:text-pink-800 space-y-2 text-gray-400'>
            <li>+92-306-4737425</li>
            <li>+92-300-1234567</li>
            <li>+92-301-9876543</li>
            <li>info@asaanrishta.com</li>
            <li>201-D,Rehmanpura,Ichra,Lahore</li>
          </ul>
        </div>

      </div>

      <div className='bg-[#2a2e33] text-center text-gray-400 py-4 mt-6'>
        Copyright © 2026, asaanrishta.com. All Rights Reserved | Developed by: OctaLogicx
      </div>

    </div>
  )
}

export default Footer