import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeart } from 'react-icons/fa';
import logo from '../../assets/logo.jpg'; // Import the logo image

const Footer = () => {
  return (
    <footer className="bg-green-800 text-gray-300 py-10 mt-40">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-14 text-sm">
        
        {/* About Section */}
        <div>
          <h1 className="mb-5 text-2xl font-bold text-white flex items-center gap-2">
            <FaHeart className="text-white" /> Nature Delight Foundation
          </h1>
          <p className="text-gray-300 leading-relaxed">
            At Nature Delight Foundation, we focus on reforestation, environmental sustainability, and building a better future for our planet.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-5 text-white">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li>
              <NavLink to="/" className="hover:text-white transition duration-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about/contacts" className="hover:text-white transition duration-300">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" className="hover:text-white transition duration-300">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className="hover:text-white transition duration-300">
                Team
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-xl font-bold mb-5 text-white">Contact Us</h2>
          <ul className="flex flex-col gap-4 text-gray-300">
            <li className="flex items-center gap-3">
              <FaPhone className="text-white" /> 
              <div>
                <p className="font-semibold">Call Us</p>
                <p>+91 8087608729</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-white" /> 
              <div>
                <p className="font-semibold">Email Us</p>
                <p>naturedelightfoundation@gmail.com</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white" /> 
              <div>
                <p className="font-semibold">Warje</p>
                <p>Pune, Maharashtra</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-white" /> 
              <div>
                <p className="font-semibold">Hours</p>
                <p>Mon - Sat: 9AM - 7PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-500 pt-5 text-center text-gray-500 text-xs">
        <p>© 2024 Nature Delight Foundation - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
