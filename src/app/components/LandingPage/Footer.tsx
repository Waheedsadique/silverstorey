"use client";

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footer-bg.jpg" // replace with your footer background image
          alt="Footer background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center">
        {/* Subheading */}
        <p className="text-sm md:text-base tracking-[0.2em] mb-4">
          DELIVERING COMPLICATED CRAFTSMANSHIP IS OUR EXPERTISE
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          Designs for the Bold of Heart
        </h2>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <a
            href="tel:+918336917221"
            className="bg-white text-black py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Call +91 83369 17221
          </a>

          <a
            href="#book-meeting"
            className="bg-white text-black py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Book a meeting
          </a>

          <a
            href="mailto:care@silverstorey.com"
            className="bg-white text-black py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Email - care@silverstorey.com
          </a>

          <a
            href="#free-consultation"
            className="bg-white text-black py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
