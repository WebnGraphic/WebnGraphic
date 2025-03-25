import NormalButton from "@/components/manual/button/NormalButton";
import Image from "next/image";
export default function HomeHero2() {
  return (
    <div className="bg-gradient-to-br from-blue-600/10 to-white">
      <div className="max-w-7xl w-full mx-auto md:px-12 px-5 py-16">
        <div className="flex gap-12 lg:flex-row-reverse lg:items-start items-center flex-col w-full">
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
            <div className=" space-y-3">
              <h3 className="text-Ttext text-lg font-semibold ">
                WELCOME TO WEBNGRAPHIC
              </h3>
              <h2 className="text-4xl font-bold text-Mbg">
                ELEVATE YOUR DIGITAL PRESENCE
              </h2>
              <p className="text-lg text-slate-700">
                At WebNGraphic, we design and develop stunning websites that
                elevate brands. Our team blends creativity with technology to
                deliver seamless digital experiences, ensuring your online
                presence stands out.
              </p>
              <div className="grid grid-cols-3 mt-10 gap-3 md:gap-5">
                {/* Experience Card */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl p-1 h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-slate-900  mb-2">
                      5+
                    </h3>
                    <p className="text-slate-600 max-w-20 text-center font-medium">
                      Year Of Experience
                    </p>
                  </div>
                </div>

                {/* Projects Card */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl p-1 h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-slate-900  mb-2">
                      20+
                    </h3>
                    <p className="text-slate-600 max-w-20 text-center font-medium">
                      Countries
                    </p>
                  </div>
                </div>

                {/* Clients Card */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-teal-500  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl p-1 h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-slate-900  mb-2">
                      500+
                    </h3>
                    <p className="text-slate-600 max-w-20 text-center font-medium">
                      Satisfied Client
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <NormalButton className="bg-Ttext py-3 px-5 rounded-md text-xl text-white cursor-pointer hover:bg-TtextH ">
                  Get Started
                </NormalButton>
                <NormalButton className="bg-white border-black border-[2px] text-black">
                  View Our Work
                </NormalButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
