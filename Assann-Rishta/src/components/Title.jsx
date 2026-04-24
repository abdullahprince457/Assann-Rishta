import React from 'react'

const Title = ({title,title2, desc}) => {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-4 mt-10 px-4' >
        <h1 className=' sm:text5xl text-4xl font-bold text-pink-700'>
            {title}
        </h1>
        <h2 className='text-2xl font-semibold text-gray-700'>
            {title2}
        </h2>
        <p className=' text-center text-gray-700 whitespace-pre-line'>
            {desc}
        </p>
    </div>
  )
}

export default Title