"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { assets } from "@/assets";

const VisitClinics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { clinic } = assets.clinic;
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-x-8 bg-blue-500 text-white px-6 py-5 overflow-hidden">
     
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl md:w-1/2"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-300 text-sm font-semibold px-4 py-1 rounded mb-4"
        >
          VISIT OUR CLINICS
        </motion.button>

        <h1 className="text-4xl md:text-4xl font-semibold leading-tight mb-4">
          A Great Place Of Medical Health Care
        </h1>

        <p className="mb-6 text-sm md:text-base text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          Effective Medical Treatment
        </h2>

        <p className="text-sm md:text-base text-gray-200 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div ref={ref} className="flex gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">
              {inView && <CountUp end={86} duration={3} separator="," />}k
            </h2>
            <p className="text-xs mt-1 uppercase text-gray-200">Trusted User</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">
              {inView && <CountUp end={102} duration={3} />}%
            </h2>
            <p className="text-xs mt-1 uppercase text-gray-200">
              Positive Rating
            </p>
          </motion.div>
        </div>
      </motion.div>

   
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 md:mt-0 md:w-1/2"
      >
        <img src={clinic} alt="Doctor" className="h-full w-full object-cover" />
      </motion.div>
    </section>
  );
};

export default VisitClinics;
