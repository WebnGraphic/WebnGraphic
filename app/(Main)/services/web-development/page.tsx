import ServiceCardNew from "@/components/manual/card/ServiceCardNew";
import CTASectionAlternative from "@/components/manual/pages/common/cta-section2";
import HowWeWork from "../../components/how-we-work";
import AboutWebDev from "./component/AboutWebDev";
import Hero2 from "./component/Hero2";
import WebDevFAQ from "./component/web-dev-faq";
import WebDevFeature from "./component/WebDevFeature";
import WebDevHero from "./component/WebDevHero";
import WebDevPricing from "./component/WebDevPricing";
import WebDevService from "./component/WebDevService";
import WebDevTechnology from "./component/WebDevTechnology";
const webDevProcess = [
  {
    title: "Initial Consultation",
    description:
      "We start by understanding your website’s purpose, target audience, and key goals. This stage helps us create a clear structure and content strategy.",
  },
  {
    title: "Design & Prototyping",
    description:
      "We create an attractive and user-friendly design, ensuring the website works seamlessly on all devices. Interactive prototypes give you a preview of the final look before we begin development.",
  },
  {
    title: "Building the Website",
    description:
      "We turn the design into a fully functional website, ensuring smooth navigation, responsiveness, and great performance for the best user experience.",
  },
  {
    title: "Testing & Launch",
    description:
      "We test the website thoroughly to fix any issues with speed, security, or functionality. Once everything is polished, we launch your site for the world to see.",
  },
];

export default function page() {
  return (
    <div>
      <div>
        <WebDevHero />
        <Hero2 />
        <AboutWebDev />
        <WebDevService />
        <CTASectionAlternative />
        <WebDevFeature />
        <WebDevTechnology />
        <HowWeWork
          process={webDevProcess}
          title="How We Build Stunning Website-Step by Step"
        />
        <WebDevPricing />
        <WebDevFAQ />
        <ServiceCardNew />
      </div>
    </div>
  );
}
