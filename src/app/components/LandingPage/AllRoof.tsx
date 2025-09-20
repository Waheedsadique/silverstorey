import { Hammer, Layers, Wrench, Sofa, Lamp, Feather } from "lucide-react";

const services = [
  { icon: Wrench, label: "Civil Work" },
  { icon: Layers, label: "Modular" },
  { icon: Hammer, label: "Carpentry" },
  { icon: Sofa, label: "Furnishing" },
  { icon: Lamp, label: "Lighting" },
  { icon: Feather, label: "Decor" },
];

export default function AllUnderOneRoof() {
  return (
    <section className="py-16 text-center bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12">All Under One Roof</h2>

      {/* Icons + Labels */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12">
        {services.map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex flex-col items-center space-y-3">
            {/* Icon with hover + pointer */}
            <div className="cursor-pointer hover:text-blue-600 transition-transform hover:scale-110">
              <Icon size={48} strokeWidth={1.5} />
            </div>
            {/* Label */}
            <p className="text-base font-medium text-gray-700">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
