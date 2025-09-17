

"use client"; // if you're using Next.js App Router

import React from "react";
import { motion } from "framer-motion";

interface StatItemProps {
  value: string;
  label: string;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, index }) => (
  <motion.div
    className="text-left"
    initial={{ opacity: 0, x: -50 }} // start hidden & left
    animate={{ opacity: 1, x: 0 }} // move to normal position
    transition={{ duration: 0.6, delay: index * 0.2 }} // staggered animation
  >
    <p className="text-4xl font-bold text-gray-800">{value}</p>
    <p className="text-gray-600 mt-2">{label}</p>
  </motion.div>
);

const StatisticsCard: React.FC = () => {
  const stats = [
    { value: "60+", label: "Satisfactory Customers" },
    { value: "50000", label: "Square Feet Transformed" },
    { value: "30+", label: "Expert Team Members" },
    { value: "15", label: "Years of Experience" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsCard;
