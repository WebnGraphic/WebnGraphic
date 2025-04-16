import BookMeeting from "@/components/manual/book-meeting/book-meeting";
import BlogCommon from "../components/blog-common";
import OurFeature from "../components/our-feature";
import PortfolioSection from "../components/portfolio";
import Pricing from "../components/pricing";
import TestimonialSection from "../components/testimonial-section";
import WebDevFAQ from "./component/web-dev-faq";
import WebDevProcess from "./component/web-dev-process";
import WebDevService from "./component/web-dev-service";
import WebDevHero from "./component/WebDevHero";
import WebDevTechnology from "./component/WebDevTechnology";
const pricingPlans = [
  {
    title: "Basic",
    description:
      "Perfect for small businesses looking to establish an online presence",
    discountPrice: "$499",
    regularPrice: "$650",
    popularTag: false,
    points: [
      "5-page responsive website",
      "Mobile optimization",
      "Basic SEO setup",
      "Contact form",
      "Content management system",
      "Social media integration",
      "1 round of revisions",
    ],
  },
  {
    title: "Business",
    description:
      "Ideal for growing businesses with specific functionality needs",
    discountPrice: "$999",
    regularPrice: "$1200",
    popularTag: true,
    points: [
      "10-15 page responsive website",
      "Advanced SEO optimization",
      "Custom contact forms",
      "Blog/news section",
      "Newsletter integration",
      "Google Analytics setup",
      "Performance optimization",
      "3 rounds of revisions",
      "1 month of support",
    ],
  },
  {
    title: "Custom",
    description:
      "Tailored solutions for businesses requiring complex functionality",
    discountPrice: "$2199",
    regularPrice: "$2500",
    popularTag: true,
    points: [
      "Custom web application",
      "User authentication system",
      "Database design & integration",
      "API development",
      "Third-party integrations",
      "Advanced security features",
      "Comprehensive testing",
      "Unlimited revisions",
      "6 months of priority support",
    ],
  },
];

export default function page() {
  return (
    <div>
      <WebDevHero />
      <WebDevService />
      <WebDevProcess />
      <Pricing pricing={pricingPlans} service="Web Development" />
      <div className="bg-white">
        <BookMeeting />
      </div>
      <WebDevTechnology />
      <OurFeature />
      <PortfolioSection />
      <TestimonialSection />
      <WebDevFAQ />
      <BlogCommon />
    </div>
  );
}
