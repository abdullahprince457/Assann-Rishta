import React, { useState } from 'react'
import Footer from './Footer'
import Top from './Top'
import Navbar from './Navbar'
import { Link } from "react-router-dom"
import vendor from "../assets/Vendor.jpeg"

// Sample data – real app mein API se aayega
const usersData = [
  { id: 1, name: "Abdullah Shahzad", age: 22, city: "Lahore", occupation: "Software Engineer", caste: "Mughal", status: "Single" },
  { id: 2, name: "Ayesha Khan", age: 24, city: "Islamabad", occupation: "Teacher", caste: "Shiekh", status: "Single" },
  { id: 3, name: "Ali Malik", age: 26, city: "Rawalpindi", occupation: "Doctor", caste: "Malik", status: "Married" },
  { id: 4, name: "Sana Gujjar", age: 23, city: "Faisalabad", occupation: "Designer", caste: "Gujjar", status: "Single" },
  { id: 5, name: "Omar Mughal", age: 25, city: "Lahore", occupation: "Analyst", caste: "Mughal", status: "Single" },
  { id: 6, name: "Noor Malik", age: 27, city: "Karachi", occupation: "Manager", caste: "Malik", status: "Single" },
  { id: 7, name: "Fatima Shiekh", age: 22, city: "Peshawar", occupation: "Content Writer", caste: "Shiekh", status: "Single" },
  { id: 8, name: "Hassan Gujjar", age: 24, city: "Multan", occupation: "Developer", caste: "Gujjar", status: "Single" },
]

const Rishtay = () => {
  const [showFilter, setShowFilter] = useState(false)
  const [Caste, setCaste] = useState('')
  const [searchTerm, setSearchTerm] = useState('') // Search input state
  const [filteredUsers, setFilteredUsers] = useState(usersData) // Show filtered result

  // Search functionality – name ke mutabik filter
  const handleSearch = () => {
    if (!searchTerm) {
      setFilteredUsers(usersData)
      return
    }
    const filtered = usersData.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredUsers(filtered)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-8 py-6">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            <Link to="/home" className="hover:text-[#e72d65] transition-colors font-medium">Home</Link> 
            <span className="mx-2 text-gray-400">/</span> 
            <span className="text-gray-800 font-semibold">Rishtay</span>
          </p>
        </div>

        <div className="flex flex-col gap-6">

          {/* Search Bar with functionality */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <input
              className="rounded-md p-2 border border-[#e72d65] outline-none focus:ring-1 focus:ring-[#e72d65] w-full sm:w-64 bg-white"
              type="text"
              placeholder="Search User By Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button 
              className="bg-[#e72d65] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#c42353] transition-colors w-full sm:w-auto"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
            
          {/* Mobile Filter Toggle */}
          <button
            className='md:hidden bg-[#e72d65] text-white font-semibold p-2.5 rounded-md w-full hover:bg-[#c42353] transition-colors'
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? "Hide Filters" : "Show Filters"}
          </button>

          {/* Filter Form */}
          <div className={`${showFilter ? "grid" : "hidden"} md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full bg-white p-6 rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.05)] border border-gray-100`}>
            
            <select
              value={Caste}
              onChange={(e)=> setCaste(e.target.value)}
              className="outline-none border-b-2 border-gray-200 focus:border-[#e72d65] w-full py-2 text-gray-700 bg-transparent"
            >
              <option value="" disabled>Caste</option>
              <option>Shiekh</option>
              <option>Gujjar</option>
              <option>Malik</option>
              <option>Mughal</option>
            </select>

            <select className="outline-none border-b-2 border-gray-200 focus:border-[#e72d65] w-full py-2 text-gray-700 bg-transparent"><option>Age From</option></select>
            <select className="outline-none border-b-2 border-gray-200 focus:border-[#e72d65] w-full py-2 text-gray-700 bg-transparent"><option>Age To</option></select>
            <select className="outline-none border-b-2 border-gray-200 focus:border-[#e72d65] w-full py-2 text-gray-700 bg-transparent"><option>Gender</option></select>
            <select className="outline-none border-b-2 border-gray-200 focus:border-[#e72d65] w-full py-2 text-gray-700 bg-transparent"><option>Country</option></select>
            <select className="outline-none border-b-2 border-gray-200 focus:border-[#e72d65] w-full py-2 text-gray-700 bg-transparent"><option>State</option></select>
            <select className="outline-none border-b-2 border-gray-200 focus:border-[#e72d65] w-full py-2 text-gray-700 bg-transparent"><option>City</option></select>
            <select className="outline-none border-b-2 border-gray-200 focus:border-[#e72d65] w-full py-2 text-gray-700 bg-transparent"><option>Marital Status</option></select>
            <select className="outline-none border-b-2 border-gray-200 focus:border-[#e72d65] w-full py-2 text-gray-700 bg-transparent"><option>Religion</option></select>

            <button className="bg-[#e72d65] text-white font-bold px-6 py-2 rounded-md hover:bg-[#c42353] transition-colors">
              Apply Filters
            </button>
            <button className="bg-[#e72d65] text-white font-bold px-6 py-2 rounded-md hover:bg-gray-200 transition-colors border border-gray-200">
              Clear Filters
            </button>
          </div>

          {/* Profiles Grid – now shows filtered data */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10'>
            {filteredUsers.map((user) => (
              <div key={user.id} className='h-full w-full bg-white py-8 shadow-[0_3px_10px_rgba(0,0,0,0.05)] rounded-lg flex flex-col items-center text-center gap-2 hover:shadow-xl transition-all duration-300 border border-gray-100'>
                
                <img 
                  className='mt-2 w-24 h-24 rounded-full object-cover border-4 border-[#fce4ec]'
                  src={vendor} 
                  alt={user.name}
                />

                <div className='px-4 flex flex-col gap-1 mt-2'>
                  <h1 className='font-bold text-lg text-gray-800'>{user.name}</h1>
                  <h3 className='text-sm text-gray-500'>Age: {user.age}, {user.status}</h3>
                  <h3 className='text-sm text-gray-500'>{user.city}, Pakistan</h3>
                  <h3 className='text-sm text-gray-500'>{user.caste}</h3>
                  <h3 className='text-sm text-[#e72d65] font-semibold'>{user.occupation}</h3>
                </div>

                <button className='mt-4 bg-[#e72d65] p-2 px-6 rounded-md font-bold text-white hover:bg-[#c42353] transition-colors'>
                  View Profile
                </button>

              </div>
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <p className="text-center text-gray-500 mt-6">No users found with that name.</p>
          )}

        </div>
      </main>
    </div>
  )
}

export default Rishtay