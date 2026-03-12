"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSlide {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ImageSliderProps {
  slides: ImageSlide[];
  autoPlay?: boolean;
  interval?: number;
  height?: string;
  showOverlay?: boolean;
  overlayContent?: React.ReactNode;
}

export default function ImageSlider({
  slides,
  autoPlay = true,
  interval = 5000,
  height = "h-96",
  showOverlay = true,
  overlayContent,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlay, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(autoPlay), 2000);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(autoPlay), 2000);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(autoPlay), 2000);
  };

  return (
    <div className={`relative w-full ${height} overflow-hidden group`}>
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${slides[current].image}')`,
            }}
          >
            {showOverlay && (
              <div className="absolute inset-0 bg-black/40">
                {overlayContent ? (
                  overlayContent
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-white">
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">
                        {slides[current].title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-100">
                        {slides[current].description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-navy-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-navy-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-orange-500 w-8"
                : "bg-white/60 hover:bg-white w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
