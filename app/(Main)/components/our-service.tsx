import { service2 } from "@/components/Json";
import ServiceCard from "@/components/manual/card/service-card";
import MainHeader from "@/components/manual/header/main-header";

export default function OurServices() {
  return (
    <div className=" bg-gray-100 ">
      <div className="max-w-7xl px-5 md:px-12 mx-auto py-16">
        <MainHeader
          small="OUR EXPERTISE"
          big="Crafting Innovative Digital solutions"
        />

        <div className="grid mt-8 md:grid-cols-2 gap-6 md:gap-8 lg:grid-cols-3">
          {service2.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
