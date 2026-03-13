"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Globe, BookOpen, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageSlider from "@/components/image-slider";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const sliderImages = [
  {
    id: 1,
    title: "Oxford University",
    description: "World's #1 ranked institution",
    image: "/oxford.webp",
  },
  {
    id: 2,
    title: "Cambridge University",
    description: "Centuries of academic excellence",
    image: "/Cambridge.webp",
  },
  {
    id: 3,
    title: "London Institutions",
    description: "Gateway to global opportunities",
    image: "/London.webp",
  },
];

const testimonials = [
  {
    author: {
      name: "Aisha Patel",
      handle: "@aishauk2024",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Anchor Travel Consult made my Oxford admission dream a reality! Their expertise and support were invaluable throughout the entire process.",
  },
  {
    author: {
      name: "Rohan Sharma",
      handle: "@rohantechie",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The guidance I received for my Cambridge Masters was exceptional. They understood my goals perfectly and guided me every step.",
  },
  {
    author: {
      name: "Priya Desai",
      handle: "@priyadesai",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Outstanding consultancy! From application to acceptance, the team was professional, responsive, and genuinely invested in my success.",
  },
];

const faqs = [
  {
    id: "faq1",
    question: "What programs does Anchor Travel Consult offer?",
    answer:
      "We specialize in guidance for undergraduate programs, master's degrees, and PhD opportunities at UK universities. Our services cover application strategy, personal statement writing, and interview preparation.",
  },
  {
    id: "faq2",
    question: "How does the admission process work?",
    answer:
      "The UK university admission process typically involves submitting an application through UCAS (for undergraduates), providing academic transcripts, personal statements, references, and attending interviews. We guide you through each step.",
  },
  {
    id: "faq3",
    question: "What are the entry requirements for UK universities?",
    answer:
      "Requirements vary by university and program. Generally, you need strong academic grades, English language proficiency (IELTS/TOEFL), and relevant qualifications. We assess your profile and recommend suitable programs.",
  },
  {
    id: "faq4",
    question: "How long does the application process take?",
    answer:
      "For undergraduate programs, applications typically open in September and close in January. Processing takes 4-8 weeks. For master's programs, timelines vary but often span 6-9 months from start to acceptance.",
  },
  {
    id: "faq5",
    question: "What is the scholarship situation for international students?",
    answer:
      "Many UK universities offer scholarships and funding for international students. These range from full tuition coverage to partial funding. We help identify scholarship opportunities that match your profile.",
  },
  {
    id: "faq6",
    question: "Can you help with visa applications?",
    answer:
      "While we provide guidance on visa requirements, we recommend consulting official UK Home Office resources or visa consultants for detailed immigration support. We do help with education-related documentation.",
  },
];

export default function Home() {
  const features = [
    {
      icon: GraduationCap,
      title: "World-Class Education",
      description:
        "Access to top-ranked UK universities recognized globally for academic excellence.",
    },
    {
      icon: Globe,
      title: "International Experience",
      description:
        "Study in a multicultural environment with peers from over 190 countries.",
    },
    {
      icon: BookOpen,
      title: "Diverse Programs",
      description:
        "Thousands of courses across all disciplines from undergraduate to PhD level.",
    },
    {
      icon: Zap,
      title: "Career Boost",
      description:
        "UK degree opens doors to premium career opportunities worldwide.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Full Width Background Image Slider */}
      <section className="relative w-full">
        <ImageSlider
          slides={sliderImages}
          autoPlay={true}
          interval={5000}
          height="min-h-screen sm:min-h-[600px]"
          showOverlay={true}
          overlayContent={
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <motion.div
                className="text-center text-white max-w-3xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Badge */}
                <motion.div
                  variants={itemVariants}
                  className="mb-8"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/15 backdrop-blur-md text-white rounded-lg text-sm font-semibold border-b-2 border-orange-400/60 hover:bg-orange-500/20 hover:border-orange-300 transition-all duration-300">
                    <Sparkles className="w-4 h-4 text-orange-300" />
                    <span>UK Education Specialists</span>
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
                >
                  Your Path to <span className="text-orange-300">Elite UK Universities</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  variants={itemVariants}
                  className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
                >
                  Expert guidance for undergraduate, master&apos;s, and PhD programs at the world&apos;s most prestigious institutions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Link href="/opportunities">
                    <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white">
                      Explore Opportunities
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border border-white/50 backdrop-blur-sm">
                      Schedule Consultation
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          }
        />
      </section>

      {/* Why UK Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose a UK Education?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl"
          >
            The UK offers a unique combination of academic excellence, cultural diversity, and global recognition that transforms lives.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-orange-200 transition-all"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-navy-700 rounded-2xl mt-20 text-white">
        <motion.div
          className="grid sm:grid-cols-3 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {[
            { number: "130+", label: "UK Universities" },
            { number: "50,000+", label: "Successful Students" },
            { number: "15+", label: "Years Experience" },
          ].map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <p className="text-4xl sm:text-5xl font-bold mb-2">
                {stat.number}
              </p>
              <p className="text-orange-200">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        title="Trusted by Students Worldwide"
        description="Join thousands of students who have successfully begun their UK education journey with our expert guidance"
        testimonials={testimonials}
      />

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600"
          >
            Get answers to common questions about UK university admissions
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-white border border-gray-200 rounded-lg p-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-navy-700 rounded-2xl text-white mt-20">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-serif font-bold mb-4"
          >
            Ready to Transform Your Future?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-100 mb-8"
          >
            Get started with a free consultation from our education experts today.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Start Your Journey
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
