import BookMeeting from "@/components/manual/book-meeting/book-meeting";
import BlogCommon from "./components/blog-common";
import CTASection1 from "./components/cta-section-1";
import FaqMain from "./components/faq-main";
import HomeHero from "./components/home-hero";
import HowWeWork from "./components/how-we-work";
import OurServices from "./components/our-service";
import PortfolioSection from "./components/portfolio";
import Testimonial from "./components/testimonial";
import WhyChooseUs from "./components/why-choose-us";
const creativeProcess = [
  {
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your goals, audience, and vision. This phase helps us create a solid plan for design and development.",
  },
  {
    title: "Creative Design",
    description:
      "We craft visually stunning and user-friendly designs that align with your brand identity, ensuring a great user experience.",
  },
  {
    title: "Execution & Development",
    description:
      "We turn designs into reality—whether it's coding a website, refining graphics, or finalizing assets for branding and marketing.",
  },
  {
    title: "Review & Finalization",
    description:
      "We refine the work based on feedback, ensuring everything is polished and ready for delivery, whether it's a launch or final design files.",
  },
];

export default async function Home() {
  return (
    <div>
      <HomeHero />
      <OurServices />
      <WhyChooseUs />
      <HowWeWork
        process={creativeProcess}
        title="Our Streamlined Process – From Vision to Completion"
      />
      <div className="bg-muted">
        <BookMeeting />
      </div>

      <PortfolioSection />
      <Testimonial />

      <CTASection1
        first="Ready to Work With Us?"
        second="Get the Best for Your Business"
      />
      <BlogCommon />
      <FaqMain />
    </div>
  );
}
