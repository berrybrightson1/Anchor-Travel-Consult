"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  const whatsappNumber = "447700900000"; // Update with actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Anchor%20Travel%20Consult%2C%20I%27m%20interested%20in%20UK%20education%20opportunities`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-30"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0"
      />
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
}
