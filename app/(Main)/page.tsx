import BookMeeting from "@/components/manual/book-meeting/book-meeting";
import HowWeDifferent from "@/components/manual/pages/common/HowWeDifferent";
import Ourstrategy from "@/components/manual/pages/common/OurStrategy";
import Welcome from "@/components/manual/pages/home/Welcome";
import CTASection1 from "./components/cta-section-1";
import HomeHero from "./components/home-hero";
import HowWeWork from "./components/how-we-work";
import OurServices from "./components/our-service";
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
      <HowWeWork
        process={creativeProcess}
        title="Our Streamlined Process – From Vision to Completion"
      />
      <BookMeeting />
      <CTASection1
        first="Ready to Work With Us?"
        second="Get the Best for Your Business"
      />
      <Welcome />
      <Ourstrategy />
      <HowWeDifferent />
    </div>
  );
}
