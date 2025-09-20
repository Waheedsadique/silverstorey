// components/ConsultationCTA.tsx
import React from 'react';

const BookC: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center p-8 min-h-[300px] text-center">
      <h1 className=" scroll-m-20 text-2xl sm:text-3xl md:text-6xl  tracking-tight mb-4 text-gray-800">
        Book your free Consultation
      </h1>
      <p className="text-lg md:text-xl mb-8 mt-4 ">
        {"It's time to live your dreams!"}
      </p>
      <button className="px-8 animate-bounce hover:scale-105 hover:bg-black hover:text-white  py-3 rounded-full border border-gray-600  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-300 ease-in-out">
        Book Now
      </button>
    </section>
  );
};

export default BookC;
