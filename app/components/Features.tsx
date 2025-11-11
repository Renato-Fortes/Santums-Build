"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, Target, Cpu, Eye } from "lucide-react";
import { useRef, MouseEvent } from "react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Efficiency",
      description:
        "Streamline your operations with intelligent automation and real-time coordination across all stakeholders.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Smart Matching",
      description:
        "AI-powered algorithms connect you with the right partners, suppliers, and contractors for every project.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cpu,
      title: "Automation",
      description:
        "Reduce manual work with automated workflows, smart contracts, and seamless digital documentation.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "Full visibility into project timelines, costs, and deliverables with blockchain-backed verification.",
      color: "from-green-500 to-emerald-500",
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
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const Icon = feature.icon;

    return (
      <motion.div
        ref={ref}
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
        className="group relative"
      >
        <div className="h-full bg-surface/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]">
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
            style={{ transform: "translateZ(50px)" }}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-3 font-poppins" style={{ transform: "translateZ(30px)" }}>
            {feature.title}
          </h3>
          <p className="text-gray-400 leading-relaxed" style={{ transform: "translateZ(20px)" }}>
            {feature.description}
          </p>

          {/* Hover effect glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-300 -z-10"></div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primaryLight/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Why Choose <span className="gradient-text">Santums Build</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technology meets industry expertise to transform how you work
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-surface/50 backdrop-blur-sm border border-gray-800 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm">
              Trusted by 500+ companies worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
