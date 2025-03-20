import NormalButton from "@/components/manual/button/NormalButton";
import { Check } from "lucide-react";
import Image from "next/image";

const points = [
  "Custom, Template-Free Solutions",
  "Fast, SEO-Ready Websites",
  "User-Centric, Stunning Designs",
  "Integrated Brand Experience",
  "Scalable Development & Support",
  "Innovative Designs that Stand Out",
];

export default function HowWeDifferent() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl w-full mx-auto md:px-12 px-5 py-16">
        <div className="flex gap-12 lg:flex-row lg:items-start items-center flex-col w-full">
          <div className="lg:w-1/2 max-w-2xl w-full ">
            <div className="md:h-[510px] h-[400px] relative">
              <div className="absolute z-11 top-0 left-0">
                <div className="md:w-[340px] md:h-[320px] w-[250px] h-[230px] overflow-hidden rounded-md relative ">
                  <Image
                    src="/hwdimage.jpg"
                    fill
                    priority
                    className="object-cover w-full h-full"
                    alt="web dev"
                  />
                </div>
              </div>

              <div className="md:w-[340px] animated-element md:h-[320px] w-[250px] h-[230px] border-Ttext border-4 overflow-hidden rounded-md absolute inset-0 z-10 m-auto"></div>

              <div className="absolute z-12 bottom-0 right-0">
                <div className="md:w-[340px] md:h-[320px] overflow-hidden rounded-md w-[250px] h-[230px] relative ">
                  <Image
                    src="/swda.jpg"
                    fill
                    priority
                    className="object-cover w-full h-full"
                    alt="web dev"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full ">
            <div className="space-y-3">
              <h3 className="text-Ttext text-lg font-semibold ">
                WHAT WE OFFER
              </h3>
              <h2 className="text-4xl capitalize font-bold text-Mbg">
                Tailored Web & Design Solutions to Boost Your Brand
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {points.map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative p-5 bg-white  rounded-lg shadow-xl h-full flex flex-col transform transition-all duration-500 group-hover:-translate-y-2">
                      <div>
                        <Check />
                        <h4 className="text-xl font-semibold">{item}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <NormalButton className="bg-Ttext py-3 px-5 rounded-md text-xl text-white cursor-pointer hover:bg-TtextH ">
                  Learn More
                </NormalButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
