import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import Image from '../assets/sec_Img.jpeg'

const Forms = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    maritalStatus: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    alert('Registration submitted successfully!')
  }

  return (
    <div className="max-w-3xl mx-auto my-10 px-4 animate-fade-in-up">
      <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
        
        <div className="bg-pink-800 py-8 px-6 text-center animate-slide-down">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Asaan Rishta
          </h1>
          <p className="text-pink-200 mt-1 text-sm">
            Create your profile &amp; find your perfect match
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-row-1">
            <div className="group relative">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter first name"
                value={form.firstName}
                onChange={handleChange}
                className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-gray-800 placeholder-gray-400
                  focus:border-pink-600 focus:outline-none
                  transition-all duration-500 ease-in-out
                  hover:border-pink-400"
              />
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-pink-600 transition-all duration-500 ease-out peer-focus:left-0 peer-focus:w-full" />
            </div>

            <div className="group relative">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter last name"
                value={form.lastName}
                onChange={handleChange}
                className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-gray-800 placeholder-gray-400
                  focus:border-pink-600 focus:outline-none
                  transition-all duration-500 ease-in-out
                  hover:border-pink-400"
              />
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-pink-600 transition-all duration-500 ease-out peer-focus:left-0 peer-focus:w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-row-2">
            <div className="group relative">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-gray-800
                  focus:border-pink-600 focus:outline-none
                  transition-all duration-500 ease-in-out
                  hover:border-pink-400 cursor-pointer"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-pink-600 transition-all duration-500 ease-out peer-focus:left-0 peer-focus:w-full" />
            </div>

            <div className="group relative">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-gray-800 placeholder-gray-400
                  focus:border-pink-600 focus:outline-none
                  transition-all duration-500 ease-in-out
                  hover:border-pink-400"
              />
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-pink-600 transition-all duration-500 ease-out peer-focus:left-0 peer-focus:w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-row-3">
            <div className="group relative">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
                className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-gray-800 placeholder-gray-400
                  focus:border-pink-600 focus:outline-none
                  transition-all duration-500 ease-in-out
                  hover:border-pink-400"
              />
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-pink-600 transition-all duration-500 ease-out peer-focus:left-0 peer-focus:w-full" />
            </div>

            <div className="group relative">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-gray-800 placeholder-gray-400
                  focus:border-pink-600 focus:outline-none
                  transition-all duration-500 ease-in-out
                  hover:border-pink-400"
              />
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-pink-600 transition-all duration-500 ease-out peer-focus:left-0 peer-focus:w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-row-4">
            <div className="group relative">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                Birthday
              </label>
              <input
                name="birthday"
                type="date"
                value={form.birthday}
                onChange={handleChange}
                className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-gray-800
                  focus:border-pink-600 focus:outline-none
                  transition-all duration-500 ease-in-out
                  hover:border-pink-400"
              />
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-pink-600 transition-all duration-500 ease-out peer-focus:left-0 peer-focus:w-full" />
            </div>

            <div className="group relative">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                Marital Status
              </label>
              <select
                name="maritalStatus"
                value={form.maritalStatus}
                onChange={handleChange}
                className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-gray-800
                  focus:border-pink-600 focus:outline-none
                  transition-all duration-500 ease-in-out
                  hover:border-pink-400 cursor-pointer"
              >
                <option value="">Select Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
                <option value="separated">Separated</option>
              </select>
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-pink-600 transition-all duration-500 ease-out peer-focus:left-0 peer-focus:w-full" />
            </div>
          </div>

          <div className="pt-4 text-center animate-fade-in-row-5">
            <button
              type="submit"
              className="bg-pink-800 text-white font-bold px-12 py-3 rounded-full text-lg
                hover:bg-pink-700 hover:shadow-lg hover:scale-105
                active:scale-95
                transition-all duration-300 ease-in-out flex items-center justify-center gap-2 mx-auto"
            >
              <FaCheckCircle />
              Register Now
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Forms