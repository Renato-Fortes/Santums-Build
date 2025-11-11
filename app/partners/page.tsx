"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Building2, Truck, Cpu, Handshake, Globe, TrendingUp, ArrowRight } from "lucide-react";

export default function PartnersPage() {
  const partnerTypes = [
    {
      icon: Building2,
      title: "Construction Partners",
      description: "Join our network of contractors, builders, and construction companies to access new projects and expand your reach.",
      benefits: ["Project matching", "Resource sharing", "Quality certification"],
    },
    {
      icon: Truck,
      title: "Logistics Partners",
      description: "Connect your transport and logistics services with companies that need reliable, efficient delivery solutions.",
      benefits: ["Route optimization", "Fleet management", "Real-time tracking"],
    },
    {
      icon: Cpu,
      title: "Technology Partners",
      description: "Integrate your innovative solutions with our platform to reach a global audience of industry professionals.",
      benefits: ["API access", "Co-marketing", "Technical support"],
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to a worldwide network of businesses and opportunities across 50+ countries.",
    },
    {
      icon: Handshake,
      title: "Trusted Connections",
      description: "Connect with verified, quality partners through our rigorous vetting process.",
    },
    {
      icon: TrendingUp,
      title: "Growth Support",
      description: "Benefit from our marketing, technology, and business development resources.",
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
              <span className="text-primary font-semibold text-sm">Partnership Program</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
              Partner With{" "}
              <span className="gradient-text text-glow">Industry Leaders</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Join Santums Build&apos;s partner ecosystem and unlock new opportunities for growth,
              innovation, and collaboration in the construction and transport industries.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/50"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
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
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose the partnership model that best fits your business
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primaryLight rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                    {type.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {type.description}
                  </p>

                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-primary mb-2">Key Benefits:</div>
                    {type.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
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
              Why Partner With Us
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The advantages of joining the Santums Build ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primaryLight rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Active Partners" },
              { value: "$2.5B+", label: "Projects Value" },
              { value: "50+", label: "Countries" },
              { value: "98%", label: "Partner Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-surface/80 via-surface/60 to-surface/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join our partner program today and start growing your business with Santums Build.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/50"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
