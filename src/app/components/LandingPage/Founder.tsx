// components/FoundersSection.tsx
import Image from "next/image";

interface Founder {
  name: string;
  imageSrc: string;
  description: string;
}

const founders: Founder[] = [
  {
    name: "Palak Singhania",
    imageSrc: "/palak-singhania.avif",
    description: "",
  },
  {
    name: "Subham Bhattacharya",
    imageSrc: "/subham-bhattacharya.avif",
    description: "",
  },
];

const FoundersSection: React.FC = () => {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Creative Founders</h2>
      {/* Always row, wrap on small screens */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {founders.map((founder) => (
          <div
            key={founder.name}
            className="flex flex-col items-center w-72 sm:w-80 md:w-96"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-lg mb-4">
              <Image
                src={founder.imageSrc}
                alt={founder.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">
              {founder.name}
            </h3>
            {founder.description && (
              <p className="text-gray-600 text-sm sm:text-base">
                {founder.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoundersSection;
