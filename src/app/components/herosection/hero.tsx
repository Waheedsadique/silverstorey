// src/app/components/HeroSection.tsx
import Image from "next/image";

interface HeroSectionProps {
  backgroundImage: string;
  logo?: string;
  title: string;
  subtitle?: string;
  description?: string;
  overlayOpacity?: number;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  logo,
  title,
  subtitle,
  description,
  overlayOpacity = 0.4,
  className = "",
}) => {
  return (
    <section
      className={`relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-white ${className}`}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        priority
        className="z-0"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black z-10"
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl">
        {/* Logo */}
        {logo && (
          <div className="mb-4">
            <Image
              src={logo}
              alt="Hero Logo"
              width={80}
              height={80}
              className="mx-auto w-16 h-16 md:w-20 md:h-20"
            />
          </div>
        )}

        {/* Subtitle */}
        {subtitle && (
          <h2 className="text-base md:text-lg font-semibold mb-2">
            {subtitle}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm md:text-base font-light mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
