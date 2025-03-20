import Image from "next/image";
import NormalButton from "../../button/NormalButton";
export default function OurServices() {
  return (
    <div className="bg-Mbg">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row">
          {/* Web Design */}
          <div className="lg:p-[50px_40px_70px_40px] p-[35px_25px_45px_25px] w-full md:w-1/3 bg-[linear-gradient(60deg,#1B0F35_0%,#7D0AFF_100%)]">
            <div>
              <div className="max-w-[85px] relative h-[85px]">
                <Image
                  src="/service/agency_icon1.png"
                  alt="Web Design"
                  width={200}
                  height={200}
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="text-white font-semibold tracking-tighter text-3xl lg:text-4xl mt-9">
                Web Design
              </h2>
            </div>
            <div className="flex items-center py-4">
              <div className="bg-[#696687] w-[65px] h-0.5"></div>
            </div>
            <div>
              <p className="text-lg text-[#C2A8E8]">
                We craft visually appealing and user-friendly website designs
                that enhance user experience and engagement.
              </p>
            </div>
            <div className="mt-6">
              <NormalButton className="px-6 py-2 hover:ring-[2px] ring-[#C2A8E8] bg-[#4C1D95] text-white rounded-full hover:bg-[#37126D] transition">
                Learn More
              </NormalButton>
            </div>
          </div>

          {/* Web Development */}
          <div className="lg:p-[50px_40px_70px_40px] p-[35px_25px_45px_25px] w-full md:w-1/3 bg-[linear-gradient(45deg,#3000FF_0%,#18D6FF_100%)]">
            <div>
              <div className="max-w-[85px] relative h-[85px]">
                <Image
                  src="/service/agency_icon2.png"
                  alt="Web Development"
                  width={200}
                  height={200}
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="text-white tracking-tighter font-semibold text-3xl lg:text-4xl mt-9">
                Web Development
              </h2>
            </div>
            <div className="flex items-center py-4">
              <div className="bg-[#696687] w-[65px] h-0.5"></div>
            </div>
            <div>
              <p className="text-lg text-[#9CE3EC]">
                We build fast, responsive, and scalable websites using modern
                technologies to enhance performance.
              </p>
            </div>
            <div className="mt-6">
              <NormalButton className="px-6 py-2 hover:ring-[2px] ring-[#9CE3EC] bg-[#0648A1] text-white rounded-full hover:bg-[#043275] transition">
                Learn More
              </NormalButton>
            </div>
          </div>

          {/* Graphic Design */}
          <div className="lg:p-[50px_40px_70px_40px] p-[35px_25px_45px_25px] w-full md:w-1/3 bg-[linear-gradient(120deg,#6CE8FF_0%,#FFFFFF_100%)]">
            <div>
              <div className="max-w-[85px] relative h-[85px]">
                <Image
                  src="/service/agency_icon3.png"
                  alt="Graphic Design"
                  width={200}
                  height={200}
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="text-[#1A181B] font-semibold tracking-tighter text-3xl lg:text-4xl mt-9">
                Graphic Design
              </h2>
            </div>
            <div className="flex items-center py-4">
              <div className="bg-[#696687] w-[65px] h-0.5"></div>
            </div>
            <div>
              <p className="text-lg text-[#1A181B]">
                We create stunning graphics and branding materials that make
                your business stand out.
              </p>
            </div>
            <div className="mt-6">
              <NormalButton className="px-6 py-2 hover:ring-[2px] ring-[#6CE8FF] bg-[#1A181B] text-white rounded-full hover:bg-[#000000] transition">
                Learn More
              </NormalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
