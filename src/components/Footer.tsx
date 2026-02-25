import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/hm7mtaNdbWyZ81qScpSM5S/accuro_logo.png"
                alt="Accuro Logo"
                className="h-10 brightness-0 invert"
              />
              <span className="text-white text-lg font-semibold">, Inc.</span>
            </div>
            <p className="text-gray-300 mt-2">
              Providing high-quality instrumentation and calibration solutions
              for your industrial needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span className="text-gray-300">+63 9171507737</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span className="text-gray-300">info@accuro.com.ph</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span className="text-gray-300">
                  Unit 2229, Viera Residences, Scout Tuason Avenue, Barangay
                  Obrero, Quezon City
                </span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="text-sm font-semibold mb-3">Partners</h4>
              <a
                href="https://www.beamex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition flex items-center gap-2"
              >
                <span className="flex items-center gap-1">
                  Visit <img src="/images/beamex-logo.png" alt="Beamex" className="h-[1em] inline-block mx-1" /> Official Website
                </span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Accuro, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
