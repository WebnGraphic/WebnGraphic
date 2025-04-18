import SectionHeader from "@/components/manual/header/section-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle, Code, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
  image: string;
};

export default function OurServices() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl px-5 md:px-12 mx-auto py-16">
        <SectionHeader
          heading="Our Expertise"
          subHeading="Crafting Innovative Digital Solutions"
        />
        <div className="mt-16 grid gap-8 ">
          <ServiceCard
            image="/web-development.jpg"
            icon={<Code className="h-12 w-12 text-Ttext" />}
            title="Web Development"
            description="Custom websites and web applications built with cutting-edge technologies to deliver exceptional user experiences."
            features={[
              "NDIS Website Development",
              "Responsive Website Design",
              "Web Application Development",
              "E-commerce Solutions",
              "Performance Optimization",
            ]}
            link="/web-development"
          />
          <ServiceCard
            image="/graphic-design.jpg"
            icon={<Palette className="h-12 w-12 text-Ttext" />}
            title="Graphic Design"
            description="Eye-catching visual designs that communicate your brand message effectively and leave a lasting impression."
            features={[
              "Brand Identity Design",
              "Print & Digital Media",
              "UI/UX Design",
              "Illustration & Iconography",
              "Marketing Materials",
            ]}
            link="/graphic-design"
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, image, features, link }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden relative group transition-all hover:shadow-md">
      <div className="flex lg:flex-row flex-col">
        <div className="image-anime group overflow-hidden h-60 lg:h-auto">
          <Image
            src={image}
            alt="Image"
            width={720}
            height={720}
            className="h-full group-hover:scale-105 duration-300 transition-all lg:w-auto w-full "
          />
        </div>
        <div className="lg:w-[60%] w-full shrink-0">
          <CardHeader className="pb-3 pt-6">
            <CardTitle className="text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="pb-3">
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-Ttext" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pt-3 pb-6">
            <Link
              href={link}
              className="flex w-full bg-Ttext hover:bg-TtextH rounded-md transition-all duration-200 py-2 px-4 justify-between items-center gap-1 text-sm font-semibold text-white "
            >
              <button className="cursor-pointer">Learn more</button>

              <ArrowRight
                size={20}
                className="transition-all mr-2 opacity-0 group-hover:opacity-100 duration-500 group-hover:translate-x-3"
              />
            </Link>

            <div className="absolute bottom-0 left-0 h-1 bg-Ttext w-0 group-hover:w-full transition-all duration-500" />
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
