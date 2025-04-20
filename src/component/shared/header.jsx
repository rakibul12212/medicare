"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Next.js App Router navigation
import { FaHeadset, FaBars, FaTimes } from "react-icons/fa";
import { assets } from "@/assets";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HeaderPage = () => {
  const { logo } = assets.images;
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // ✅ useRouter instance

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "#services" },
    { name: "BLOG", href: "/Blog" },
    { name: "MAKE APPOINTMENT", href: "#appointment" },
    { name: "CONTACT US", href: "#contact" },
  ];

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      // Scroll to section
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    } else {
      // Navigate to page
      router.push(href);
      setMenuOpen(false);
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <div className="sticky top-0 z-20">
      <nav className="flex items-center justify-between p-4 bg-[#F6F6F6] w-full relative z-50 shadow-sm">
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center cursor-pointer"
        >
          <Image src={logo} alt="logo" width={40} height={40} />
          <span className="text-xl font-bold ml-2">
            <span className="text-[#3B585E]">Medi</span>
            <span className="text-[#4AC8B9]">Care</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(link.href)}
              className="hover:text-[#4AC8B9] font-medium text-sm"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-2">
          <FaHeadset size={40} className="text-[#4AC8B9] text-xl" />
          <div>
            <p className="text-lg font-semibold">+1800-001-658</p>
            <p className="text-sm text-gray-500">Mon-Fri: 6AM - 10PM</p>
          </div>
        </div>

        {/* Mobile Toggle Button */}
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
              className="absolute h-screen top-16 left-0 w-full bg-[#4AC8B9] shadow-xs flex flex-col md:hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(link.href)}
                  className="block px-4 py-3 border-b text-left hover:bg-[#ffffff22] text-white font-medium"
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default HeaderPage;
