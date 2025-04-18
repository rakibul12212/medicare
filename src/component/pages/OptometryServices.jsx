"use client";
import React from "react";
import {
  FaStethoscope,
  FaHeartbeat,
  FaSyringe,
  FaEye,
  FaBrain,
  FaBone,
} from "react-icons/fa";

const services = [
  {
    title: "Endocrinology",
    description: "Lorem Ipsum is simply dummy text of the printing",
    icon: <FaStethoscope className="text-blue-500 text-3xl" size={50} />,
  },
  {
    title: "Cardiology",
    description: "Lorem Ipsum is simply dummy text of the printing",
    icon: <FaHeartbeat className="text-blue-500 text-3xl" size={50} />,
  },
  {
    title: "Angioplasty",
    description: "Lorem Ipsum is simply dummy text of the printing",
    icon: <FaSyringe className="text-blue-500 text-3xl" size={50} />,
  },
  {
    title: "Eye Care",
    description: "Lorem Ipsum is simply dummy text of the printing",
    icon: <FaEye className="text-blue-500 text-3xl" size={50} />,
  },
  {
    title: "Neurology",
    description: "Lorem Ipsum is simply dummy text of the printing",
    icon: <FaBrain className="text-blue-500 text-3xl" size={50} />,
  },
  {
    title: "Orthopaedics",
    description: "Lorem Ipsum is simply dummy text of the printing",
    icon: <FaBone className="text-blue-500 text-3xl" size={50} />,
  },
];

const OptometryServices = () => {
  return (
    <div className="relative bg-[#FCFCFC] py-20 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="inline-block text-blue-600 bg-blue-100 px-3 py-1 rounded-md text-sm md:text-base mb-4">
          Our service
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          A Wide Range Of Optometry Services
        </h2>
      </div>

      {/* Main layout */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Left cards */}
        <div className="flex flex-col gap-8 z-10 md:pb-20">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md px-6 py-6 w-72 flex items-center gap-4"
            >
              <div>{service.icon}</div>
              <div>
                <h3 className="text-blue-600 font-semibold text-xl">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Image */}
        <div className="hidden md:block relative w-[260px] h-[400px] mx-10">
          <img
            src="/doctor/doctor.png"
            alt="Doctor"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain h-full"
          />
        </div>

        {/* Right cards */}
        <div className="flex flex-col gap-8 z-10 pt-5 md:pt-20">
          {services.slice(3).map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg px-6 py-6 w-72 flex items-center gap-4"
            >
              <div>{service.icon}</div>
              <div>
                <h3 className="text-blue-600 font-semibold text-xl">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptometryServices;
