import React, { useState } from 'react'
import Footer from './Footer'
import Top from './Top'
import Navbar from './Navbar'
import { Link } from "react-router-dom"
import vendor from "../assets/Vendor.jpeg"

const F_Rishtay = () => {
  const [showFilter, setShowFixlter] = useState(false)

  return (
    <div>
      {/* <Top />
      <Navbar /> */}

      <div className="px-6 lg:px-50 mt-4">
        <p className="text-sm text-gray-600">
          <Link to="/home" className="hover:text-pink-600">Home</Link> / Rishtay
        </p>
      </div>

      <div className="mt-20 flex flex-col   gap-5 mx-20 p-10">

        <div className="flex gap-2 justify-end">
          <input
            className="rounded-md p-2 border border-[#e72d65]"
            type="text"
            placeholder="Search User By Id"
          />
          <button className="bg-[#e72d65] text-white font-bold px-7 rounded-md">
            Search
          </button>
        </div>

        <button
          className='md:hidden bg-[#e72d65] text-white font-bold px-6 py-2 rounded-md w-fit'
          onClick={() => setShowFilter(!showFilter)}
        >
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>

        <div className={`${showFilter ? "grid" : "hidden"} md:grid text-[#e72d65] grid-cols-1 gap-4 w-full py-10 px-15   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow-[0_3px_5px_rgba(0,0,0,0.08),_-3px_0_5px_rgba(0,0,0,0.08),_3px_0_5px_rgba(0,0,0,0.08)]`}>
          <select className="outline-none border-b-2 w-full py-2"><option>Caste</option></select>
          <select className="outline-none border-b-2 w-full py-2"><option>Age From</option></select>
          <select className="outline-none border-b-2 w-full py-2"><option>Age To</option></select>
          <select className="outline-none border-b-2 w-full py-2"><option>Gender</option></select>
          <select className="outline-none border-b-2 w-full py-2"><option>Country</option></select>
          <select className="outline-none border-b-2 w-full py-2"><option>State</option></select>
          <select className="outline-none border-b-2 w-full py-2"><option>City</option></select>
          <select className="outline-none border-b-2 w-full py-2"><option>Marital Status</option></select>
          <select className="outline-none border-b-2 w-full py-2"><option>Religion</option></select>
          <select className="outline-none border-b-2 w-full py-2"><option>Area</option></select>

          <button className="bg-[#e72d65] text-white font-bold px-10 py-2 rounded-md">
            Apply Filters
          </button>
          <button className="bg-[#e72d65] text-white font-bold px-10 py-2 rounded-md">
            Clear Filters
          </button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

          {/* {Array(6).fill().map((_, i) => (
            <div key={i} className='h-full w-[280px] pb-10 shadow-[0_3px_5px_rgba(0,0,0,0.08),_-3px_0_5px_rgba(0,0,0,0.08),_3px_0_5px_rgba(0,0,0,0.08)] rounded-lg flex flex-col items-center text-center gap-2 mx-auto'>

              <img className='mt-10 w-20 h-20 rounded-full object-cover'
                src={vendor}
                alt=""
              />

              <h1 className='font-bold'>Abdullah Shahzad</h1>
              <h3>Age : 22 , Single</h3>
              <h3>Lahore , Pakistan</h3>
              <h3>Mughal</h3>
              <h3>Software Engineer</h3>

              <button className='bg-[#e72d65] p-2 px-5 rounded font-bold text-white'>
                View Profile
              </button>

            </div> */}
          {/* ))} */}

          

        </div>
        <h1 className='  text-3xl font-bold text-center'>No Profile Found</h1>

      </div>

      <Footer />
    </div>
  )
}

export default F_Rishtay