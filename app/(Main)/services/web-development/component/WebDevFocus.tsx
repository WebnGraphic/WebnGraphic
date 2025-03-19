import { BarChart, Smartphone, Zap } from "lucide-react";
import Image from "next/image";
export default function WebDevFocus() {
  return (
    <div className="bg-muted">
      <div>
        <section id="approach" className="w-full px-5 md:px-12 py-12 md:py-16 ">
          <div className="max-w-7xl mx-auto ">
            <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/swdf.jpg"
                  width={550}
                  height={550}
                  alt="Our Approach"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Our Main Target for Website Building
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    We focus on creating websites that not only look great but
                    also drive business results through:
                  </p>
                </div>
                <ul className="grid gap-6">
                  <li className="flex bg-Sbg p-5 rounded-lg items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Zap className="h-5 w-5 text-background" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl text-white font-bold">
                        Performance Optimization
                      </h3>
                      <p className="text-muted">
                        We build lightning-fast websites that load quickly and
                        respond instantly to user interactions.
                      </p>
                    </div>
                  </li>
                  <li className="flex bg-Sbg p-5 rounded-lg items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Smartphone className="h-5 w-5 text-white" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl text-white font-bold">
                        Responsive Design
                      </h3>
                      <p className="text-muted">
                        Our websites look and function perfectly on all devices,
                        from desktops to smartphones.
                      </p>
                    </div>
                  </li>
                  <li className="flex bg-Sbg p-5 rounded-lg items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <BarChart className="h-5 w-5 text-white" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl text-white font-bold">
                        Conversion-Focused
                      </h3>
                      <p className="text-muted">
                        We design with clear user journeys and strategic CTAs to
                        maximize conversions and achieve your business goals.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
