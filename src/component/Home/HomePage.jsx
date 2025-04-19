"use client";

import HeroSection from "../pages/HeroSection";
import Appointment from "../pages/Appointment";
import About from "../pages/About";
import CaregivingServices from "../pages/CaregivingServices";
import VisitClinics from "../pages/VisitClinics";
import WhoWeAre from "../pages/WhoWeAre";
import OptometryServices from "../pages/OptometryServices";
import Team from "../pages/Team";
import Testimonial from "../pages/Testimonial";
import Process from "../pages/Process";
import Quality from "../pages/Quality";
import Marquee from "../pages/Marque";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="-mt-24 relative z-10 px-4 flex justify-center">
        <div className="max-w-6xl w-full">
          <Appointment />
        </div>
      </div>
      <About />
      <OptometryServices />
      <VisitClinics />
      <CaregivingServices />
      <Team />
      <Quality />
      <WhoWeAre />
      <Testimonial />
      <Process />
      <Marquee />
    </div>
  );
};

export default HomePage;
