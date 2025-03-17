import FaqCommon from "@/components/manual/pages/common/FaqCommon";
import StatsSection from "@/components/manual/pages/common/StatsSection";
import TestimonialSection from "@/components/manual/pages/common/Testimonial-1";
import HowWeWorks from "@/components/manual/pages/services/HowWeWorks";
import OurServices from "@/components/manual/pages/services/OurServices";
import ServicesHero from "@/components/manual/pages/services/ServicesHero";
import ServicesSlider from "@/components/manual/pages/services/ServicesSlider";
import WhyChooseOurService from "@/components/manual/pages/services/WhyChooseOurService";
export default function page() {
  const webDev = {
    title: "Web Development",
    description:
      "Building a strong online presence starts with a high-performing, visually stunning website. Get custom-designed, responsive, and SEO-friendly websites tailored to your brand’s needs. From sleek landing pages to full-scale web applications, ensure seamless user experiences across all devices. Whether for e-commerce, portfolios, or business sites, elevate your digital identity and stay ahead in the online world!",
    images: [
      "/webdev1.jpg",
      "/webdev2.jpg",
      "/webdev3.jpg",
      "/webdev4.jpg",
      "/webdev5.jpg",
      "/webdev6.jpg",
    ],
  };

  return (
    <div>
      <ServicesHero />
      <OurServices />
      <HowWeWorks />
      <WhyChooseOurService />
      <StatsSection />
      <TestimonialSection />

      <div className="relative">
        <FaqCommon />
      </div>

      <div>
        <ServicesSlider
          images={webDev.images}
          description={webDev.description}
          title={webDev.title}
        />
      </div>
    </div>
  );
}
