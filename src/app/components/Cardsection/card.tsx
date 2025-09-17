// app/page.tsx  (for Next.js 13+ with /app dir)
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const items = [
  {
    id: 1,
    title: "Bedroom",
    price: "2.1 L",
    image: "/Bed.avif",
    label: "Bedroom",
  },
  {
    id: 2,
    title: "Dining",
    price: "1 L",
    image: "/Dining.avif",
    label: "Dining",
  },
  {
    id: 3,
    title: "Kitchen",
    price: "1.4 L",
    image: "/Kitchen.avif",
    label: "Kitchen",
  },
  {
    id: 4,
    title: "Bathroom",
    price: "1.8 L",
    image: "/Raquel.avif",
    label: "Bathroom",
  },
  {
    id: 5,
    title: "Living Room",
    price: "2.4 L",
    image: "/Living.avif",
    label: "Living Room",
  },
  {
    id: 6,
    title: "Office",
    price: "2.4 L",
    image: "/Office.avif",
    label: "Office",
  },
];

export default function CardPage() {
  return (
    <main className="p-6">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative min-w-[250px] h-[250px] rounded-xl overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Label (Top Left) */}
              <button className="absolute top-3 hover:bg-green-600 right-3 bg-black text-white px-3 py-1 rounded-md text-sm font-medium">
                {item.label}
              </button>

              {/* Price & Title (Bottom) */}
              <div className="absolute bottom-4 left-0 right-0  text-white px-4">
                <p className="text-3xl font-bold">{item.price}</p>
                <p className="text-2xl">Onwards</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
