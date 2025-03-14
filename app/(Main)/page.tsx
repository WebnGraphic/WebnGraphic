import { auth } from "@/auth";
import ResponseForm from "@/components/manual/form/ResponseForm";
import HowWeDifferent from "@/components/manual/pages/common/HowWeDifferent";
import HomeHero from "@/components/manual/pages/home/HomeHero";
import ServiceWeProvide from "@/components/manual/pages/home/ServiceWeProvide";
import SignIn from "@/components/manual/sign-in";
import { SignOut } from "@/components/manual/sign-out";
export default async function Home() {
  const session = await auth();
  console.log(session?.user);
  return (
    <div className="bg-Mbg w-full  max-w-7xl mx-auto">
      {/*       <div className="buble-blue-left"></div>
      <div className="buble-blue"></div>
      <div className="buble-red"></div> */}
      <div className="section-background py-16  items-center flex-col md:flex-row flex w-full justify-between px-5 md:px-16 gap-8">
        <HomeHero />
        <ResponseForm interest="none" />
      </div>
      <ServiceWeProvide />
      <HowWeDifferent />
      <div className="relative">
        <SignIn />
        <SignOut />
      </div>
    </div>
  );
}
