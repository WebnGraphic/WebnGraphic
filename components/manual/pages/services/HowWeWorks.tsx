import Image from "next/image";
export default function HowWeWorks() {
  return (
    <div className="bg-muted">
      <section className="w-full max-w-7xl px-5 md:px-12 mx-auto py-12 md:py-24">
        <div className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How We Work
          </h2>
          <div className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Our streamlined process ensures we deliver high-quality results that
            meet your business objectives.
          </div>
          <div className="mt-6 w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/hweimage1.jpg"
            width={400}
            height={400}
            alt="Our process illustration"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-Mbg text-white">
                  1
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl text-Mbg font-bold">Discovery</h3>
                  <p className="text-muted-foreground">
                    We start by understanding your business, goals, and target
                    audience to create a tailored strategy.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-Mbg text-white">
                  2
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl text-Mbg font-bold">Planning</h3>
                  <p className="text-muted-foreground">
                    We develop a comprehensive plan with clear milestones,
                    deliverables, and timelines.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-Mbg text-white">
                  3
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl text-Mbg font-bold">Execution</h3>
                  <p className="text-muted-foreground">
                    Our team of experts executes the plan, keeping you informed
                    throughout the process.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-Mbg text-white">
                  4
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl text-Mbg font-bold">
                    Review & Launch
                  </h3>
                  <p className="text-muted-foreground">
                    We review the deliverables with you, make any necessary
                    adjustments, and launch your project.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
