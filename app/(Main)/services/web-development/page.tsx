import ServiceCardNew from "@/components/manual/card/ServiceCardNew";
import CTASectionAlternative from "@/components/manual/pages/common/cta-section2";
import HowWeWork from "@/components/manual/pages/common/HowWeWork";
import AboutWebDev from "./component/AboutWebDev";
import WebDevFeature from "./component/WebDevFeature";
import WebDevHero from "./component/WebDevHero";
import WebDevPricing from "./component/WebDevPricing";
import WebDevService from "./component/WebDevService";
import WebDevTechnology from "./component/WebDevTechnology";
export default function page() {
  return (
    <div>
      <div>
        <WebDevHero />
        <AboutWebDev />
        <WebDevService />
        <CTASectionAlternative />
        <WebDevFeature />
        <WebDevTechnology />
        <HowWeWork />
        <WebDevPricing />
        <ServiceCardNew />
      </div>
    </div>
  );
}
