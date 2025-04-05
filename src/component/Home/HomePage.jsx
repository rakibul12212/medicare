import React from "react";
import HeroSection from "../pages/HeroSection";
import Appointment from "../pages/Appointment";
import About from "../pages/About";
import CaregivingServices from "../pages/CaregivingServices";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="-mt-24 relative z-10 px-4 flex justify-center">
        <div className="max-w-6xl w-full">
          <Appointment />
        </div>
      </div>
      <About />
      <CaregivingServices />
    </>
  );
};

export default HomePage;
