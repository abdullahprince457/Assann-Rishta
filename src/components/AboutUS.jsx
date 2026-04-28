import React from 'react'
import Navbar from './Navbar'
import Top from './Top'
import Footer from './Footer'
import { Link } from 'react-router-dom'
// import {React} from 'react-router-dom'

const AboutUS = () => {
  return (
    <div>
        <Top/>
        <Navbar/>
        <div className="px-6 lg:px-50 mt-4">
        <p className="text-sm text-gray-600">
          <Link to="/home" className="hover:text-pink-600">Home</Link> / About Us
        </p>
        </div>

        <div className='p-25 px-30'>
            <p><span className='text-[#e72d65]'>Assan Rishta </span>
            is a leading Matrimonial & Vendors service provider for Pakistanis worldwide, with the core objective to solve the problem of finding a match, by connecting people directly in a most secure, economical and convenient manner.</p><br />
            <p>Behind <span className='text-[#e72d65]' > AsaanRishta </span>, is a team of talented engineers, designers, matchmakers and many more working in their domain to develop an excellent solution to serve our people around the world.</p><br />
            <p>Our Mission is to bring happiness in the life of our own people through marriage. This is our contribution to add value in the life of our own people, <span className='text-[#e72d65] font-bold'>In Sha Allah.
            </span></p><br />
            <h3 className='text-[#e72d65] text-2xl font-bold'>
                Our Values
            </h3>
            
            <h2 className='text-[#e72d65] pt-2 font-bold'>Honesty</h2> 
            <p className='pt-2'>We believe that, doing an honest business is the only way to achieve a permanent & continuous success. Observing this principle is helping us in a continuous growth every day, moreover we have achieved to this certain point after being strict to our policy vision.</p>
            <h2 className='text-[#e72d65] pt-2 font-bold'>Respect</h2> 
            <p className='pt-2'>At <span className='text-[#e72d65] '>Asaan Rishta</span> everyone enjoys the core culture of respect everyone. We talk and meet with our members all the time and listen to their questions and concern. We core the value of customers, we give the attention and response which our users expect from us.</p>
            <h2 className='text-[#e72d65] pt-2 font-bold'>Excellence</h2> 
            <p className='pt-2'>Whatever to do is must be presented and performed in the best possible way. Our exceptional & very talented team members are always excited to introduce highest quality of work in their domain. Moreover, the best excellence we can show to you is that we find perfect match for you.</p>
            <h2 className='text-[#e72d65] pt-2 font-bold'>Innovation</h2> 
            <p>We strongly believe in a continuous innovation at any instance. <span className='text-[#e72d65]'>AsaanRishta</span> is showing innovation in process of finding a match and believe that soon we will be able to hear that finding a suitable match is not a problem anymore, so for that we have made this platform and running this network.</p>
            <h2 className='text-[#e72d65] pt-2 font-bold'>Providing Right Policy</h2> 
            <p className='pt-2'>We believe that staying transparent and providing right & appropriate details can help our members in making an educated judgment. We help out each customer and make some serious notices regarding our privacy policy.</p>
            <h2 className='text-[#e72d65] pt-2 font-bold'>Free Service</h2> 
            <p className='pt-2'>At Asaan Rishta, everything is absolutely free — from registration to browsing profiles. Users can explore complete profile details, view verified vendors, and apply filters without any charges. A guest mode is also available, allowing visitors to access all profiles and vendors freely. Once registered, users can easily manage and update their profiles anytime. Only chat access is restricted for security — all other features remain 100% free.</p>

            



            
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUS