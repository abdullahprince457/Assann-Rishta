import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

import {
  FaStore,
  FaBirthdayCake,
  FaUtensils,
  FaHotel,
  FaCamera,
  FaUserTie,
  FaCar,
  FaEnvelope
} from "react-icons/fa";

const Event = () => {

  const services = [
    { icon: <FaStore />, title: "Decorations" },
    { icon: <FaBirthdayCake />, title: "Cakes" },
    { icon: <FaUtensils />, title: "Catering" },
    { icon: <FaHotel />, title: "Venue" },
    { icon: <FaCamera />, title: "Photographer" },
    { icon: <FaUserTie />, title: "Event Manager" },
    { icon: <FaCar />, title: "Cars" },
    { icon: <FaEnvelope />, title: "Invitations" },
  ];

  return (
    <div className="mb-[50px]">

      <Title
        title="Plan your Wedding Event"
        title2="Keep It The Way, You Like."
        desc="Providing Special Services for our valued users. We implement your Plan according to Desires. Give us your Plan, We Implement for you."
      />

      {/* Row 1 */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-9 mt-8 px-4">

        {services.slice(0, 4).map((item, index) => (
          <Link
            to="/signup"
            key={index}
            className="bg-white border border-gray-100 rounded-3xl flex flex-col items-center justify-center text-center w-full sm:w-[250px] h-[200px] sm:h-[220px] shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.35)] transition-all duration-300"
          >
            <div className="text-5xl sm:text-6xl text-pink-500">
              {item.icon}
            </div>

            <p className="mt-2 font-semibold text-pink-700">
              {item.title}
            </p>
          </Link>
        ))}

      </div>

      {/* Row 2 */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-9 mt-6 px-4">

        {services.slice(4, 8).map((item, index) => (
          <Link
            to="/signup"
            key={index}
            className="bg-white border border-gray-100 rounded-3xl flex flex-col items-center justify-center text-center w-full sm:w-[250px] h-[200px] sm:h-[220px] shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.35)] transition-all duration-300"
          >
            <div className="text-5xl sm:text-6xl text-pink-500">
              {item.icon}
            </div>

            <p className="mt-2 font-semibold text-pink-700">
              {item.title}
            </p>
          </Link>
        ))}

      </div>

    </div>
  )
}

export default Event