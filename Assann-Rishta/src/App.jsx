import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Top from './components/Top'
import Navbar from './components/Navbar'

const Forms = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    maritalStatus: '',
    religion: '',
    caste: '',
    education: '',
    occupation: '',
    country: '',
    state: '',
    city: '',
    height: '',
    aboutYourself: '',
    aboutPartner: '',
    terms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const validateForm = () => {
    const requiredFields = [
      'firstName','lastName','gender','email','password','confirmPassword',
      'birthday','maritalStatus','religion','caste','education','occupation',
      'country','state','city','height','aboutYourself','aboutPartner'
    ]

    for (let field of requiredFields) {
      if (!form[field]) {
        toast.error(`${field} is required`)
        return false
      }
    }

    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match')
      return false
    }

    if (!form.terms) {
      toast.error('Please accept terms and conditions')
      return false
    }

    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    console.log(form)
    toast.success('Registration submitted successfully!')
  }

  const inputStyle = `peer w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-gray-800 
  placeholder-gray-400 focus:border-pink-600 focus:outline-none 
  transition-all duration-500 ease-in-out hover:border-pink-400`

  const spanStyle = `absolute bottom-0 left-1/2 h-0.5 w-0 bg-pink-600 
  transition-all duration-500 ease-out peer-focus:left-0 peer-focus:w-full`

  return (
    <div>
      <Top />
      <Navbar />

      <Toaster position="top-center" />

      <div className="max-w-3xl mx-auto my-10 px-4">
        <div className="overflow-hidden shadow-2xl bg-white">

          <div className="bg-pink-800 py-8 px-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Asaan Rishta
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">

            <div className="grid sm:grid-cols-2 gap-6">
              {['firstName','lastName'].map((field) => (
                <div key={field} className="relative">
                  <input name={field} placeholder={field === 'firstName' ? 'First Name' : 'Last Name'} value={form[field]} onChange={handleChange} className={inputStyle}/>
                  <span className={spanStyle}/>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative">
                <select name="gender" value={form.gender} onChange={handleChange} className={inputStyle}>
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <span className={spanStyle}/>
              </div>
              <div className="relative">
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className={inputStyle}/>
                <span className={spanStyle}/>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative">
                <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className={inputStyle}/>
                <span className={spanStyle}/>
              </div>
              <div className="relative">
                <input name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className={inputStyle}/>
                <span className={spanStyle}/>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative">
                <input name="birthday" type="date" value={form.birthday} onChange={handleChange} className={inputStyle}/>
                <span className={spanStyle}/>
              </div>
              <div className="relative">
                <select name="maritalStatus" value={form.maritalStatus} onChange={handleChange} className={inputStyle}>
                  <option value="">Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
                <span className={spanStyle}/>
              </div>
            </div>

            {[
              ['religion','caste'],
              ['education','occupation'],
              ['country','state'],
              ['city','height']
            ].map((pair, i) => (
              <div key={i} className="grid sm:grid-cols-2 gap-6">
                {pair.map((field) => (
                  <div key={field} className="relative">
                    <input
                      name={field}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={form[field]}
                      onChange={handleChange}
                      className={inputStyle}
                    />
                    <span className={spanStyle}/>
                  </div>
                ))}
              </div>
            ))}

            <div className="relative">
              <textarea name="aboutYourself" placeholder="About Yourself" onChange={handleChange} className={inputStyle}/>
              <span className={spanStyle}/>
            </div>

            <div className="relative">
              <textarea name="aboutPartner" placeholder="About Your Partner" onChange={handleChange} className={inputStyle}/>
              <span className={spanStyle}/>
            </div>

            <label className="flex items-center gap-2 justify-center">
              <input type="checkbox" name="terms" onChange={handleChange}/>
              I accept the terms and conditions.
            </label>

            <div className="text-center">
              <button className="bg-pink-800 text-white px-12 py-3 flex items-center gap-2 mx-auto">
                <FaCheckCircle />
                Register Now
              </button>
            </div>

            <p className="text-center text-sm">
              Already have an account? 
              <span 
                onClick={() => toast('Redirecting to Sign In...')}
                className="text-pink-700 cursor-pointer ml-1"
              >
                Sign in here
              </span>
            </p>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Forms