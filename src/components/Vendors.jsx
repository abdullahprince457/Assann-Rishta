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
    <div className="bg-white">
    

      <div className="max-w-[1200px] mx-auto px-6 py-10">

        <div className="mb-8">
          <p className="text-sm text-gray-500">
            <Link to="/home" className="hover:text-[#e72d65] transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Vendors</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">

          {vendorCategories.map((vendor) => (
            <Link
              key={vendor.name}
              to={vendor.link}
              className="block group bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-full h-[250px] overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="h-[60px] flex items-center justify-center border-t border-gray-100">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-[#e72d65] transition-colors">
                  {vendor.name}
                </h2>
              </div>
            </Link>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Vendors