"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function AtmosphericBackground() {
  // ✅ Generate random particles once, safely for React
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      // also randomize the side movement once here
      horizontalShift: Math.random() * 50 - 25,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-surface to-midnight opacity-90"></div>

      {/* Animated gradient layers */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(255, 107, 0, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(255, 167, 51, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 60%, rgba(255, 107, 0, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.horizontalShift, 0], // ✅ random shift precomputed
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Moving light beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        animate={{
          x: [0, 100, -100, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primaryLight/10 to-transparent"
        animate={{
          x: [0, -100, 100, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-midnight/50"></div>
    </div>
  );
}
