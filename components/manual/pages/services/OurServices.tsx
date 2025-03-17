import { services } from "@/components/Json";
import { Service } from "@/types/type";
import ServicesCard from "../../card/ServicesCard";

export default function OurServices() {
  return (
    <div className="bg-white">
      <div className="py-12 md:py-24 max-w-7xl w-full mx-auto px-5 md:px-10">
        <div className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Comprehensive Digital Solutions
          </h2>
          <div className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            From web development to SEO and graphic design, we offer a wide
            range of services to help your business thrive online.
          </div>
          <div className="mt-6 w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service: Service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
