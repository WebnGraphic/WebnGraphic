"use client";
import NormalButton from "@/components/manual/button/NormalButton";
import MainHeader from "@/components/manual/header/main-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useState } from "react";
import WebDevProject from "./project-webdev";
import ShowCaseModal from "./showcase-modal";

type ProjectData = {
  id: string;
  title: string;
  mission: string;
  category: string;
  client: string;
  completeDate: Date;
  demoUrl: string;
  overView: string;
  features: string[];
  technologies: string[];
  testimonial: { quote: string; author: string };
  images: { url: string; publicId: string }[];
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};
interface WebDevProjectCardProps {
  webDevProjects: ProjectData[];
}

export default function ProtfolioContent({
  webDevProjects,
}: WebDevProjectCardProps) {
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const project = webDevProjects.find((item) => item.id === currentProject);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-5 py-16 md:px-12">
        <MainHeader
          small="Our Work"
          big="Explore our successful projects across industries."
        ></MainHeader>

        <Tabs defaultValue="web-development" className="w-ful mt-12 w-full">
          <TabsList className="flex flex-wrap justify-center mx-auto gap-2 sm:gap-3 p-1 rounded-full bg-muted/20">
            <TabsTrigger
              value="web-development"
              className="px-3 py-4 sm:px-6 sm:py-5 rounded-full data-[state=active]:text-white cursor-pointer data-[state=active]:bg-Ttext bg-white font-medium hover:text-white hover:bg-Ttext/80 transition-all text-sm sm:text-base"
            >
              Web Development
            </TabsTrigger>
            <TabsTrigger
              value="graphic-design"
              className="px-3 py-4 sm:px-6 sm:py-5 rounded-full data-[state=active]:text-white cursor-pointer data-[state=active]:bg-Ttext bg-white font-medium hover:text-white hover:bg-Ttext/80 transition-all text-sm sm:text-base"
            >
              Graphic Design
            </TabsTrigger>
            <TabsTrigger
              value="web-design"
              className="px-3 py-4 sm:px-6 sm:py-5 rounded-full data-[state=active]:text-white cursor-pointer data-[state=active]:bg-primary bg-white font-medium hover:text-white hover:bg-Ttext/80 transition-all text-sm sm:text-base"
            >
              Web Design
            </TabsTrigger>
          </TabsList>
          <TabsContent value="web-development" className="mt-12">
            <WebDevProject
              setCurrentProject={setCurrentProject}
              setModalOpen={setModalOpen}
              webDevProjects={webDevProjects}
            />
          </TabsContent>
          <TabsContent value="graphic-design">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              hello
            </div>
          </TabsContent>
          <TabsContent value="web-design">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-10">
          <Link href="/portfolio">
            <NormalButton>View All Projects</NormalButton>
          </Link>
        </div>
      </div>
      {modalOpen && project && (
        <ShowCaseModal project={project} setModalOpen={setModalOpen} />
      )}
    </div>
  );
}
