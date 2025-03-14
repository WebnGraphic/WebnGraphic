import { services } from "@/components/Json";
import { Service } from "@/types/type";
import ServicesCard from "../../card/ServicesCard";

const ServiceWeProvide: React.FC = () => {
  return (
    <div className="py-16 px-5 md:px-16">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-100">
          Our <span className="text-Ttext">Services</span>
        </h2>
        <p className="text-gray-200 mt-4 md:text-lg">
          Tailored solutions designed to meet your unique needs and accelerate
          your business success.
        </p>
      </div>
      <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((service: Service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
      </div>

      <div className="text-center">
        <button className="text-Redish mt-5 md:mt-6 text-lg md:text-xl hover:underline text-center">
          View All Services
        </button>
      </div>
    </div>
  );
};

export default ServiceWeProvide;
