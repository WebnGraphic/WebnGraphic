import { Service } from "@/types/type";
import { MousePointerClick } from "lucide-react";
import Image from "next/image";

type ServicesCardProps = {
  service: Service;
};

const CardForServicePage: React.FC<ServicesCardProps> = ({ service }) => {
  return (
    <div className="group rounded-md shadow-md cursor-pointer border-[#98A2B3] border-[0.5px] bg-Mbg overflow-hidden flex flex-col">
      <div className="relative overflow-hidden w-full">
        <Image
          className="object-contain group-hover:scale-110 transition duration-300 ease-in-out w-full h-auto"
          src={service.imageSrc}
          alt={service.name}
          width={1200}
          height={800}
        />
      </div>
      <div className="p-5 text-black flex flex-col flex-grow">
        <h3 className="md:text-xl text-lg text-white font-semibold">
          {service.name}
        </h3>
        <p className="pb-3 md:text-base text-slate-300 text-sm pt-1">
          {service.description}
        </p>
        <div className="mt-auto inline-flex">
          <div className="flex items-center text-sm md:text-base px-2 hover:scale-105 active:scale-95 duration-200 transition-all py-1 rounded-md gap-1 text-white bg-Ttext">
            <span>Learn More</span>
            <MousePointerClick className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForServicePage;
