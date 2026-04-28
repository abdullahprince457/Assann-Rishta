import React from 'react'
import { Link } from "react-router-dom"
import Top from './Top'
import Navbar from './Navbar'
import Footer from './Footer'

import venue from '../assets/venue.jpg'
import photographer from '../assets/photographer.jpg'
import caterers from '../assets/caterers.jpg'
import car from '../assets/car.png'
import decoration from '../assets/decoration.jpg'
import event from '../assets/event.jpg'
import saloon from '../assets/saloon.jpg'
import cake from '../assets/cake.jpg'
import invitations from '../assets/invitations.jpg'

const vendorCategories = [
  { name: "Venue", image: venue, link: "/vendors/venue" },
  { name: "Photographer", image: photographer, link: "/vendors/photographer" },
  { name: "Caterers", image: caterers, link: "/vendors/caterers" },
  { name: "Car Rentals", image: car, link: "/vendors/car-rentals" },
  { name: "Decorators", image: decoration, link: "/vendors/decorators" },
  { name: "Event Managers", image: event, link: "/vendors/event-managers" },
  { name: "Salons", image: saloon, link: "/vendors/salons" },
  { name: "Cakes", image: cake, link: "/vendors/cakes" },
  { name: "Invitations", image: invitations, link: "/vendors/invitations" },
]

const Vendors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Top />
      <Navbar />

      <div className="max-w-7xl mx-auto">
        
        <div className="px-6 lg:px-16 pt-6 pb-2">
          <p className="text-sm text-gray-500">
            <Link to="/home" className="hover:text-pink-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Vendors</span>
          </p>
        </div>

        <div className="px-6 lg:px-16 pt-4 pb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Vendors</h1>
        </div>

        <div className="px-6 lg:px-16 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

            {vendorCategories.map((vendor) => (
              <Link
                key={vendor.name}
                to={vendor.link}
                className="block w-[380px] h-[336px] bg-white shadow-md  overflow-hidden 
                           hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
              >

                <div className="w-full h-[280px] overflow-hidden cursor-pointer">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="h-[56px] bg-gray-100 flex items-center justify-center">
                  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                    {vendor.name}
                  </h2>
                </div>

              </Link>
            ))}

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Vendors