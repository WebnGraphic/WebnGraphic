import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <div className="bg-Mbg">
      <div className="max-w-7xl px-5 md:px-12 py-16 mx-auto w-full">
        <h2 className="text-white text-center text-4xl lg:text-5xl font-semibold">
          Why Choose Us?
        </h2>
        <div className="flex items-center justify-center py-4">
          <div className="bg-[#696687] w-[65px] h-0.5"></div>
        </div>
        <p className="text-center text-lg text-[#C2A8E8] max-w-3xl mx-auto">
          We provide cutting-edge solutions tailored to your business needs,
          ensuring top-notch quality, innovation, and customer satisfaction.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-12">
          {/* Card 1 */}
          <div className="lg:p-[50px_40px_70px_40px] p-[35px_25px_45px_25px] w-full md:w-1/3 bg-[linear-gradient(60deg,#1B0F35_0%,#7D0AFF_100%)]">
            <div className="max-w-[85px] relative h-[85px]">
              <Image
                src="/icons/optimizing.png"
                alt="Quality Assurance"
                width={200}
                height={200}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-white font-semibold text-2xl lg:text-3xl mt-6">
              Quality Assurance
            </h3>
            <p className="text-lg text-[#C2A8E8] mt-4">
              We deliver high-quality work with attention to detail, ensuring
              every project meets top industry standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="lg:p-[50px_40px_70px_40px] p-[35px_25px_45px_25px] w-full md:w-1/3 bg-[linear-gradient(45deg,#3000FF_0%,#18D6FF_100%)]">
            <div className="max-w-[85px] relative h-[85px]">
              <Image
                src="/icons/pen.png"
                alt="Innovation & Creativity"
                width={200}
                height={200}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-white font-semibold text-2xl lg:text-3xl mt-6">
              Innovation & Creativity
            </h3>
            <p className="text-lg text-[#B6F1F6] mt-4">
              We stay ahead of trends, implementing innovative solutions to give
              your business a competitive edge.
            </p>
          </div>

          {/* Card 3 */}
          <div className="lg:p-[50px_40px_70px_40px] p-[35px_25px_45px_25px] w-full md:w-1/3 bg-[linear-gradient(120deg,#6CE8FF_0%,#FFFFFF_100%)]">
            <div className="max-w-[85px] relative h-[85px]">
              <Image
                src="/icons/thunder.png"
                alt="24/7 Support"
                width={200}
                height={200}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-[#1A181B] font-semibold text-2xl lg:text-3xl mt-6">
              24/7 Support
            </h3>
            <p className="text-lg text-[#333] mt-4">
              Our dedicated team is available around the clock to assist you
              with any queries and ensure smooth operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
