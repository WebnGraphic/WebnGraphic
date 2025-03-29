type ProcessCardProps = {
  number: string;
  title: string;
  description: string;
  isLeft: boolean;
};
export default function OurProcess() {
  return (
    <div>
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We follow a proven methodology to deliver exceptional results
            </p>
          </div>

          <div className="mt-16">
            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-border" />
              <div className="space-y-12">
                <ProcessStep
                  number="01"
                  title="Discovery & Planning"
                  description="We start by understanding your business goals, target audience, and project requirements to create a solid foundation."
                  isLeft={true}
                />
                <ProcessStep
                  number="02"
                  title="Design & Prototyping"
                  description="Our designers create wireframes and visual concepts that align with your brand and meet user needs."
                  isLeft={false}
                />
                <ProcessStep
                  number="03"
                  title="Development & Implementation"
                  description="Our development team brings the designs to life with clean, efficient code and attention to detail."
                  isLeft={true}
                />
                <ProcessStep
                  number="04"
                  title="Testing & Refinement"
                  description="We thoroughly test all aspects of your project to ensure quality, performance, and usability."
                  isLeft={false}
                />
                <ProcessStep
                  number="05"
                  title="Launch & Support"
                  description="After launch, we provide ongoing support and maintenance to keep your digital assets performing at their best."
                  isLeft={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessStep({ number, title, description, isLeft }: ProcessCardProps) {
  return (
    <div
      className={`relative flex ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className="flex-1" />
      <div className="flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-Ttext text-lg font-bold text-primary-foreground">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <div
          className={`mx-4 rounded-xl bg-muted p-6 shadow-sm ${
            isLeft ? "text-left" : "text-right"
          }`}
        >
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
