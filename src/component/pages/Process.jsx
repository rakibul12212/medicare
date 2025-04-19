"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", label: "Accept Insurance" },
  { number: "02", label: "New Technology" },
  { number: "03", label: "Medical Advices" },
  { number: "04", label: "Medical Treatment" },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const lineVariant = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Process = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMThiYXRjaDQta2F0aWUtMTcuanBn.jpg')",
      }}
    >
      {/* Title */}
      <div className="text-center mb-16">
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
          OUR PROCESS STEP
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6">
          We Apply Our Latest Research
        </h2>
      </div>

      {/* Steps + Animated Line */}
      <motion.div
        className="relative flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-between items-center max-w-6xl mx-auto gap-10 sm:gap-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
      >
        {/* Animated Line */}
        <motion.svg
          variants={lineVariant}
          className="absolute top-8 left-0 right-0 h-1 w-full z-0 hidden sm:block"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="5%"
            y1="0"
            x2="95%"
            y2="0"
            stroke="#ffffff"
            strokeWidth="4"
            strokeDasharray="6 8"
            variants={lineVariant}
          />
        </motion.svg>

        {/* Step Items */}
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex flex-col items-center z-10 text-center w-full sm:w-auto"
          >
            <div className="bg-blue-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold">
              {step.number}
            </div>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium">
              {step.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Process;
