'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ApplicationPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    postalCode: '',
    dateOfBirth: '',
    employer: '',
    position: '',
    incomePerMonth: '',
    lengthOfEmployment: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long'
    }

    const phoneRegex = /^\d{10}$/
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/
    if (!postalCodeRegex.test(formData.postalCode)) {
      newErrors.postalCode = 'Please enter a valid Canadian postal code (e.g., A1A 1A1)'
    }

    const today = new Date()
    const birthDate = new Date(formData.dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    if (age < 18) {
      newErrors.dateOfBirth = 'You must be at least 18 years old to apply'
    }

    if (isNaN(Number(formData.incomePerMonth)) || Number(formData.incomePerMonth) <= 0) {
      newErrors.incomePerMonth = 'Please enter a valid income amount'
    }

    if (!consentGiven) {
      newErrors.consent = 'You must agree to the privacy policy to submit the application'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'loan-application',
          ...formData,
          consent: consentGiven.toString()
        }).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        router.push('/thank-you')
      } else {
        throw new Error('Failed to submit application')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Loan Application</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="form-name" value="loan-application" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type={key === 'dateOfBirth' ? 'date' : key === 'incomePerMonth' ? 'number' : 'text'}
                  name={key}
                  id={key}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors[key] ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={value}
                  onChange={handleChange}
                />
                {errors[key] && <p className="mt-1 text-sm text-red-600">{errors[key]}</p>}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={consentGiven}
                  onChange={(e) => setConsentGiven(e.target.checked)}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="consent" className="font-medium text-gray-700">
                  I agree to the{' '}
                  <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-500">
                    privacy policy
                  </Link>
                </label>
                <p className="text-gray-500">
                  By checking this box, you consent to our collection and use of your personal information as described in our privacy policy.
                </p>
              </div>
            </div>
            {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting || !consentGiven}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
        {submitStatus === 'error' && (
          <div className="mt-4 text-red-600 text-center">
            There was an error submitting your application. Please try again.
          </div>
        )}
      </div>
    </div>
  )
}