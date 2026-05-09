import React from 'react'
import Top from './Top'
import Navbar from './Navbar'
import { Link } from "react-router-dom"
import Footer from './Footer'

const ContactUs = () => {
  return (
    <div className="bg-white">

      <div className="max-w-[1200px] mx-auto px-6 py-6">

        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            <Link to="/home" className="hover:text-[#e72d65] transition">
              Home
            </Link>{" "}
            / ContactUs
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 pb-10">

          {/* Left Side */}
          <div className="w-full lg:w-[65%]">
            <h1 className="text-[#e72d65] text-3xl font-bold">
              Get In Touch
            </h1>

            <p className="pt-3 text-gray-700 leading-relaxed">
              We'll be glad to hear from you and our team is looking forward to help you in any way possible.
            </p>

            <div className="mt-6 w-full h-[300px] sm:h-[400px] lg:h-[460px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Rehmanpura%20Ichra%20Lahore&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                title="Asaan Rishta Location"
              ></iframe>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[30%] leading-7 text-gray-700">
            <h1 className="text-[#e72d65] font-bold text-2xl mb-2">
              Office Location
            </h1>

            <p>201-D</p>
            <p className="mb-4">Rehmanpura, Ichra, Lahore</p>

            <h5 className="text-[#e72d65] font-semibold mt-4">
              EMAIL
            </h5>

            <p>For General Contact</p>
            <a href="#" className="text-blue-600 hover:underline">
              info@asaanrishta.com
            </a>

            <p className="mt-4">For Complaint/Reorts</p>
            <a href="#" className="text-blue-600 hover:underline">
              support@asaanrishta.com
            </a>

            <h5 className="text-[#e72d65] font-semibold mt-5">
              PHONE
            </h5>

            <p>+92-306-4727345</p>
            <p className="mb-4">+92-309-4014024</p>

            <h4 className="text-[#e72d65] font-semibold mt-5">
              CUSTOMER SERVICE NUMBER
            </h4>

            <p className="mb-4">+92-42-35462537</p>

            <h4 className="text-[#e72d65] font-semibold mt-5">
              WORKING HOURS
            </h4>

            <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
            <p>Sun: Office Closed</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ContactUs