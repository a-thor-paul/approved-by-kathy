import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/images/womanCar.jpg"
        alt="Background image of a person driving"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center space-y-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Approved By Kathy
        </h1>
        <p className="text-xl md:text-2xl text-white font-medium drop-shadow-lg max-w-3xl mx-auto">
          Flexible Auto Loans for All Situations
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            href="/apply" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Apply Now
          </Link>
          <Link 
            href="/about" 
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}