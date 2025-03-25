import AccordionGroup from "@/components/manual/accordion/accordion-manual";
import NormalButton from "@/components/manual/button/NormalButton";
import ResModTrigBtn from "@/components/manual/button/ResModTrigBtn";
import MainHeader from "@/components/manual/header/main-header";
import Image from "next/image";

type ProcessItem = {
  title: string;
  description: string;
};

type HowWeWorkProps = {
  process: ProcessItem[];
  title: string;
};

export default function HowWeWork({ process, title }: HowWeWorkProps) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl w-full mx-auto md:px-12 px-5 py-16">
        <div className="flex gap-12 lg:flex-row items-center lg:items-start flex-col w-full">
          <div className="lg:w-1/2 max-w-2xl w-full ">
            <div className=" overflow-hidden rounded-md w-full relative ">
              <Image
                src="/hww.png"
                width={550}
                height={550}
                className="object-contain w-full h-full"
                alt="web dev"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full ">
            <div className=" space-y-3">
              <MainHeader small="WORK PROCESS" big={title} />
              <div className="grid relative mt-10 gap-3 md:gap-5">
                <AccordionGroup items={process} />
              </div>

              <div className="mt-10">
                <ResModTrigBtn>
                  <NormalButton className="md:text-xl text-base py-2 rounded-full md:py-4 px-5 md:px-10">
                    Get Started
                  </NormalButton>
                </ResModTrigBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
