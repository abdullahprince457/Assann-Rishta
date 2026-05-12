import React from 'react'
import { Link } from "react-router-dom"
import Footer from './Footer'
import Top from './Top'
import Navbar from './Navbar'

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* <Top />
      <Navbar /> */}

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-8 py-6">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            <Link to="/home" className="hover:text-[#e72d65] transition-colors">Home</Link> 
            <span className="mx-2 text-gray-400">/</span> 
            <span className="text-gray-800">Contact Us</span>
          </p>
        </div>

        {/* Main Layout: Left (Map area) + Right (Sidebar) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN */}
          <div className="flex-1 w-full min-w-0">
            <h1 className="text-[#e72d65] text-3xl font-bold">Get In Touch</h1>
            <p className="mt-2 text-gray-700 text-sm">
              We'll be glad to hear from you and our team is looking forward to help you in any way possible.
            </p>

            {/* Map */}
            <div className="mt-6 w-full h-[350px] sm:h-[400px] border border-gray-300 bg-gray-50">
              <iframe
                src="https://www.google.com/maps?q=Rehmanpura%20Ichra%20Lahore&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>

            <a 
              href="https://maps.google.com/?q=Rehmanpura+Ichra+Lahore" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-blue-600 hover:underline"
            >
              View Larger Map
            </a>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-full lg:w-[260px] flex-shrink-0">
            
            {/* Office Location */}
            <div className="mb-5">
              <h2 className="text-[#e72d65] font-bold text-lg">Office Location</h2>
              <p className="text-gray-700 text-sm mt-1">201-D</p>
              <p className="text-gray-700 text-sm">Rehmanpura, Ichra, Lahore</p>
            </div>

            <hr className="border-gray-200 mb-5" />

            {/* Email */}
            <div className="mb-5">
              <h2 className="text-[#e72d65] font-bold text-sm uppercase tracking-wide">Email</h2>
              <p className="text-gray-600 text-xs mt-2">For General Contact</p>
              <a href="mailto:info@assanrishta.com" className="text-blue-600 hover:underline text-sm">
                info@assanrishta.com
              </a>

              <p className="text-gray-600 text-xs mt-3">For Complaint/Reports</p>
              <a href="mailto:support@asaanrishta.com" className="text-blue-600 hover:underline text-sm">
                support@asaanrishta.com
              </a>
            </div>

            <hr className="border-gray-200 mb-5" />

            {/* Phone */}
            <div className="mb-5">
              <h2 className="text-[#e72d65] font-bold text-sm uppercase tracking-wide">Phone</h2>
              <p className="text-gray-700 text-sm mt-1">+92-306-4727345</p>
              <p className="text-gray-700 text-sm">+92-309-4014024</p>
            </div>

            <hr className="border-gray-200 mb-5" />

            {/* Customer Service */}
            <div className="mb-5">
              <h2 className="text-[#e72d65] font-bold text-sm uppercase tracking-wide">Customer Service Number</h2>
              <p className="text-gray-700 text-sm mt-1">+92-42-35462537</p>
            </div>

            <hr className="border-gray-200 mb-5" />

            {/* Working Hours */}
            <div>
              <h2 className="text-[#e72d65] font-bold text-sm uppercase tracking-wide">Working Hours</h2>
              <p className="text-gray-700 text-sm mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-700 text-sm">Sun: Office Closed</p>
            </div>

          </div>
        </div>
      </main>

    </div>
  )
}

export default ContactUs