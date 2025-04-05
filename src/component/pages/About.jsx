"use client";

import { assets } from "@/assets";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import ReadMoreBtn from "../UI/ReadMoreBtn";
import { motion } from "framer-motion";

// Checklist text
const checklistText = [
  "Mauris mattis lectus eget ligula",
  "Mauris mattis lectus eget ligula",
  "Aenean facilisis erat et metus",
  "Aenean facilisis erat et metus",
];

const About = () => {
  const { about1, about2 } = assets.about;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-16 2xl:gap-20 p-6 lg:p-12">
      {/* Left Images Section */}
      <div className="relative w-full lg:w-1/2 max-w-xl">
        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src={about1}
            alt="Doctor working"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Overlay Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute bottom-[-40px] right-[-20px] w-2/3 sm:w-1/2 h-40 sm:h-48 rounded-lg overflow-hidden border-4 border-white bg-white shadow-lg"
        >
          <Image
            src={about2}
            alt="Doctor showing tablet"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-2/3 2xl:w-1/2 space-y-4 2xl:space-y-6 text-left">
        <sub className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-md inline-block">
          HEALTH & MEDICINE
        </sub>
        <h2 className="text-3xl sm:text-4xl font-semibold leading-snug 2xl:w-2/3">
          The Heart And Science Of Medicine Service
        </h2>
        <p className="text-gray-600">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p className="text-gray-600">
          Injected humour, or randomised words which don’t look even slightly
          believable.
        </p>

        {/* Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          {checklistText.map((text, i) => (
            <div key={i} className="flex items-start gap-2">
              <FaCheck className="text-blue-500 mt-1" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <ReadMoreBtn />
      </div>
    </div>
  );
};

export default About;
