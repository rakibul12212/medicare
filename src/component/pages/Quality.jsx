import React from "react";
import ReadMoreBtn from "../UI/ReadMoreBtn";

const Quality = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMThiYXRjaDQta2F0aWUtMTcuanBn.jpg')",
      }}
    >
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-3xl mx-auto">
        <p>
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
            Quality & excellence
          </span>
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold leading-snug">
          Expect nothing but the best from medical technologies
        </h2>
        <ReadMoreBtn variant="primary" />
      </div>
    </section>
  );
};

export default Quality;
