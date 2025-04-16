import BookMeeting from "@/components/manual/book-meeting/book-meeting";
import BlogCommon from "../components/blog-common";
import Pricing from "../components/pricing";
import GraphicFAQ from "./components/graphic-faq";
import GraphicHero from "./components/graphic-hero";
import GraphicPortfolioSection from "./components/graphic-portfolio-section";
import GraphicService from "./components/graphic-service";
import GraphicTechnology from "./components/graphic-technology";
import GraphicTestimonial from "./components/graphic-testimonial";
import HowItsWork from "./components/how-its-work";
const pricingPlans = [
  {
    title: "Logo & Brand Identity",
    description: "Perfect for new businesses or rebranding projects",
    discountPrice: "$99",
    regularPrice: "$150",
    popularTag: false,
    points: [
      "Logo design (3 concepts)",
      "Color palette",
      "Typography selection",
      "Brand guidelines (basic)",
      "Business card design",
      "Social media profile images",
      "2 rounds of revisions",
    ],
  },
  {
    title: "Comprehensive Branding",
    description: "Complete branding solution for established businesses",
    discountPrice: "$210",
    regularPrice: "$320",
    popularTag: true,
    points: [
      "Logo design (5 concepts)",
      "Extended color palette",
      "Typography system",
      "Comprehensive brand guidelines",
      "Stationery design (cards, letterhead, etc.)",
      "Social media kit",
      "Marketing materials (basic)",
      "3 rounds of revisions",
      "1 month of design support",
    ],
  },
  {
    title: "Custom Design Package",
    description: "Tailored design solutions for specific project needs",
    discountPrice: "$399",
    regularPrice: "$490",
    popularTag: true,
    points: [
      "Custom illustration",
      "Packaging design",
      "Publication design",
      "UI/UX design",
      "Marketing campaign materials",
      "Environmental graphics",
      "Unlimited revisions",
      "Ongoing design support",
    ],
  },
];

export default function page() {
  return (
    <div>
      <GraphicHero />
      <GraphicService />
      <HowItsWork />
      <Pricing service="Graphic Design" pricing={pricingPlans} />
      <div className="bg-white">
        <BookMeeting />
      </div>
      <GraphicTechnology />
      <GraphicPortfolioSection />
      <GraphicTestimonial />
      <GraphicFAQ />
      <BlogCommon />
    </div>
  );
}
