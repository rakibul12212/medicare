"use client";

import { useState } from "react";
import { FaHeadset, FaBars, FaTimes } from "react-icons/fa";
import { assets } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const HeaderPage = () => {
  const { logo } = assets.images;
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", hasDropdown: false },
    { name: "SERVICES", hasDropdown: true },
    { name: "BLOG", hasDropdown: true },
    { name: "Make Appointment", hasDropdown: false },
    { name: "CONTACT US", hasDropdown: false },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-[#F6F6F6] w-full relative z-50 shadow-sm">
      {/* Logo */}
      <div className="flex items-center ">
        <Image src={logo} alt="logo" width={40} height={40} />
        <span className="text-xl font-bold">
          <span className="text-[#3B585E]">Medi</span>
          <span className="text-[#B9D977]">Care</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        {navLinks.map((link, index) => (
          <div key={index} className="relative group">
            <button className="flex items-center space-x-1 hover:text-blue-500">
              {link.name}
            </button>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="hidden md:flex items-center space-x-2">
        <FaHeadset size={40} className="text-blue-500 text-xl" />
        <div>
          <p className="text-lg font-semibold">+1800-001-658</p>
          <p className="text-sm text-gray-500">Mon-Fri: 6AM - 10PM</p>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute h-screen top-16 left-0 w-full bg-blue-500 shadow-xs flex flex-col md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 border-b hover:bg-gray-100 text-gray-800 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default HeaderPage;
