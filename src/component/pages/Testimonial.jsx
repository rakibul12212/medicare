"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Alexa Jhon",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don’t look even believable.",
  },
  {
    name: "Emily Clark",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Lorem Ipsum has been the industry standard dummy text ever since the 1500s. It has survived not only five centuries but also the leap into electronic typesetting.",
  },
  {
    name: "Michael Lee",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-[#f7f9fc] py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <span className="text-xs bg-blue-100 text-blue-500 px-3 py-1 rounded-md font-semibold uppercase tracking-wider">
            Our Testimonial
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-4 leading-snug">
            Here’s What Our <br /> Customers Have Said
          </h2>
          <p className="text-gray-600 mb-4 max-w-xl">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition">
            READ MORE <span className="ml-2">+</span>
          </button>
        </div>

        {/* Swiper Testimonial Carousel */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            spaceBetween={30}
            slidesPerView={1}
            className="w-full"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-md h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4 text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 relative z-10">
                      {testimonial.text}
                    </p>
                    <FaQuoteRight className="text-blue-100 text-5xl absolute bottom-8 right-8 z-0" />
                  </div>
                  <div className="flex items-center mt-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <span className="text-sm text-blue-500">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center mt-6 gap-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
