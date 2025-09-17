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
      className={`relative h-screen flex items-center justify-center text-white ${className}`}
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
      <div className="relative z-20 text-center px-4">
        {/* Logo */}
        {logo && (
          <div className="mb-4">
            <Image
              src={logo}
              alt="Hero Logo"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>
        )}

        {/* Subtitle */}
        {subtitle && (
          <h2 className="text-lg font-semibold mb-2">{subtitle}</h2>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm font-light mb-4">{description}</p>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-3xl  leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
