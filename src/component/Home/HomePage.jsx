"use client";

import HeroSection from "../pages/HeroSection";
import Appointment from "../pages/Appointment";
import About from "../pages/About";
import CaregivingServices from "../pages/CaregivingServices";
import VisitClinics from "../pages/VisitClinics";
import WhoWeAre from "../pages/WhoWeAre";
import OptometryServices from "../pages/OptometryServices";
import Team from "../pages/Team";

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
      <OptometryServices />
      <VisitClinics />
      <Team/>
      <WhoWeAre />
    </>
  );
};

export default HomePage;
