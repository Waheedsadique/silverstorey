'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: number;
  text: string;
  author: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "From start to finish, my experience was fantastic. The complimentary 3D visualization gave me confidence in the design, and the entire process was smooth and transparent. I highly recommend their services to anyone looking for reliable interior design.",
    author: "Priya Mehta",
  },
  {
    id: 2,
    text: "I am thrilled with the exceptional service and stunning design provided by this company. Their 3D visualization allowed me to see my dream home before it was even built. The transparency and professionalism at every step were truly commendable.",
    author: "Aarti Sharma",
  },
  {
    id: 3,
    text: "The team delivered exactly what they promised. The 45-day delivery guarantee was met without any delays, and the final cost was exactly what they quoted initially. Their commitment to transparency and quality is unmatched.",
    author: "Ravi Patel",
  },
];

const CustomerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate only on medium+ screens
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    let interval: NodeJS.Timeout | null = null;

    const startAutoRotate = () => {
      if (mediaQuery.matches) {
        interval = setInterval(nextReview, 5000);
      }
    };

    startAutoRotate();

    const handleResize = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
      startAutoRotate();
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      if (interval) clearInterval(interval);
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-base font-medium text-gray-700 mb-2">
          Happy Customers
        </h2>
        <p className="text-3xl md:text-5xl font-bold mt-2 mb-10 leading-snug">
          What they&apos;re saying.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevReview}
            className="absolute left-2 md:-left-12 p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Previous review"
          >
            <svg
              className="w-7 h-7 md:w-10 md:h-10 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Review Content with animation */}
          <div className="max-w-2xl mx-auto px-10 md:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[currentIndex].id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-800">
                  &ldquo;{reviews[currentIndex].text}&rdquo;
                </p>
                <div className="h-px bg-gray-300 w-16 mx-auto mb-4"></div>
                <p className="font-semibold text-gray-900 text-lg">
                  {reviews[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextReview}
            className="absolute right-2 md:-right-12 p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Next review"
          >
            <svg
              className="w-7 h-7 md:w-10 md:h-10 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? 'bg-gray-900'
                  : 'bg-gray-300 hover:bg-gray-400'
              } transition`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerCarousel;
