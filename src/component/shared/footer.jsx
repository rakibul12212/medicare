"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0A3D62] text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Clinic Name */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MediCare</h2>
          <p className="text-sm">
            Providing compassionate care with advanced medical expertise.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail /> info@healthcare.com
            </li>
            <li className="flex items-center gap-2">
              <MdPhone /> +1 (234) 567-890
            </li>
            <li className="flex gap-4 mt-2">
              <a href="#" className="hover:text-blue-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-300">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-300 mt-10">
        © {new Date().getFullYear()} HealthCare Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
