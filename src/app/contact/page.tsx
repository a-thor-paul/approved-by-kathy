'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captchaChecked, setCaptchaChecked] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaChecked) {
      alert('Please complete the captcha before submitting.')
      return
    }
    setIsSubmitting(true)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })

      if (response.ok) {
        alert('Thank you for your message. We will get back to you soon!')
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
        setCaptchaChecked(false)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen">
      <Image
        src="/images/driving.jpg"
        alt="Person driving a car at sunset"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 flex flex-col justify-center items-end">
              <div className="max-w-sm space-y-8 text-right pr-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl drop-shadow-lg">
                  Contact Us – Your Journey Begins Here
                </h2>
                <div>
                  <p className="text-lg text-white font-medium drop-shadow-md">
                    We're here to help you secure the auto loan you need, no matter your credit situation. Reach out to us with any questions and take the first step towards enjoying the freedom and adventure of life on the road. Let us help you drive towards a brighter future!
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-end">
                    <div className="mr-3 text-base text-white font-medium drop-shadow-md">
                      <p>Kathy@carnance.com</p>
                    </div>
                    <Mail className="h-6 w-6 text-blue-300 drop-shadow-md" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="mr-3 text-base text-white font-medium drop-shadow-md">
                      <p>647-296-3108</p>
                    </div>
                    <Phone className="h-6 w-6 text-blue-300 drop-shadow-md" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="mr-3 text-base text-white font-medium drop-shadow-md">
                      <p>80 Toro Rd, Toronto, ON</p>
                    </div>
                    <MapPin className="h-6 w-6 text-blue-300 drop-shadow-md" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 space-y-8">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden h-64 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5763.106856050823!2d-79.4854156!3d43.7613695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b31e24f5868cf%3A0x2f687a291337fc73!2s80%20Toro%20Rd%2C%20North%20York%2C%20ON%20M3J%202A4!5e0!3m2!1sen!2sca!4v1727201373015!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg" data-netlify="true" name="contact">
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white drop-shadow-md">
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md bg-white bg-opacity-80"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white drop-shadow-md">
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md bg-white bg-opacity-80"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white drop-shadow-md">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md bg-white bg-opacity-80"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white drop-shadow-md">
                    Phone Number (optional)
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md bg-white bg-opacity-80"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white drop-shadow-md">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md bg-white bg-opacity-80"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="captcha"
                      name="captcha"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      checked={captchaChecked}
                      onChange={(e) => setCaptchaChecked(e.target.checked)}
                    />
                    <label htmlFor="captcha" className="ml-2 block text-sm text-white drop-shadow-md">
                      I'm not a robot
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !captchaChecked}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}