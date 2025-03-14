import TwHomeHero from "@/components/manual/typwritter/HomeHeroTw";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export default function HomeHero() {
  return (
    <div>
      <div className="relative hidden md:block z-10 ">
        <div className="flex  flex-col items-center md:items-start text-center md:text-left max-w-4xl mx-auto">
          <TwHomeHero />
          <p className="text-Ttext mt-6 text-xl md:text-2xl lg:text-4xl max-w-2xl">
            We offer web solutions, graphic design, SEO, and marketing tailored
            to your business goals.
          </p>

          <div className="flex justify-center md:justify-start gap-4 items-center mt-5 md:mt-8">
            <span className="text-xl md:text-2xl lg:text-3xl text-white cursor-pointer">
              Work With Us
            </span>

            <SquareArrowOutUpRight className="bg-[#fc1c69] text-white p-3 rounded-[20px] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 hover:scale-110 transition-transform duration-200 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="relative md:hidden z-10  pb-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative pb-5">
            <Image
              src="/herobg.png"
              className="w-full h-auto"
              alt="bg"
              width={1200}
              height={720}
            ></Image>
          </div>

          {/* Title */}
          <TwHomeHero />

          {/* Subheading */}
          <p className="text-gray-300 mt-4 text-lg md:text-xl lg:text-2xl max-w-3xl">
            Transform your ideas into reality with our expertise in web
            development, branding, and digital marketing.
          </p>

          {/* Decorative Line */}
          <div className="w-20 h-1 bg-[#fc1c69] mt-6 md:mt-8"></div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 items-center mt-6 md:mt-8">
            {/* Work With Us Button */}
            <button className="bg-[#fc1c69] text-white px-6 py-3 text-lg md:text-xl rounded-xl font-semibold shadow-lg flex items-center gap-3 hover:scale-105 transition-transform duration-200">
              Work With Us
              <SquareArrowOutUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
