import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <div className="bg-Mbg section-background">
      <section className=" w-full max-w-7xl mx-auto py-24 ">
        <div className=" px-5 md:px-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Our Services
              </h1>
              <div className="text-white text-xl font-semibold">
                <Link href="/">
                  <span className="text-Ttext hover:underline cursor-pointer">
                    Home
                  </span>
                </Link>

                <span> / </span>
                <span> Services</span>
              </div>
              <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl">
                We provide comprehensive digital solutions to help your business
                grow and succeed in the digital landscape.
              </p>
            </div>
            <div className="space-x-4">
              <Button
                asChild
                className="bg-Ttext text-white hover:bg-TtextH active:bg-TtextA"
              >
                <Link href="/contact-us">Get Started</Link>
              </Button>
              <Button asChild variant={"outline"}>
                <Link href="#services">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
