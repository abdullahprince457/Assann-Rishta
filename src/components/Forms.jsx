import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Top from './Top'
import Navbar from './Navbar'
import Footer from './Footer'



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
    mobilePhone: '',
    aboutYourself: '',
    aboutYourPartner: '',
    acceptTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const validate = () => {
    for (let key in form) {
      if (key === 'acceptTerms') continue
      if (!form[key]) {
        toast.error(`${key} is required`)
        return false
      }
    }

    if (!form.acceptTerms) {
      toast.error('Please accept terms and conditions')
      return false
    }

    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match')
      return false
    }

    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    console.log('Form submitted:', form)
    toast.success('Registration submitted successfully')
  }

  const inputClass =
    "w-full bg-transparent border-0 border-b-2 border-gray-400 py-2 focus:outline-none focus:border-gray-600 transition-all"

  return (
    <>
      <Toaster position="top-center" />

      <div className="max-w-3xl mx-auto my-10 px-4">
        <div className="shadow-2xl bg-white">
          <div className="bg-pink-800 py-8 text-center">
            <h1 className="text-3xl font-bold text-white">
              Asaan Rishta
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">

            <div className="flex flex-col sm:flex-row gap-6">
              <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" className={inputClass} />
              <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" className={inputClass} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <select name="gender" value={form.gender} onChange={handleChange} className={inputClass}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className={inputClass} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" className={inputClass} />
              <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className={inputClass} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <input name="birthday" type="date" value={form.birthday} onChange={handleChange} className={inputClass} />
              <select name="maritalStatus" value={form.maritalStatus} onChange={handleChange} className={inputClass}>
                <option value="">Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <input name="religion" value={form.religion} onChange={handleChange} placeholder="Religion" className={inputClass} />
              <input name="caste" value={form.caste} onChange={handleChange} placeholder="Caste" className={inputClass} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <input name="education" value={form.education} onChange={handleChange} placeholder="Education" className={inputClass} />
              <input name="occupation" value={form.occupation} onChange={handleChange} placeholder="Occupation" className={inputClass} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <input name="country" value={form.country} onChange={handleChange} placeholder="Country" className={inputClass} />
              <input name="state" value={form.state} onChange={handleChange} placeholder="State" className={inputClass} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <input name="city" value={form.city} onChange={handleChange} placeholder="City" className={inputClass} />
              <input name="height" value={form.height} onChange={handleChange} placeholder="Height" className={inputClass} />
            </div>

            <input name="mobilePhone" value={form.mobilePhone} onChange={handleChange} placeholder="Mobile Phone" className={inputClass} />

            <textarea name="aboutYourself" value={form.aboutYourself} onChange={handleChange} placeholder="About Yourself" className={inputClass} />

            <textarea name="aboutYourPartner" value={form.aboutYourPartner} onChange={handleChange} placeholder="About Partner" className={inputClass} />

            <div className="flex justify-center items-center gap-2">
              <input type="checkbox" name="acceptTerms" checked={form.acceptTerms} onChange={handleChange} />
              <label>Accept Terms & Conditions</label>
            </div>

            <div className="text-center space-y-3">
              <button type="submit" className="bg-pink-800 text-white px-8 py-2 rounded">
                Register
              </button>

              <p className="text-sm text-gray-600">
                Have an account? 
                <span className="text-pink-700 cursor-pointer ml-1 hover:underline">
                  Sign in
                </span>
              </p>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Forms