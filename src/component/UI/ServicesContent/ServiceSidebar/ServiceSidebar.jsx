"use client";

import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const categories = [
  "Angiology Services",
  "Cardiology Services",
  "Dental Services",
  "Endocrinology Services",
  "Eye Care Services",
  "Neurology Services",
  "Orthopaedics Services",
  "ENT Services",
];

export default function Sidebar({ selected, onSelect }) {
  return (
    <aside className="w-full sm:w-72 bg-gray-100   px-3 py-4 space-y-2">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 px-3  ">
        Our Services
      </h3>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onSelect(category)}
            className={`flex items-center justify-between px-3 py-3   cursor-pointer transition-all duration-200 ${
              selected === category
                ? "bg-blue-500 text-white shadow"
                : "hover:bg-blue-50 text-gray-700"
            }`}
          >
            <span className="text-base font-semibold w-full">{category}</span>
            <FaChevronRight className="text-xs" />
          </li>
        ))}
      </ul>
    </aside>
  );
}
