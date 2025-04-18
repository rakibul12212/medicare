"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import DoctorCard from "../UI/DoctorCard/DoctorCard";
import { assets } from "@/assets";

const teamMembers = [
  {
    id: 1,
    img: assets.doctor.doctor1,
    name: "Dr. Sarah Johnson",
    designation: "Cardiologist",
    socials: [
      { icon: FaFacebookF, url: "https://facebook.com/dr.sarahjohnson" },
      { icon: FaLinkedinIn, url: "https://linkedin.com/in/drsarahjohnson" },
      { icon: FaEnvelope, url: "mailto:sarah.johnson@example.com" },
    ],
  },
  {
    id: 2,
    img: assets.doctor.doctor2,
    name: "Dr. Michael Smith",
    designation: "Neurologist",
    socials: [
      { icon: FaFacebookF, url: "https://facebook.com/dr.michaelsmith" },
      { icon: FaLinkedinIn, url: "https://linkedin.com/in/drmichaelsmith" },
      { icon: FaEnvelope, url: "mailto:michael.smith@example.com" },
    ],
  },
  {
    id: 3,
    img: assets.doctor.doctor3,
    name: "Dr. Emily Brown",
    designation: "Pediatrician",
    socials: [
      { icon: FaFacebookF, url: "https://facebook.com/dr.emilybrown" },
      { icon: FaLinkedinIn, url: "https://linkedin.com/in/dremilybrown" },
      { icon: FaEnvelope, url: "mailto:emily.brown@example.com" },
    ],
  },
  {
    id: 4,
    img: assets.doctor.doctor4,
    name: "Dr. James Lee",
    designation: "Dermatologist",
    socials: [
      { icon: FaFacebookF, url: "https://facebook.com/dr.jameslee" },
      { icon: FaLinkedinIn, url: "https://linkedin.com/in/drjameslee" },
      { icon: FaEnvelope, url: "mailto:james.lee@example.com" },
    ],
  },
  {
    id: 5,
    img: assets.doctor.doctor5,
    name: "Dr. Olivia Davis",
    designation: "Gynecologist",
    socials: [
      { icon: FaFacebookF, url: "https://facebook.com/dr.oliviadavis" },
      { icon: FaLinkedinIn, url: "https://linkedin.com/in/droliviadavis" },
      { icon: FaEnvelope, url: "mailto:olivia.davis@example.com" },
    ],
  },
  {
    id: 6,
    img: assets.doctor.doctor6,
    name: "Dr. William Martinez",
    designation: "Orthopedic Surgeon",
    socials: [
      { icon: FaFacebookF, url: "https://facebook.com/dr.williammartinez" },
      { icon: FaLinkedinIn, url: "https://linkedin.com/in/drwilliammartinez" },
      { icon: FaEnvelope, url: "mailto:william.martinez@example.com" },
    ],
  },
];

const Team = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-10">
        <p className="inline-block text-blue-600 bg-blue-100 px-3 py-1 rounded-md text-sm md:text-base mb-4">
          Our Team
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Meet our Specialist Doctors
        </h2>
      </div>
      <div className="px-4 md:px-10 2xl:px-20 py-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 4000 }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <DoctorCard {...member} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tailwind Styled Pagination */}
        <div className="custom-pagination flex justify-center mt-6 gap-2"></div>
      </div>
    </div>
  );
};

export default Team;
