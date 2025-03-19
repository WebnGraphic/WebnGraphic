import { Lightbulb, ListChecks, Map, Rocket } from "lucide-react";
import Image from "next/image";

export default function HowWeWorks() {
  return (
    <div className="bg-white">
      <section className="w-full max-w-7xl  mx-auto">
        <div className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white tracking-tight sm:text-5xl md:text-6xl bg-clip-text ">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-[#A0AEC0] max-w-2xl mx-auto">
            Our streamlined process ensures we deliver high-quality results that
            meet your business objectives.
          </p>
          <div className="mt-6 w-20 h-1 bg-gradient-to-r from-[#18B3C7] to-[#4DD8E8] mx-auto rounded-full" />
        </div>

        <div className="mx-auto py-10 flex w-full rounded-2xl overflow-hidden items-start ">
          <div className="relative w-1/3 shrink-0 ">
            <Image
              src="/howweworkservice.jpg"
              width={600}
              height={600}
              alt="Our process illustration"
              className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-center space-y-6">
            <div>
              <div>Hello</div>
            </div>
            <ul className="grid gap-8">
              {[
                {
                  icon: <Lightbulb className="w-6 h-6 " />,
                  title: "Discovery",
                  description:
                    "We start by understanding your business, goals, and target audience to create a tailored strategy.",
                },
                {
                  icon: <Map className="w-6 h-6 " />,
                  title: "Planning",
                  description:
                    "We develop a comprehensive plan with clear milestones, deliverables, and timelines.",
                },
                {
                  icon: <ListChecks className="w-6 h-6 " />,
                  title: "Execution",
                  description:
                    "Our team of experts executes the plan, keeping you informed throughout the process.",
                },
                {
                  icon: <Rocket className="w-6 h-6 " />,
                  title: "Review & Launch",
                  description:
                    "We review the deliverables with you, make any necessary adjustments, and launch your project.",
                },
              ].map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-6 p-6 bg-[#25244A] rounded-xl hover:bg-[#2E2D5A] transition-all duration-300"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c0ccdc] text-Mbg">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[#A0AEC0]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
