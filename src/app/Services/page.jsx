"use client";

import { useState } from "react";

import Breadcrumb from "@/component/UI/Breadcrumb";
import Container from "@/component/UI/Container/Container";
import ServiceSidebar from "@/component/UI/ServicesContent/ServiceSidebar/ServiceSidebar";
import Accordion from "@/component/UI/ServicesContent/Accordion";
import ContentSection from "@/component/UI/ServicesContent/Content";
import Process from "@/component/pages/Process";

const page = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dental Services");
  return (
    <Container>
      <div className="bg-gray-50">
        <h1 className="text-4xl font-semibold text-left text-[#3B585E]  px-5 md:px-20 pt-10">
          Services
        </h1>

        <div className="px-5 md:px-20">
          <Breadcrumb />
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row gap-6 p-6">
          <ServiceSidebar
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <div className="flex-1">
            <ContentSection selectedCategory={selectedCategory} />
            <div className="py-4">
              <Process />
            </div>
            <Accordion />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
