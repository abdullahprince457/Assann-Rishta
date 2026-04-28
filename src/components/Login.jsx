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
    <div className="min-h-screen flex flex-col">

      <Top />
      <Navbar />

      <div className="px-6 lg:px-50 mt-4">
        <p className="text-sm text-gray-600">
          <Link to="/home" className="hover:text-pink-600">Home</Link> / Login
        </p>
      </div>

      <div className="flex justify-center mt-10 mb-10 px-4 flex-1">

        <div className="w-full max-w-sm bg-white shadow-lg">

          <div className="bg-red-600 text-white text-center py-4">
            <h1 className="text-2xl font-semibold">Login to your account</h1>
          </div>

          <div className="p-6 flex flex-col gap-6">

            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched({ ...touched, email: true })}
                className="peer w-full border-b border-gray-300 focus:border-pink-500 outline-none py-2 bg-transparent transition-all"
              />

              <label className={`
                absolute left-0 transition-all duration-200 text-gray-500
                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-pink-500
                ${email ? '-top-3 text-xs text-pink-500' : 'top-2 text-sm'}
              `}>
                Email
              </label>

              <div className="h-[2px] w-0 bg-pink-500 transition-all duration-300 peer-focus:w-full"></div>

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
                className="peer w-full border-b border-gray-300 focus:border-pink-500 outline-none py-2 bg-transparent transition-all"
              />

              <label className={`
                absolute left-0 transition-all duration-200 text-gray-500
                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-pink-500
                ${password ? '-top-3 text-xs text-pink-500' : 'top-2 text-sm'}
              `}>
                Password
              </label>

              <div className="h-[2px] w-0 bg-pink-500 transition-all duration-300 peer-focus:w-full"></div>

              {isPasswordError && (
                <p className="text-red-500 text-xs mt-1">Password is required</p>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4" />
              <span>Remember me</span>
            </div>

            <button
              onClick={handleLogin}
              className="bg-pink-400 hover:bg-pink-500 text-white py-2 transition w-full"
            >
              SIGN IN
            </button>

            <p className="text-center text-red-500 text-sm cursor-pointer hover:underline">
              Forgot password?
            </p>

            <p className="text-center text-sm flex flex-col">
              Don’t have an account?{' '}
              <Link to="/SignUp" className="text-red-500 hover:underline">
                Click here to create one
              </Link>
            </p>

          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Login