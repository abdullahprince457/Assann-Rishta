import React, { useState } from 'react'
import Top from './Top'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  })

  const navigate = useNavigate()

  const isEmailError = touched.email && email === ''
  const isPasswordError = touched.password && password === ''

  const handleLogin = () => {
    setTouched({ email: true, password: true })
    if (email && password) {
      navigate('/home')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
     

      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-6 w-full mt-5">
        <p className="text-sm text-gray-600">
          <Link to="/home" className="hover:text-[#e72d65] transition">
            Home
          </Link>{" "}
          / Login
        </p>
      </div>

      <div className="flex justify-center items-center flex-1 px-4 mt-8 mb-12">
        <div className="w-full max-w-sm bg-white shadow-lg">

          <div className="bg-[#e72d65] text-white text-center py-5">
            <h1 className="text-2xl font-semibold">Login to your account</h1>
          </div>

          <div className="p-8 flex flex-col gap-6">

            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched({ ...touched, email: true })}
                className="peer w-full border-b border-gray-300 focus:border-[#e72d65] outline-none py-2 bg-transparent transition-all"
              />

              <label className={`
                absolute left-0 transition-all duration-200 text-gray-500
                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#e72d65]
                ${email ? '-top-3 text-xs text-[#e72d65]' : 'top-2 text-sm'}
              `}>
                Email
              </label>

              <div className="h-[2px] w-0 bg-[#e72d65] transition-all duration-300 peer-focus:w-full"></div>

              {isEmailError && (
                <p className="text-red-500 text-xs mt-1">Email is required</p>
              )}
            </div>

            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setTouched({ ...touched, password: true })}
                className="peer w-full border-b border-gray-300 focus:border-[#e72d65] outline-none py-2 bg-transparent transition-all"
              />

              <label className={`
                absolute left-0 transition-all duration-200 text-gray-500
                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#e72d65]
                ${password ? '-top-3 text-xs text-[#e72d65]' : 'top-2 text-sm'}
              `}>
                Password
              </label>

              <div className="h-[2px] w-0 bg-[#e72d65] transition-all duration-300 peer-focus:w-full"></div>

              {isPasswordError && (
                <p className="text-red-500 text-xs mt-1">Password is required</p>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#e72d65]"
              />
              <span>Remember me</span>
            </div>

            <button
              onClick={handleLogin}
              className="bg-[#e72d65] hover:bg-[#c4254f] text-white py-2 font-semibold tracking-wide transition-colors duration-300 w-full"
            >
              SIGN IN
            </button>

            <p className="text-center text-[#e72d65] text-sm cursor-pointer hover:underline">
              Forgot password?
            </p>

            <p className="text-center text-sm text-gray-600 flex flex-col gap-1">
              Don't have an account?{' '}
              <Link to="/SignUp" className="text-[#e72d65] hover:underline font-medium">
                Click here to create one
              </Link>
            </p>

          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Login