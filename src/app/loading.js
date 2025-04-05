import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

const loading = () => {
  const { logo } = assets.images;

  return (
    <div className="bg-[#F6F6F6] h-screen flex justify-center items-center">
      <div className="text-center animate-pulse flex items-center">
        <div className="mb-4 ">
          <Image src={logo} alt="logo" width={40} height={40} />
        </div>
        <span className="text-xl font-bold">
          <span className="text-[#3B585E]">Medi</span>
          <span className="text-[#4AC8B9]">Care</span>
        </span>
      </div>
    </div>
  );
};

export default loading;
