import { assets } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Footer = () => {
  const { logo } = assets.images;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#14457B] text-white px-6 py-12 pt-28">
      <div className="max-w-full px-5 md:px-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <Link href="#">
            <div className="flex items-center gap-x-4">
              <Image src={logo} alt="logo" width={40} height={40} />

              <span className="text-xl font-bold ">
                <span className="text-[#F7F5F7]">Medi</span>
                <span className="text-[#4AC8B9]">Care</span>
              </span>
            </div>
          </Link>
          <p className="text-sm mb-4 py-5">
            It helps designers plan out where the content will sit, the content
            to be written and approved.
          </p>
          <div className="flex gap-3 mt-4">
            <button className="bg-blue-800 hover:bg-blue-700 p-2 rounded-md">
              <FaFacebookF />
            </button>
            <button className="bg-blue-800 hover:bg-blue-700 p-2 rounded-md">
              <FaGooglePlusG />
            </button>
            <button className="bg-blue-800 hover:bg-blue-700 p-2 rounded-md">
              <FaInstagram />
            </button>
            <button className="bg-blue-800 hover:bg-blue-700 p-2 rounded-md">
              <FaPinterestP />
            </button>
          </div>
        </div>

        {/* Courses Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 border-b border-white/30 pb-1">
            Our Courses
          </h4>
          <ul className="space-y-2 text-sm">
            <li>› About Us</li>
            <li>› Our Services</li>
            <li>› Doctors 1</li>
            <li>› Doctors 2</li>
            <li>› Events</li>
            <li>› Contact Us</li>
            <li>› Our Process</li>
            <li>› FAQ</li>
            <li>› Departments</li>
            <li>› Member</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h4 className="text-xl font-semibold mb-4 border-b border-white/30 pb-1">
            Recent Posts
          </h4>
          <div className="space-y-5">
            {[1, 2].map((post, i) => (
              <div key={i} className="flex items-start gap-3">
                <div>
                  <p className="text-xs text-gray-300 flex items-center gap-2">
                    <FaCalendarAlt /> December 12, 2021
                  </p>
                  <p className="text-sm font-medium">
                    {i === 0
                      ? "Get The Exercise Limited Mobility"
                      : "Transfusion Strategy And Heart Surgery"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 border-b border-white/30 pb-1">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-lg" />
              +1800-001-658
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-lg" />
              Info@Peacefulthemes.Com
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-lg mt-1" />
              Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-white/60 border-t border-white/20 pt-4">
        Copyright © {year} Medicare. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
