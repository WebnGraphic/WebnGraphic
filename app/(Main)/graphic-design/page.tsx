import BookMeeting from "@/components/manual/book-meeting/book-meeting";
import { Metadata } from "next";
import BlogCommon from "../components/blog-common";
import ContactCommon from "../components/contact-common";
import Pricing from "../components/pricing";
import TestimonialSection from "../components/testimonial-section";
import GraphicFAQ from "./components/graphic-faq";
import GraphicHero from "./components/graphic-hero";
import GraphicPortfolioSection from "./components/graphic-portfolio-section";
import GraphicService from "./components/graphic-service";
import GraphicTechnology from "./components/graphic-technology";
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

export const metadata: Metadata = {
  title: "Graphic Design Services | Brand Identity & Visual Design",
  description:
    "Our graphic design services include logo design, brand identity, print design, social media graphics, and UI/UX design to help your business create a cohesive and impactful visual presence.",
  alternates: {
    canonical: "https://webngraphic.com/graphic-design",
  },
  openGraph: {
    title: "Creative Graphic Design Services | WebNGraphic",
    description:
      "Elevate your brand with our professional graphic design services including logo design, brand identity, and visual assets that capture your audience's attention.",
    url: "https://webngraphic.com/graphic-design",
    images: [
      {
        url: "opengraph/graphic-design.jpg", // Replace with your actual graphic design OG image
        width: 1200,
        height: 630,
        alt: "WebNGraphic Graphic Design Services",
      },
    ],
  },
  keywords: [
    "graphic design",
    "logo design",
    "brand identity",
    "visual design",
    "UI/UX design",
    "print design",
    "social media graphics",
  ],
};

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
      <TestimonialSection />
      <GraphicFAQ />
      <BlogCommon />
      <ContactCommon />
    </div>
  );
}
