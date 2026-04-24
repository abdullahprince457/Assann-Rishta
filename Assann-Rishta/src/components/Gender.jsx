import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import Groom_dress from '../assets/Groom_dress.jpeg'
import Bride_dress from '../assets/Bride_dress.jpeg'

const Gender = () => {
  return (
    <div>
      <Title title="Find Match Easily, Spend Life Happily" title2="Find Spouse For Your Life With AsaanRishta!!" desc="We are corporate matrimonial and Events Management service Provider, We help you to find best Rishta and plan your day the way you want!" />
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mx-auto mt-10">
           <div className="flex flex-col items-center">
                <Link to="/login">
                <img src={Bride_dress} alt="" className="w-40 sm:w-56" />
                </Link>
                <Link to="/login" className="font-bold text-gray-800 text-xl"> Bride </Link>
           </div>
           <div className="flex flex-col items-center">
                <Link to="/login">
                <img src={Groom_dress} alt="" className="w-40 sm:w-56" />
                </Link>
                <Link to="/login" className="font-bold text-gray-800 text-xl"> Groom </Link>
           </div>
      </div>
 </div>
  )
}

export default Gender