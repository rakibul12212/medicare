"use client";

import CareGivingServicesCard from "../UI/careGivingServicesCard/careGivingServicesCard";

const CaregivingServices = () => {
  return (
    <div className="bg-[#F4F6F9] py-10 md:py-20">
      <div className="flex justify-center items-center flex-col text-center">
        <p className="inline-block text-blue-600 bg-blue-100 px-3 py-1 rounded-md text-sm md:text-base mb-4">
          What we do
        </p>
        <p className="text-gray-700 text-2xl md:text-4xl max-w-[600px] font-stretch-extra-expanded font-semibold mb-6">
          We Deliver Quality Caregiving Services
        </p>
      </div>

      <CareGivingServicesCard />
    </div>
  );
};

export default CaregivingServices;
