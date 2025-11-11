"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Target, Users, Lightbulb, Shield, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "To revolutionize industry connections through technology, making collaboration seamless and efficient.",
    },
    {
      icon: Users,
      title: "Partnership First",
      description: "We believe in building lasting relationships with our partners, clients, and the communities we serve.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology and forward-thinking solutions.",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Operating with integrity, accountability, and complete transparency in everything we do.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Sign Up",
      description: "Create your account and complete your company profile with your specific needs and capabilities.",
    },
    {
      step: "02",
      title: "Get Matched",
      description: "Our AI-powered system connects you with the right partners, suppliers, and opportunities.",
    },
    {
      step: "03",
      title: "Collaborate",
      description: "Work together seamlessly using our integrated tools for project management and communication.",
    },
    {
      step: "04",
      title: "Grow",
      description: "Scale your operations with access to a global network and data-driven insights.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primaryLight/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm">About Us</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
              Building Tomorrow&apos;s{" "}
              <span className="gradient-text text-glow">Infrastructure</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Santums Build is transforming how the construction, logistics, and technology
              sectors connect, collaborate, and grow together in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-surface/80 to-surface/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                To empower construction, transport, and technology companies worldwide by
                providing a seamless platform that fosters innovation, efficiency, and sustainable growth.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We&apos;re committed to breaking down barriers, eliminating inefficiencies, and creating
                a connected ecosystem where every stakeholder can thrive.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/20 to-primaryLight/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 md:p-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                To become the world&apos;s leading digital infrastructure platform, connecting
                millions of businesses and transforming how industries collaborate.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We envision a future where technology and human expertise work hand-in-hand to
                build smarter cities, efficient supply chains, and sustainable infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primaryLight rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-poppins">
              How It Works
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Getting started with Santums Build is simple and straightforward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-bold gradient-text opacity-20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-poppins">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-4 transform">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/50"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
