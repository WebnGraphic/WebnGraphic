import ResponseForm from "@/components/manual/form/ResponseForm";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function WebDevHero() {
  return (
    <div className="bg-Mbg section-background">
      <section className="w-full md:px-16 px-5 max-w-7xl mx-auto py-12 md:py-20">
        <div className="flex md:items-center flex-col md:flex-row justify-between gap-10  ">
          <div className="flex flex-col items-start space-y-6 md:space-y-8 lg:space-y-10">
            {/* Title and Breadcrumb */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl">
                Web Development
              </h1>
              <nav className="flex items-center text-sm text-[#A0AEC0]">
                <Link
                  href="/"
                  className="hover:text-[#18B3C7] transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link
                  href="/services"
                  className="hover:text-[#18B3C7] transition-colors"
                >
                  Services
                </Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-[#18B3C7]">web-development</span>
              </nav>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base md:text-lg lg:text-xl max-w-[500px]">
              We provide comprehensive digital solutions to help your business
              grow and succeed in the digital landscape.
            </p>
            <Button
              asChild
              className="bg-Ttext text-white hover:bg-TtextH active:bg-TtextA"
            >
              <Link href="/contact-us">Get Started</Link>
            </Button>
          </div>
          <div>
            <ResponseForm interest="service" />
          </div>
        </div>
      </section>
    </div>
  );
}
