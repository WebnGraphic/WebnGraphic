import ResponseForm from "@/components/manual/form/ResponseForm";
import HowWeDifferent from "@/components/manual/pages/common/HowWeDifferent";
import HomeHero from "@/components/manual/pages/home/HomeHero";
import ServiceWeProvide from "@/components/manual/pages/home/ServiceWeProvide";
import Welcome from "@/components/manual/pages/home/Welcome";

export default async function Home() {
  return (
    <div className="bg-Mbg w-full  max-w-7xl mx-auto">
      <div className="section-background py-16  items-center flex-col md:flex-row flex w-full justify-between px-5 md:px-16 gap-8">
        <HomeHero />
        <ResponseForm interest="none" />
      </div>
      <Welcome />
      <ServiceWeProvide />
      <HowWeDifferent />
    </div>
  );
}
