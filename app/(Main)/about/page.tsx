import TopSectionStatic from "@/components/manual/header/top-section-static";
import WhyChooseUs from "../components/why-choose-us";
import AboutWelcome from "./components/about-welcome";
export default function page() {
  const breadcrumb = [{ label: "about", link: "/about" }];
  return (
    <div>
      <TopSectionStatic
        breadcrumb={breadcrumb}
        title="About US"
        description="hello this"
      />
      <AboutWelcome />
      <WhyChooseUs />
    </div>
  );
}
