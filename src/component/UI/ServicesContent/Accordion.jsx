"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Where Can I Go to Provide a Sample for Testing?",
    answer:
      "Visit our main lab or any nearby branch. Bring your ID and insurance documents.",
  },
  {
    question: "What Happens to My Sample Once I Have Provided It?",
    answer:
      "Samples are tested in our secure lab. Results are delivered online or via SMS.",
  },
  {
    question: "What Will Laboratory Testing Cost Me?",
    answer:
      "Testing costs vary, but we offer low-cost plans and free consultations.",
  },
  {
    question: "Using Innovative Technology",
    answer:
      "We use AI-powered analysis and next-gen equipment to deliver fast and accurate diagnostics.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Health Tips & Info
      </h3>
      <p className="text-sm  mb-4 text-gray-800 max-w-2xl">
        Medicate is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. Lorem Ipsum
        is simply dummy text of the printing and typesetting industry.
      </p>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white py-2 transition-all">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-base text-gray-800 bg-gray-100 hover:bg-blue-50 transition"
            >
              {faq.question}
              <FaChevronDown
                className={`text-sm transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
