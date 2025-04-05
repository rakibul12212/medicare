"use client";

import { assets } from "@/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiPlus } from "react-icons/fi";

const slides = [
  {
    id: 1,
    text: "PASSION FOR CARING",
    title: "We Also Have A Ton Of Fun In The Process",
    button: "READ MORE",
    bg: assets.hero.bg1,
  },
  {
    id: 2,
    title: "PASSION FOR CARING",
    title: "We Also Have A Ton Of Fun In The Process",
    button: "READ MORE",
    bg: assets.hero.bg2,
  },
  {
    id: 3,
    title: "PASSION FOR CARING",
    title: "We Also Have A Ton Of Fun In The Process",
    button: "READ MORE",
    bg: assets.hero.bg3,
  },
  {
    id: 4,
    title: "PASSION FOR CARING",
    title: "We Also Have A Ton Of Fun In The Process",
    button: "READ MORE",
    bg: assets.hero.bg4,
  },
];

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      <Swiper
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Autoplay, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center relative"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-6 md:p-10 ml-4 md:ml-20 rounded-lg shadow-md max-w-md border border-white/40">
                <h2 className="inline-block text-blue-600 bg-blue-100 px-3 py-1 rounded-md text-sm md:text-base mb-4">
                  {slide.text}
                </h2>
                <p className="text-gray-700 text-2xl md:text-4xl max-w-[280px] font-semibold mb-6">
                  {slide.title}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                  <div className="flex items-center space-x-1">
                    <span>{slide.button}</span>
                    <span>
                      <FiPlus />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons - only visible on 2xl screens */}
      <div className="swiper-button-prev-custom hidden 2xl:flex absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white p-2 rounded-md shadow hover:bg-gray-100 transition">
        <svg
          className="w-5 h-5 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <div className="swiper-button-next-custom hidden 2xl:flex absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white p-2 rounded-md shadow hover:bg-gray-100 transition">
        <svg
          className="w-5 h-5 text-gray-800"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
