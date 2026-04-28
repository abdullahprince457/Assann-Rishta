import React from 'react'
import sec_Img from '../assets/sec_Img.jpeg'

const Image = () => {
  return (
    <div>
      <img
        src={sec_Img}
        alt=""
        className="w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[700px] object-cover"
      />
    </div>
  )
}

export default Image