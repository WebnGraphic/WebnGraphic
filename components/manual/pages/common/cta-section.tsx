import Link from "next/link";
import NormalButton from "../../button/NormalButton";

export default function CTASection() {
  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/ctabg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 max-w-4xl mx-auto">
        <h3 className="text-lg md:text-xl font-medium text-Ttext mb-2">
          Looking for exclusive services?
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4">
          Get The Best For Your Business
        </h2>
        <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl">
          Our team provides top-notch services tailored to elevate your
          business. From cutting-edge solutions to personalized support, we
          ensure your success every step of the way.
        </p>
        <NormalButton className="px-8 rounded-full bg-Ttext py-3 text-base">
          <Link href="#contact">Get Started Today</Link>
        </NormalButton>
      </div>
    </section>
  );
}
