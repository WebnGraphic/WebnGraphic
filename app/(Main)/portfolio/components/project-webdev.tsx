"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type Project = {
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

interface webDevProjectProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentProject: Dispatch<SetStateAction<string | null>>;
  webDevProjects: Project[];
}

export default function WebDevProject({
  webDevProjects,
  setCurrentProject,
  setModalOpen,
}: webDevProjectProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {webDevProjects.map((project) => (
        <Card
          key={project.id}
          className="group relative py-0 pb-6 gap-2 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
        >
          <div className="relative">
            {project.featured && (
              <div className="absolute left-2 top-2 z-10">
                <div className="rounded-full bg-primary/80 px-4 py-1 text-xs text-primary-foreground backdrop-blur-xl">
                  Featured
                </div>
              </div>
            )}

            <Image
              onClick={() => {
                setCurrentProject(project.id);
                setModalOpen(true);
              }}
              src={project.images[0].url}
              width={400}
              height={300}
              alt={project.title}
              className="h-48 w-full group-hover:scale-105 duration-300 transition-all cursor-pointer object-cover"
            />
          </div>

          <CardHeader className="px-4 pt-4">
            <h3
              onClick={() => {
                setCurrentProject(project.id);
                setModalOpen(true);
              }}
              className="font-bold cursor-pointer text-xl line-clamp-2 leading-tight"
            >
              {project.title}
            </h3>
            <p className="text-Mbg">{project.category}</p>
          </CardHeader>

          <CardContent className="px-5">
            <p className=" line-clamp-2 text-muted-foreground">
              {project.overView}
            </p>

            <div className="mb-2 mt-3 flex flex-wrap gap-1">
              {project.technologies.slice(0, 5).map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 5 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 5} more
                </Badge>
              )}
            </div>
          </CardContent>

          <CardFooter className="px-5 align-bottom mt-auto pt-0">
            <div className="border-t border-gray-100 pt-3 w-full flex ">
              <div
                onClick={() => {
                  setCurrentProject(project.id);
                  setModalOpen(true);
                }}
                className="flex !w-full cursor-pointer justify-between items-center gap-1 text-sm font-semibold text-Ttext hover:text-TtextH transition-colors duration-200"
              >
                <button className="cursor-pointer">View Details</button>

                <ArrowRight
                  size={25}
                  className="transition-all opacity-0 group-hover:opacity-100 duration-500 group-hover:translate-x-3"
                />
              </div>
            </div>
            {/*             <Button
              onClick={() => {
                setCurrentProject(project.id);
                setModalOpen(true);
              }}
              className="text-sm font-semibold"
              size="sm"
            >
              View Details
            </Button> */}
          </CardFooter>
          <div className="absolute bottom-0 left-0 h-1 bg-Ttext w-0 group-hover:w-full transition-all duration-500" />
        </Card>
      ))}
    </div>
  );
}
