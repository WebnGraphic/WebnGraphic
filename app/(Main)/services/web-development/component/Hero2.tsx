import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Hero2() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transform Your Digital Presence with Expert Web Development
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We build stunning, high-performance websites and web
                  applications that drive results for your business.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/web-development.jpg"
                width={500}
                height={500}
                alt="Web Development Illustration"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
