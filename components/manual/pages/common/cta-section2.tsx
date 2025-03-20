import Link from "next/link";
import NormalButton from "../../button/NormalButton";

export default function CTASectionAlternative() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/cta2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-5 md:px-12  max-w-7xl mx-auto">
        <div className="max-w-xl">
          <div className="inline-block px-4 py-1 mb-4 border-l-4 border-Ttext bg-primary/10 backdrop-blur-sm">
            <span className="text-Ttext font-medium">
              Looking to Build a Stunning Website?
            </span>
          </div>

          <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tighter font-bold text-white mb-6 leading-tight">
            Elevate Your Online Presence with Expert Web Development
          </h2>

          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-md">
            Our team builds stunning, responsive websites tailored to your
            needs—whether starting fresh or enhancing an existing site, we turn
            your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <NormalButton className="px-5">
              <Link href="#contact">Get Started</Link>
            </NormalButton>
            <NormalButton className="px-5 bg-transparent border-white border-[1.5px] text-white hover:bg-white/10">
              <Link href="#learn-more">Learn More</Link>
            </NormalButton>
          </div>
        </div>
      </div>
    </section>
  );
}
