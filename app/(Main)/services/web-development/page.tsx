import HowWeWork from "@/components/manual/pages/common/HowWeWork";
import AboutWebDev from "./component/AboutWebDev";
import WebDevFocus from "./component/WebDevFocus";
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
        <WebDevTechnology />
        <WebDevFocus />
        <HowWeWork />
        <WebDevPricing />
      </div>
    </div>
  );
}
