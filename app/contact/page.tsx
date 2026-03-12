"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/ui/combobox";
import CountrySearch from "@/components/country-search";
import { submitContactForm } from "./actions";

const SUBJECT_OPTIONS = [
  { value: "undergraduate", label: "Undergraduate Inquiry" },
  { value: "masters", label: "Masters Program" },
  { value: "phd", label: "PhD Opportunity" },
  { value: "general", label: "General Question" },
];

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

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await submitContactForm(formData);

    if (result.success) {
      toast.success(result.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        subject: "general",
        message: "",
      });
    } else {
      toast.error(result.message);
    }

    setIsLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const whatsappLink = `https://wa.me/447700900000?text=Hi%20Anchor%20Travel%20Consult%2C%20I%27d%20like%20to%20discuss%20UK%20education%20opportunities.`;

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl"
            >
              Have questions about UK universities? Our education experts are here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid sm:grid-cols-3 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* WhatsApp */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="p-8 bg-green-50 rounded-xl border border-green-200 hover:shadow-lg transition-all text-center"
            whileHover={{ y: -4 }}
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              WhatsApp
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Quick chat with our team
            </p>
            <span className="text-green-600 font-semibold text-sm">
              Chat Now →
            </span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:info@anchortravelconsult.com"
            variants={itemVariants}
            className="p-8 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all text-center"
            whileHover={{ y: -4 }}
          >
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm mb-4">
              Detailed inquiry via email
            </p>
            <span className="text-blue-600 font-semibold text-sm">
              Send Email →
            </span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+447700900000"
            variants={itemVariants}
            className="p-8 bg-orange-50 rounded-xl border border-orange-200 hover:shadow-lg transition-all text-center"
            whileHover={{ y: -4 }}
          >
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 text-sm mb-4">
              Speak directly with our team
            </p>
            <span className="text-orange-600 font-semibold text-sm">
              Call Now →
            </span>
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+44 1234 567890"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <CountrySearch
                value={formData.country}
                onChange={(value) =>
                  setFormData({ ...formData, country: value })
                }
              />
              <p className="text-xs text-gray-500 mt-1">
                Start typing to see country suggestions
              </p>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Inquiry Subject
              </label>
              <Combobox
                items={SUBJECT_OPTIONS}
                value={formData.subject}
                onChange={(value) =>
                  setFormData({ ...formData, subject: value })
                }
                placeholder="Select subject..."
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your education goals..."
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>

        {/* Office Locations */}
        <motion.div
          className="mt-20 grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            {
              location: "London Office",
              address: "123 Oxford Street, London, W1D 1LL, UK",
              phone: "+44 20 XXXX XXXX",
              email: "london@anchortravelconsult.com",
            },
            {
              location: "New Delhi Office",
              address: "456 Connaught Place, New Delhi, 110001, India",
              phone: "+91 11 XXXX XXXX",
              email: "delhi@anchortravelconsult.com",
            },
          ].map((office, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl border border-gray-200"
            >
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {office.location}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{office.address}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <a href={`tel:${office.phone}`} className="text-navy-600 hover:underline block">
                  {office.phone}
                </a>
                <a href={`mailto:${office.email}`} className="text-navy-600 hover:underline block">
                  {office.email}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
