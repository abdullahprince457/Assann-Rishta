import React from 'react'
import Id_card from '../assets/id_card.jpeg'

const AppPlay = () => {
  return (
    <div className='flex items-center justify-center py-[40px] sm:py-[70px] bg-gray-100 px-4'>

      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-[20px] w-full max-w-6xl'>

        <div className='order-2 lg:order-1 w-full flex justify-center lg:block'>
          <img src={Id_card} alt="app" className='w-full max-w-[600px] h-auto lg:h-[325px]' />
        </div>

        <div className='flex flex-col max-w-[500px] order-1 lg:order-2 text-center lg:text-left'>

          <h1 className='text-xl sm:text-2xl font-bold text-gray-700'>
            Happiness is Just an App Away!
          </h1>

          <h2 className='text-3xl sm:text-5xl font-bold text-pink-500 mt-2 break-words'>
            ASAAN RISHTA App!
          </h2>

          <p className='text-gray-600 text-lg sm:text-2xl mt-3 pb-5'>
            Convenience! Connectivity! Privacy!
          </p>

          <ul className='text-gray-600 list-disc ml-5 mt-3 text-sm sm:text-base text-left'>
            <li>View millions of profiles on-the-go!</li>
            <li>Never miss any communication with instant notification!</li>
            <li>Quick and effective search to find your match faster!</li>
          </ul>

          <div className='flex justify-center lg:justify-start'>
            <button className='flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg w-fit mt-4'>
              <span className='w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent'></span>

              <div className='text-left'>
                <p className='text-xs'>GET IT ON</p>
                <p className='text-sm font-semibold'>Google Play</p>
              </div>
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AppPlay