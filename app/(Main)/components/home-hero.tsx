import NormalButton from "@/components/manual/button/NormalButton";
import ResModTrigBtn from "@/components/manual/button/ResModTrigBtn";
import ResponseForm from "@/components/manual/form/ResponseForm";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <div className="section-background ">
      <div className="py-16 max-w-7xl mx-auto items-center flex-col md:flex-row flex w-full justify-between px-5 md:px-12 gap-8">
        <div className="relative hidden md:block z-10 ">
          <div className="flex  flex-col items-center md:items-start text-center md:text-left max-w-4xl mx-auto">
            <h1 className="uppercase text-6xl font-bold text-Ttext">
              Create Your Digital Future
            </h1>
            <p className="text-white mt-6 text-xl md:text-2xl lg:text-2xl max-w-2xl">
              We provide expert web development, web design, and graphic design
              solutions tailored to elevate your brand and create a strong
              digital presence.
            </p>
            <div className="flex justify-center md:justify-start gap-4 items-center mt-5 md:mt-8">
              <ResModTrigBtn>
                <NormalButton>Work With Us </NormalButton>
              </ResModTrigBtn>

              <NormalButton className="bg-transparent border-White hover:shadow-lg active:scale-95 active:bg-white hover:shadow-white hover:bg-white hover:text-black border-[2px]">
                <Link href="/portfolio">View Our Works</Link>
              </NormalButton>
            </div>
          </div>
        </div>
        <div className="relative md:hidden z-10 pb-20 px-6">
          <div className="max-w-[270px] mx-auto flex flex-col items-center md:items-start text-center md:text-left">
            <div className="h-[250px] mb-10 w-full relative">
              <div className="absolute z-11 top-0 left-0">
                <div className="w-[170px] h-[150px] overflow-hidden rounded-md relative ">
                  <Image
                    src="/hwdimage.jpg"
                    fill
                    priority
                    className="object-cover w-full h-full"
                    alt="web dev"
                  />
                </div>
              </div>

              <div className=" w-[170px] h-[150px] animated-element border-Ttext border-4 overflow-hidden rounded-md absolute inset-0 z-10 m-auto"></div>

              <div className="absolute z-12 bottom-0 right-0">
                <div className="overflow-hidden rounded-md w-[170px] h-[150px] relative ">
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

            {/* Title */}
            <h1 className="uppercase text-3xl font-bold text-Ttext">
              Create Your Digital Future
            </h1>

            {/* Subheading */}
            <p className="text-gray-300 mt-4 text-lg md:text-xl lg:text-2xl max-w-3xl">
              We provide expert web development, web design, and graphic design
              solutions tailored to elevate your brand and create a strong
              digital presence.
            </p>

            {/* Decorative Line */}
            <div className="w-20 h-1 bg-white mt-6 md:mt-8"></div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 items-center mt-6 md:mt-8">
              <ResModTrigBtn>
                <NormalButton>Work With Us </NormalButton>
              </ResModTrigBtn>

              <NormalButton className="bg-transparent border-White hover:shadow-lg active:scale-95 active:bg-white hover:shadow-white hover:bg-white hover:text-black border-[2px]">
                <Link href="/portfolio">View Our Works</Link>
              </NormalButton>
            </div>
          </div>
        </div>

        <ResponseForm interest="none" />
      </div>
    </div>
  );
}
