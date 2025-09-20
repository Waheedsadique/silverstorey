"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { main } from "framer-motion/client";

interface Brand {
  id: number;
  name: string;
  logo: string;
  
}

const brands: Brand[] = [
  { id: 1, name: "philips", logo: "/philips.avif", },
  { id: 2, name: "hettch", logo: "/hettch.avif", },
  { id: 3, name: "greedply", logo: "/green.avif",  },
  { id: 4, name: "sony", logo: "/haveels.avif", },
  { id: 5, name: "Spotify", logo: "/asian.avif", },
];

const BrandSliders: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <main className="p-6">
        <h1 className="scroll-m-20 text-2xl sm:text-3xl  md:text-6xl  text-center tracking-tight mb-4 text-gray-800">
Our Preferred Global Brands</h1>
    <div className="w-full  py-10">
      <Slider {...settings}>
        {brands.map((brand) => (
          <motion.div
            key={brand.id}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex justify-center items-center p-4"
          >
            
            <div className="flex justify-center items-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
    </main>
  );
};

export default BrandSliders;
