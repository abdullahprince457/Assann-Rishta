import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { HiOutlineMenu, HiX } from "react-icons/hi"

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass =
    'text-gray-700 hover:text-pink-400 transition ease-in-out hover:underline hover:underline-offset-4 duration-300'

  return (
    <div className={`sticky top-0 z-50 flex justify-between items-center shadow-md bg-white transition-all duration-300 ${scrolled ? 'py-1 px-3' : 'p-4'}`}>
      
      <div>
        <img src={logo} alt="logo" className="w-[150px]" />
      </div>

      <div className="hidden lg:flex gap-8">
        <Link to="/home" className={linkClass}>Home</Link>
        <Link to="/AboutUS" className={linkClass}>AboutUs</Link>
        <Link to="/rishtay" className={linkClass}>Rishtay</Link>
        <Link to="/f_rishtay" className={linkClass}>Featured Rishtay</Link>
        <Link to="/pricing" className={linkClass}>Pricing</Link>
        <Link to="/vendors" className={linkClass}>Vendors</Link>
        <Link to="/contactUS" className={linkClass}>Contact Us</Link>
      </div>

      <button
        className="text-3xl lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <HiOutlineMenu />
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={`fixed top-0 left-0 h-full w-64 bg-white p-6 transition-transform duration-300 lg:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="flex justify-end mb-8">
          <button onClick={() => setSidebarOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <Link to="/home" onClick={() => setSidebarOpen(false)} className={linkClass}>Home</Link>
          <Link to="/AboutUS" onClick={() => setSidebarOpen(false)} className={linkClass}>About Us</Link>
          <Link to="/rishtay" onClick={() => setSidebarOpen(false)} className={linkClass}>Rishtay</Link>
          <Link to="/featured" onClick={() => setSidebarOpen(false)} className={linkClass}>Featured Rishtay</Link>
          <Link to="/pricing" onClick={() => setSidebarOpen(false)} className={linkClass}>Pricing</Link>
          <Link to="/vendors" onClick={() => setSidebarOpen(false)} className={linkClass}>Vendors</Link>
          <Link to="/contact" onClick={() => setSidebarOpen(false)} className={linkClass}>Contact Us</Link>
        </div>

      </div>

    </div>
  )
}

export default Navbar