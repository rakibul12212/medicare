"use client";

import { assets } from "@/assets";
import Image from "next/image";

const HeaderPage = () => {
  const { logo } = assets.images;
  return (
    <div className="flex items-center">
      <Image src={logo} alt="logo" width={50} height={50} />
      <p>header page</p>
    </div>
  );
};

export default HeaderPage;
