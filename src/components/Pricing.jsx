import React from 'react'
import Top from './Top'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Pricing = () => {
  return (
    <div>
      <Top />
      <Navbar />

      <div className="px-6 lg:px-50 mt-4">
        <p className="text-sm text-gray-600">
          <Link to="/home" className="hover:text-pink-600">Home</Link> / Pricing
        </p>
      </div>

      <div>
        <h1 className='text-4xl font-bold text-center mt-10 mb-10'>
          Find Your Perfect Match with Our Connect Packages
        </h1>

        <div>
          <p className='whitespace-pre-line text-center mb-10'>{`Unlock meaningful connections with our flexible and affordable packages. Whether you're just starting or actively searching, our Connect Packages give you 
           the power to express interest and communicate with potential matches.`}</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-[20px] px-4'>

        <div className='w-full max-w-[440px] shadow-lg bg-white p-6 rounded-lg mb-6'>
          <h1 className='text-center text-pink-800 text-3xl font-bold mb-4'>
            Silver
          </h1>

          <p className='text-center'>
            An affordable and effective way to begin your search for the right partner. This package gives you exclusive access to chat with three premium profiles, carefully selected to match your preferences. It's the perfect first step toward finding your ideal match—simple, focused, and commitment-free.
          </p>

          <p className='mt-4 text-gray-800 text-lg font-semibold text-center'>
            No of Profiles : <span className='text-gray-400'>3</span>
          </p>

          <p className='mt-4 text-gray-800 text-lg font-semibold text-center'>
            Price : <span className='text-gray-400'>RS 2,000</span>
          </p>

          <div className='flex items-center justify-center mt-8'>
            <button className="bg-pink-800 text-white font-bold py-2 px-6 rounded">
              Button
            </button>
          </div>
        </div>

        <div className='w-full max-w-[440px] shadow-lg bg-white p-6 rounded-lg mb-6'>
          <h1 className='text-center text-pink-800 text-3xl font-bold mb-4'>
            Gold
          </h1>

          <p className='text-center'>
            Take your matchmaking journey to the next level with our Gold Package. Enjoy chat access to eight carefully matched premium profiles, giving you more opportunities to connect and find the right partner. With more options and higher compatibility, this package is designed to maximize your chances of a meaningful connection.
          </p>

          <p className='mt-4 text-gray-800 text-lg font-semibold text-center'>
            No of Profiles : <span className='text-gray-400'>8</span>
          </p>

          <p className='mt-4 text-gray-800 text-lg font-semibold text-center'>
            Price : <span className='text-gray-400'>RS 3,500</span>
          </p>

          <div className='flex items-center justify-center mt-8'>
            <button className="bg-pink-800 text-white font-bold py-2 px-6 rounded">
              Button
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Pricing