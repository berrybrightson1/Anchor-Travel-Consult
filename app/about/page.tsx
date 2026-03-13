"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, Heart } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We guide students toward the world's most prestigious institutions, ensuring access to world-class education.",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Every recommendation is tailored to individual aspirations, ensuring the perfect fit between student and university.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "We work collaboratively with students and parents, providing support at every stage of the journey.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Transparent, honest guidance grounded in deep knowledge of UK institutions and student success.",
    },
  ];

  const timeline = [
    {
      year: "2009",
      title: "Founded",
      description:
        "Anchor Travel Consult established as a trusted UK education consultancy.",
    },
    {
      year: "2014",
      title: "Expansion",
      description: "Expanded services to cover all major UK universities.",
    },
    {
      year: "2018",
      title: "Recognition",
      description:
        "Recognized as a leading education consultancy with 10,000+ successful placements.",
    },
    {
      year: "2024",
      title: "Digital First",
      description:
        "Launched cutting-edge digital platform for seamless student guidance.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
          >
            About Anchor Travel Consult
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mb-8"
          >
            We are <span className="font-semibold text-orange-500">pioneers in UK education consultancy</span>, dedicated to transforming lives through access to world-class British institutions.
          </motion.p>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To <span className="font-semibold text-navy-600">empower students globally</span> by providing expert guidance into the UK&apos;s finest universities, unlocking opportunities for academic excellence, personal growth, and transformative careers.
            </p>
          </motion.div>
        </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-12"
          >
            Our Journey
          </motion.h2>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-bold text-lg">
                    {item.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-navy-700 rounded-2xl text-white mt-20">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {[
            { number: "50,000+", label: "Students Guided" },
            { number: "130+", label: "Partner Universities" },
            { number: "95%", label: "Success Rate" },
            { number: "150+", label: "Countries Served" },
          ].map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</p>
              <p className="text-orange-200">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Philosophy */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-6">
            Why Students Choose Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-6 leading-relaxed"
          >
            We don&apos;t just process applications—we <span className="font-semibold">build relationships</span>. Our consultants combine deep knowledge of UK universities with genuine passion for student success. Every interaction is personal, every recommendation is backed by research, and every student leaves knowing they&apos;ve found their perfect fit.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 leading-relaxed"
          >
            From first consultation to graduation, we&apos;re your trusted partner in achieving your academic dreams at the world&apos;s greatest universities.
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}
