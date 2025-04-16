import TopSectionStatic from "@/components/manual/header/top-section-static";
import CTASection1 from "../components/cta-section-1";
import TestimonialSection from "../components/testimonial-section";
import ProjectGraphic from "./components/project-graphic";
import ProjectWebDev from "./components/project-web-dev";
export default function Page() {
  return (
    <div>
      <TopSectionStatic
        title="Testimonial"
        description="A curated collection of web and graphic design work that blends strategy, aesthetics, and functionality."
        breadcrumb={[{ label: "portfolio", link: "/portfolio" }]}
      />
      <ProjectWebDev />
      <ProjectGraphic />
      <CTASection1
        first="Ready to Work With Us?"
        second="Get the Best for Your Business"
      />
      <TestimonialSection />
    </div>
  );
}
