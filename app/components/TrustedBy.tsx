"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const companies = [
    { name: "Cemex", logo: "/logos/cemex.svg" },
    { name: "Volvo", logo: "/logos/volvo.svg" },
    { name: "CAT", logo: "/logos/cat.svg" },
    { name: "Siemens", logo: "/logos/siemens.svg" },
    { name: "CRH", logo: "/logos/crh.svg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-surface/30 relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primaryLight/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Powering connections in construction, logistics, and infrastructure worldwide
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
        >
          {companies.map((company) => (
            <motion.div
              key={company.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative w-full h-20 flex items-center justify-center group"
            >
              <div className="w-32 h-16 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700/50 group-hover:border-primary/50 transition-all duration-300 group-hover:bg-gray-800/80 group-hover:shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
                    {company.name}
                  </div>
                  <div className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors">Partner</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: "500+", label: "Active Partners" },
            { value: "10K+", label: "Projects Completed" },
            { value: "50+", label: "Countries" },
            { value: "99%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1] as const
                }
              } : {}}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              className="text-center p-6 rounded-xl bg-surface/30 backdrop-blur-sm border border-gray-800/50 hover:border-primary/30 transition-colors duration-300 group cursor-pointer"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
