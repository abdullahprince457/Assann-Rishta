import React from 'react'
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className='bg-white'>
            <img
            className='w-20 m-5'
            src={assets.logo} alt="" />        
        <div className='text-black flex justify-end - gap-7'>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="/Rishtay.jsx">Rishtay</a>
            <a href="#">Featured Rishtay</a>
            <a href="Pricing.jsx">Pricing</a>
            <a href="#">Vendors</a>
            <a href="#">Contact Us</a>
        </div>
        <div className=''>
            <img 
            src="hero" alt="" />
        </div>
    </div>
  )
}

export default Navbar;