"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import PartnerModal from "./PartnerModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Mouse tracking for glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 100);
      mouseY.set((clientY / innerHeight - 0.5) * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Gradient with Enhanced Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-surface to-midnight"></div>
        
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primaryLight/20 animate-float"></div>
        </div>

        {/* Mouse-tracking glow layer */}
        <motion.div
          style={{
            x: glowX,
            y: glowY,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl"></div>
        </motion.div>

        {/* Floating orbs with enhanced parallax */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        >
          <div className="w-full h-full animate-float"></div>
        </motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primaryLight/10 rounded-full blur-3xl"
        >
          <div className="w-full h-full animate-float" style={{ animationDelay: "2s" }}></div>
        </motion.div>
        
        {/* Additional atmospheric orbs */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]) }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
        >
          <div className="w-full h-full animate-float" style={{ animationDelay: "4s" }}></div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center mb-6"
        >
          <div className="flex items-center space-x-2 px-4 py-2 bg-surface/50 backdrop-blur-sm border border-primary/30 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-gray-300">Welcome to the Future of Industry</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6"
        >
          <span className="block text-white mb-2">Santums</span>
          <span className="block gradient-text text-glow animate-glow">Build</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Building the future of industry connections —{" "}
          <span className="text-white font-semibold">smarter</span>,{" "}
          <span className="text-white font-semibold">faster</span>,{" "}
          <span className="text-white font-semibold">together</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/about"
              className="group px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] flex items-center space-x-2 glow-effect"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center space-x-2 hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full"></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Partner Modal */}
      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
