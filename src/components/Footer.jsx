
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"; // Added FaTiktok
import logo from '../assets/Logo.png'

const Footer = () => {
  const informationData = ["Privacy Policy", "FAQ's", "User Guide", "Terms & Conditions", "Disclaimers", "Refund Policy"]

  return (
    <div className='bg-black pt-10 pb-6'>
      
      <div className='w-full px-4 mx-auto flex flex-col md:flex-row justify-between gap-8 max-w-[1200px]'>

        <div className='md:w-[30%]'>
          <img src={logo} alt="" className='w-[150px] mb-4'/>
          
          <p className='text-gray-400 text-sm leading-relaxed'>
            <span className='text-red-600 font-bold'>Asaan Rishta</span> 
            {` is a leading Matrimonial & Vendors service provider for Pakistanis worldwide, with the core objective to solve the problem of finding a match, by connecting people directly in a most secure, economical and convenient manner.`}
          </p>
        </div>

        <div className='md:w-[20%]'>
          <h3 className='text-red-600 underline font-semibold text-lg mb-4'>
            Information
          </h3>
          <ul className='space-y-2 text-gray-400 text-sm pl-4 list-disc marker:text-red-600'>
            {informationData.map((item) => (
              <li key={item}>
                <a href="#" className='hover:text-red-500 transition-all duration-300'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='md:w-[20%]'>
          <h3 className='text-red-600 underline font-semibold text-lg mb-4'>
            Follow Us
          </h3>

          <div className='flex gap-2'>
            
            <a href="#" className='group block'>
               <div className='bg-red-600 w-9 h-9 flex items-center justify-center rounded-sm group-hover:bg-red-700 transition'>
                 <FaFacebookF className='text-white text-sm' />
               </div>
            </a>

            <a href="#" className='group block'>
               <div className='bg-red-600 w-9 h-9 flex items-center justify-center rounded-sm group-hover:bg-red-700 transition'>
                 <FaInstagram className='text-white text-sm' />
               </div>
            </a>

             <a href="#" className='group block'>
               <div className='bg-red-600 w-9 h-9 flex items-center justify-center rounded-sm group-hover:bg-red-700 transition'>
                 <FaYoutube className='text-white text-sm' />
               </div>
            </a>

            <a href="#" className='group block'>
               <div className='bg-red-600 w-9 h-9 flex items-center justify-center rounded-sm group-hover:bg-red-700 transition'>
                 <FaTiktok className='text-white text-xl' />
               </div>
            </a>
          </div>
        </div>

        <div className='md:w-[20%]'>
          <h3 className='text-red-600 underline font-semibold text-lg mb-4'>
            Contact Us
          </h3>

          <ul className='space-y-2 text-gray-400 text-sm pl-4 list-disc marker:text-red-600'>
            <li>+92-306-4727345</li>
            <li>+92-309-4014024</li>
            <li>+92-42-35462537</li>
            <li>info@asaanrishta.com</li>
            <li>201-D, Rehmanpura, Ichra, Lahore</li>
          </ul>
        </div>

      </div>

      <div className='border-t border-gray-700 mt-10 pt-6 text-center'>
        <p className='text-gray-500 text-xs'>
          Copyright © 2026, 
          <span className='text-red-600 mx-1'>asaanrishta.com</span>. 
          All Rights Reserved | Developed by: 
          <span className='text-red-600 ml-1'>OctaLogicx</span>
        </p>
      </div>

    </div>
  )
}

export default Footer
