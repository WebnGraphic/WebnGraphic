import Image from "next/image";

const targets = [
  {
    icon: "/icons/thunder.png",
    title: "High Performance",
    description:
      " We build lightning-fast websites that load quickly and respond instantly to user interactions.",
  },
  {
    icon: "/icons/phone.png",
    title: "Responsive Design",
    description:
      "Our websites look and function perfectly on all devices, from desktops to smartphones.",
  },
  {
    icon: "/icons/networking.png",
    title: "Conversion-Focused",
    description:
      "We design with clear user journeys and strategic CTAs to maximize conversions and achieve your business goals.",
  },
  {
    icon: "/icons/shield.png",
    title: "Security",
    description: "We prioritize security to protect your data and your users.",
  },
  {
    icon: "/icons/mobile-user.png",
    title: "User-Centric",
    description:
      "We focus on creating intuitive and engaging user experiences.",
  },
  {
    icon: "/icons/lightbulb.png",
    title: "Innovation",
    description:
      "We leverage the latest technologies to deliver cutting-edge solutions.",
  },
  {
    icon: "/icons/optimizing.png",
    title: "24/7 Support",
    description:
      "We provide round-the-clock support to keep your systems running smoothly.",
  },
  {
    icon: "/icons/pen.png",
    title: "Customizable",
    description:
      "Our solutions are flexible and can be tailored to meet your specific needs.",
  },
];

export default function Test() {
  return (
    <section className=" bg-Mbg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10 p-5 text-white lg:max-w-[1440px] m-0 md:m-auto">
        {targets.map((card, index) => (
          <div
            key={index}
            className="flex  max-sm:flex-col-reverse group hover:scale-105 bg-Sbg p-6 rounded-2xl shadow-lg transition-transform duration-300 cursor-pointer perspective-[1000px] "
          >
            <div className="relative md:w-[70%]">
              <div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
              </div>
            </div>
            <div
              key={index}
              className="flex relative items-center transition-transform duration-400 [transform-style:preserve-3d] group-hover:rotate-20  group-hover:scale-115 group-hover:[transform:rotateY(-30deg)] md:w-[30%] justify-center"
            >
              <div className="relative h-10 w-10">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
