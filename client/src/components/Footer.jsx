import React from 'react'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-campus-navy text-white pt-16 pb-8 xl:px-[8rem]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Campus Info Guide</h3>
            <p className="text-gray-300 mb-4">
              Empowering students through quality education since 2005. We strive for excellence in
              all aspects of education and student development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/faculty" className="text-gray-300 hover:text-white transition-colors">Faculty</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-campus-gold shrink-0 mt-0.5" />
                <span className="text-gray-300">Vajrapukotturu, (Srikakulam), Andhra Pradesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-campus-gold" />
                <span className="text-gray-300">(+91) 9440518772</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-campus-gold" />
                <a href="mailto:info@campusguide.edu" className="text-gray-300 hover:text-white">
                saivineethjuniorcollege@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hours of Operation</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-campus-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-gray-300">8:00 AM - 5:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-campus-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Saturday</p>
                  <p className="text-gray-300">9:00 AM - 1:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-campus-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Sunday</p>
                  <p className="text-gray-300">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Campus Info Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
