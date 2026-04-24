import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="bg-[#E72D65] flex flex-col sm:flex-row items-center justify-center gap-4 p-3 sm:p-4 mt-10 text-center sm:text-left">

      <div className="text-white text-xl sm:text-2xl font-semibold">
        story is waiting to happen!
      </div>

      <Link
        to="/login"
        className="bg-transparent text-white font-semibold py-1 px-3 rounded border border-white"
      >
        Register Now
      </Link>

    </div>
  )
}

export default Register