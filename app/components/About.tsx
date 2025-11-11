"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Building2, Truck, Network } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const highlights = [
    {
      icon: Building2,
      title: "Construction",
      description: "Connect with contractors, suppliers, and project managers",
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Streamline transport and delivery coordination",
    },
    {
      icon: Network,
      title: "Technology",
      description: "Integrate cutting-edge digital solutions",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-surface/30 relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primaryLight/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div 
              style={{ y: imageY, scale: imageScale }}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group"
            >
              {/* Placeholder for construction image */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface via-gray-800 to-surface flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                <div className="text-center">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Building2 className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-gray-600 text-sm">Construction Site Image</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-4 left-4 w-32 h-32 bg-primaryLight/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              ></motion.div>
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }
              } : {}}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="absolute -bottom-6 -right-6 bg-midnight border border-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              <div className="text-3xl font-bold gradient-text mb-1">10+ Years</div>
              <div className="text-gray-400 text-sm">Industry Experience</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6"
            >
              <span className="text-primary font-semibold text-sm">About Santums Build</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins leading-tight"
            >
              Transforming Industry Through{" "}
              <span className="gradient-text">Digital Innovation</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              Santums Build is revolutionizing how the construction and transport industries
              connect, collaborate, and grow. We bridge the gap between traditional industries
              and modern technology, creating a seamless ecosystem for all stakeholders.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-400 mb-8 leading-relaxed"
            >
              Our platform leverages AI, automation, and blockchain technology to deliver
              unprecedented efficiency, transparency, and reliability. From project planning
              to execution, we empower businesses to build the future together.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.03,
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="flex items-start space-x-4 p-4 bg-surface/50 rounded-lg border border-gray-800/50 hover:border-primary/30 transition-colors duration-300 hover:shadow-[0_0_20px_rgba(255,107,0,0.1)] cursor-pointer group"
                  >
                    <div className="flex-shrink-0">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 bg-gradient-to-br from-primary to-primaryLight rounded-lg flex items-center justify-center group-hover:shadow-lg"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
