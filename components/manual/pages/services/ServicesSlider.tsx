"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";

interface ServicesSliderProps {
  description: string;
  images: string[];
  title: string;
}

export default function ServicesSlider({
  description,
  images,
  title,
}: ServicesSliderProps) {
  return (
    <section className="bg-white ">
      <div className="md:px-10 max-w-7xl mx-auto py-16 px-5">
        <div className=" space-y-10 ">
          <div className="space-y-4">
            <div className="flex justify-center">
              <h1 className="md:text-6xl text-3xl font-bold text-center uppercase md:w-[495px] w-[250px]">
                {title}
              </h1>
            </div>
            <div className="text-center">
              <span className="md:text-3xl font-medium text-xl">
                You bring the ideas, we’ll bring them to life.
              </span>
            </div>
          </div>
          <div className="space-y-5 md:mt-16">
            <div className="flex flex-wrap items-center">
              <h2 className="md:text-4xl pr-10 py-2 shrink-0 align-middle font-semibold text-2xl">
                {title}
              </h2>
              <button
                type="button"
                title="let's deal"
                className="flex gap-2 py-1 px-4 shrink-0 group border-2 font-bold text-[#00b1dc] border-[#00b1dc] uppercase rounded-full"
              >
                Let&apos;s Talk Details
                <span>
                  <MoveRight
                    className=" transition duration-200 group-hover:translate-x-1"
                    strokeWidth={2.25}
                  />
                </span>
              </button>
            </div>
            <div>
              <p className="text-lg/[22px] text-gray-600 w-full max-w-2xl">
                {description}
              </p>
            </div>
          </div>
          <div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnMouseEnter: true,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full relative"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 basis-1/2">
                    <div className="w-full flex flex-col rounded-2xl bg-[#00BC8F] aspect-square">
                      <div className="flex-1 relative">
                        <Image
                          className="object-cover"
                          src={image}
                          alt={`image-${index}`}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                          priority
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute md:left-3 left-1 md:p-6 bg-white/60">
                <ChevronLeft className="lg:!w-10 md:!w-6 lg:!h-10 md:!h-6 !w-4 !h-4" />
              </CarouselPrevious>
              <CarouselNext className="absolute md:right-3 right-1 md:p-6 bg-white/60">
                <ChevronRight className="lg:!w-10 md:!w-6 lg:!h-10 md:!h-6 !w-4 !h-4" />
              </CarouselNext>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
