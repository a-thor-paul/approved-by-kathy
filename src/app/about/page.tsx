import Image from 'next/image'
import Link from 'next/link'
import { Users, ShieldCheck, Banknote, Car, CreditCard, MapPin, ArrowRight, Briefcase, RefreshCw } from 'lucide-react'

export default function About() {
  return (
    <div className="w-full">
      <div className="relative w-full h-[70vh] min-h-[600px] overflow-hidden">
        <Image
          src="/images/successBG.jpg"
          alt="Success background image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
              Approved By Kathy
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We specialize in securing auto loans for people with diverse credit histories, 
              helping you drive away with the right vehicle regardless of your financial background.
            </p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 mt-8 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8 transition duration-300 ease-in-out">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {[
              { icon: Users, title: "Expert Team", description: "Our experienced professionals work tirelessly to find the best financing options for you." },
              { icon: ShieldCheck, title: "Flexible Solutions", description: "We provide options for all situations, including bankruptcy and credit counselling." },
              { icon: Banknote, title: "Newcomer Friendly", description: "We help newcomers to Canada build credit and secure their first auto loan." }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl flex-1">
                <div className="flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CreditCard, title: "Bad Credit Solutions", description: "We provide flexible financing, regardless of past credit challenges." },
              { icon: ShieldCheck, title: "Bankruptcy Support", description: "We can help you get approved for a car loan, even during bankruptcy or credit counselling." },
              { icon: Car, title: "Insurance Write-Offs", description: "We can help you secure financing to get back on the road after an accident." },
              { icon: MapPin, title: "New to Canada", description: "We specialize in helping immigrants secure auto loans and build credit in Canada." },
              { icon: Briefcase, title: "Self-Employed Assistance", description: "We offer tailored loan options for self-employed individuals, understanding your unique financial situation." },
              { icon: RefreshCw, title: "Trade-In & Upgrade", description: "Ready to upgrade? We'll help you trade in your current vehicle and secure financing for a new one." }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Commitment</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you need a second vehicle, are self-employed, or ready to trade in and upgrade, 
              Approved By Kathy is here to help. We believe everyone deserves access to a car that fits 
              their needs, no matter their financial situation.
            </p>
            <Link href="/apply" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Get Approved <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}