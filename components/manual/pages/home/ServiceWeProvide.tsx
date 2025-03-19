import { service1 } from "@/components/Json";
import ServiceCard from "../../card/ServicesCard";

const ServiceWeProvide: React.FC = () => {
  return (
    <div className="py-16 bg-background px-5 md:px-12">
      <div className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Our Services
        </h2>
        <div className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Tailored solutions designed to meet your unique needs and accelerate
          your business success.
        </div>
        <div className="mt-6 w-20 h-1 bg-primary mx-auto rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service1.map((service) => (
            <ServiceCard
              key={service.title}
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
};

export default ServiceWeProvide;
