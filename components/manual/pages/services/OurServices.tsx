import { service1 } from "@/components/Json";

import ServiceCard from "../../card/ServicesCard";

export default function OurServices() {
  return (
    <div className="bg-white">
      <div className="py-12 md:py-24 max-w-7xl w-full mx-auto px-5 md:px-10">
        <div className="grid  gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {service1.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              points={service.points}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
