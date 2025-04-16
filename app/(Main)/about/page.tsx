import TopSectionStatic from "@/components/manual/header/top-section-static";
import { Metadata } from "next";
import ContactCommon from "../components/contact-common";
import CTASection1 from "../components/cta-section-1";
import FaqMain from "../components/faq-main";
import TestimonialSection from "../components/testimonial-section";
import WhyChooseUs from "../components/why-choose-us";
import AboutWelcome from "./components/about-welcome";
import OurStory from "./components/our-story";

export const metadata: Metadata = {
  title: "About Us | Our Web & Design Expertise",
  description:
    "Learn about WebNGraphic's team of experienced web developers and graphic designers who are passionate about creating digital solutions that help businesses succeed online.",
  alternates: {
    canonical: "https://webngraphic.com/about",
  },
  openGraph: {
    title: "About WebNGraphic | Our Story & Expertise",
    description:
      "Meet our team of web development and graphic design experts who are dedicated to helping businesses establish a strong online presence.",
    url: "https://webngraphic.com/about",
    images: [
      {
        url: "opengraph/about.jpg",
        width: 1200,
        height: 630,
        alt: "WebNGraphic Team",
      },
    ],
  },
};

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
