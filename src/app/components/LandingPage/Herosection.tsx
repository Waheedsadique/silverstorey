import HeroSection from "../herosection/hero";



export default function HeroPage() {
  return (
    <HeroSection
      backgroundImage="/bg.avif"
      logo="/logo.png"
      title="India's Fastest Growing Interior Design Brand"
      subtitle="Silver Storey"
      description="INTRODUCING THE SILVER STOREY LIVING"
      overlayOpacity={0.5}
    />
  );
}