"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { title: "Client Satisfaction", percent: 85 },
  { title: "Medic Success", percent: 90 },
  { title: "Client Referral", percent: 70 },
];

export default function WhoWeAreSection() {
  const [animatedPercents, setAnimatedPercents] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.4 }); // trigger when 40% visible

  useEffect(() => {
    let interval;

    if (isInView) {
      interval = setInterval(() => {
        setAnimatedPercents((prev) =>
          prev.map((val, i) =>
            val < stats[i].percent ? val + 1 : stats[i].percent
          )
        );
      }, 20);
    } else {
      // Reset when section leaves view
      setAnimatedPercents(stats.map(() => 0));
    }

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background Image visible only on md and 2xl screens */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url('/doctor/doctor.webp')` }}
      >
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 px-5 md:px-10 lg:px-20 py-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-md inline-block w-fit">
            WHO WE ARE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-snug">
            We Protect You In Any <br /> Sphere Of Life
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>

          {/* Progress Bars */}
          <div className="space-y-5">
            {stats.map((stat, i) => (
              <div key={stat.title}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    {stat.title}
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {animatedPercents[i]}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="bg-blue-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedPercents[i]}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
