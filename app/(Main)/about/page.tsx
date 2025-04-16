import TopSectionStatic from "@/components/manual/header/top-section-static";
import ContactCommon from "../components/contact-common";
import CTASection1 from "../components/cta-section-1";
import FaqMain from "../components/faq-main";
import TestimonialSection from "../components/testimonial-section";
import WhyChooseUs from "../components/why-choose-us";
import AboutWelcome from "./components/about-welcome";
import OurStory from "./components/our-story";
export default function page() {
  const breadcrumb = [{ label: "about", link: "/about" }];
  return (
    <div>
      <TopSectionStatic
        breadcrumb={breadcrumb}
        title="About US"
        description="Passionate about turning ideas into impactful visuals and seamless digital experiences."
      />
      <AboutWelcome />
      <OurStory />
      <WhyChooseUs />
      <CTASection1
        first="Ready to Work With Us?"
        second="Get the Best for Your Business"
      />
      <TestimonialSection />
      <FaqMain />
      <ContactCommon />
    </div>
  );
}
