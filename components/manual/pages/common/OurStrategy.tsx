import NormalButton from "@/components/manual/button/NormalButton";
import { Check } from "lucide-react";
import Image from "next/image";
export default function Ourstrategy() {
  const points = [
    "User Experience Focused",
    "Fast Performance",
    "Secure & Reliable",
    "Responsive Design",
    "SEO Optimized",
    "Future-Proof Solutions",
    "Creative Design",
    "Retina Ready",
  ];
  return (
    <div className="bg-white">
      <div className="max-w-7xl w-full mx-auto py-16">
        <div className="flex gap-12 lg:flex-row lg:items-start items-center flex-col w-full">
          <div className="lg:w-1/2 max-w-2xl w-full ">
            <div className="relative w-full h-full">
              <Image
                src="/ourstrategy.jpg"
                alt="image"
                width={1000}
                height={1500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full ">
            <div className=" space-y-3 px-5 md:px-0 md:pr-12">
              <h3 className="text-Ttext text-lg capitalize font-semibold ">
                Our Strategic Vision
              </h3>
              <h2 className="text-4xl font-bold text-Mbg">
                Transforming Ideas into Reality
              </h2>
              <p className="text-lg text-slate-700">
                We craft innovative strategies that blend creativity and
                functionality, ensuring impactful and visually compelling
                results tailored to your brand’s success.
              </p>
              <div>
                {points.map((item, index) => (
                  <div className="flex gap-3 items-center" key={index}>
                    <Check className="w-4 h-4 text-Ttext" />
                    <h4 className="text-lg text-slate-700">{item}</h4>
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
