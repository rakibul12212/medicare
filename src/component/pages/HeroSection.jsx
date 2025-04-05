"use client";

import { useState } from "react";
import { assets } from "@/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ReadMoreBtn from "../UI/ReadMoreBtn";

const slides = [
  {
    id: 1,
    text: "PASSION FOR CARING",
    title: "We Also Have A Ton Of Fun In The Process",
    bg: assets.hero.bg1,
  },
  {
    id: 2,
    text: "PASSION FOR CARING",
    title: "We Also Have A Ton Of Fun In The Process",
    bg: assets.hero.bg2,
  },
  {
    id: 3,
    text: "PASSION FOR CARING",
    title: "We Also Have A Ton Of Fun In The Process",
    bg: assets.hero.bg3,
  },
];

const contentVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
};

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      <Swiper
        loop
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Autoplay, Navigation, EffectFade]}
        className="w-full h-full"
        fadeEffect={{ crossFade: true }}
        speed={1500} // increased for a smoother fade effect
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={slide.id}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      delay: 0.8,
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                    className="bg-white/90 backdrop-blur-sm p-6 md:p-10 ml-4 md:ml-20 rounded-lg shadow-md max-w-md border border-white/40"
                  >
                    <h2 className="inline-block text-blue-600 bg-blue-100 px-3 py-1 rounded-md text-sm md:text-base mb-4">
                      {slide.text}
                    </h2>
                    <p className="text-gray-700 text-2xl md:text-4xl max-w-[280px] font-stretch-extra-expanded font-semibold mb-6">
                      {slide.title}
                    </p>
                    <ReadMoreBtn />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons (visible on 2xl screens) */}
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
