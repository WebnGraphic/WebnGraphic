import Image from "next/image";
import AccordionGroup from "../../accordion/accordion-manual";
import NormalButton from "../../button/NormalButton";

const webDevProcess = [
  {
    title: "Initial Consultation",
    description:
      "We start by understanding your website’s purpose, target audience, and key goals. This stage helps us create a clear structure and content strategy.",
  },
  {
    title: "Design & Prototyping",
    description:
      "We create an attractive and user-friendly design, ensuring the website works seamlessly on all devices. Interactive prototypes give you a preview of the final look before we begin development.",
  },
  {
    title: "Building the Website",
    description:
      "We turn the design into a fully functional website, ensuring smooth navigation, responsiveness, and great performance for the best user experience.",
  },
  {
    title: "Testing & Launch",
    description:
      "We test the website thoroughly to fix any issues with speed, security, or functionality. Once everything is polished, we launch your site for the world to see.",
  },
];

export default function HowWeWork() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl w-full mx-auto md:px-12 px-5 py-16">
        <div className="flex gap-12 lg:flex-row items-start flex-col w-full">
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
              <h3 className="text-Ttext text-lg font-semibold ">
                WORK PROCESS
              </h3>
              <h2 className="text-4xl font-bold text-Mbg">
                How We Build Stunning Website-Step by Step
              </h2>

              <div className="grid relative mt-10 gap-3 md:gap-5">
                <AccordionGroup items={webDevProcess} />
              </div>

              <div className="mt-10">
                <NormalButton className="text-xl rounded-full py-4 px-10">
                  Get Started
                </NormalButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
