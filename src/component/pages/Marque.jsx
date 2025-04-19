"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaClinicMedical, FaHeartbeat, FaUserMd } from "react-icons/fa";
import { BsHospital } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";

const logos = [
  {
    icon: <FaClinicMedical size={50} />,
    title: "DrugStore",
    subtitle: "Tagline here",
  },
  {
    icon: <BsHospital size={50} />,
    title: "Hospita",
    subtitle: "Tagline here",
  },
  {
    icon: <FaUserMd size={50} />,
    title: "THE MEDICAL SOLUTIONS",
    subtitle: "LOREM IPSUM",
  },
  {
    icon: <GiHealthNormal size={50} />,
    title: "HEALTH LOGO",
    subtitle: "LOREM IPSUM",
  },
  {
    icon: <FaHeartbeat size={50} />,
    title: "Hospital",
    subtitle: "Tagline here",
  },
];

const Marque = () => {
  return (
    <div className="bg-blue-500 py-10">
      <Marquee speed={50} gradient={false}>
        <div className="flex items-center justify-center gap-16 w-full">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white text-center min-w-[150px]"
            >
              <div className="mb-2 text-white">{logo.icon}</div>
              <p className="font-semibold text-lg">{logo.title}</p>
              {logo.subtitle && (
                <p className="text-sm text-white/80">{logo.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Marque;
