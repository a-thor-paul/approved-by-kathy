import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Thank You!</h2>
          <p className="mt-2 text-sm text-gray-600">
            Your application has been successfully submitted. We will review it and get back to you soon.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}