"use client";
import { format } from "date-fns";
import { CheckCircle, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

interface ShowcaseModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  project: Project;
}

export default function ShowCaseModal({
  project,
  setModalOpen,
}: ShowcaseModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 z-50"
      onClick={() => setModalOpen(false)} // Click outside to close modal
    >
      {/* Modal Container */}
      <div
        className="relative bg-white w-full max-w-4xl rounded-lg shadow-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button (Now Absolute Inside Modal) */}
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-4 z-[100] cursor-pointer hover:bg-black/50 right-4 bg-black/60 text-white rounded-full p-2  transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image Header */}
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={project.images[0].url}
            alt={project.title}
            fill
            className="object-cover h-full w-full rounded-t-lg"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          {/* Black Overlay for Better Readability */}
          <div className="absolute inset-0 bg-black/50 rounded-t-lg" />

          <div className="absolute inset-0 flex items-end mb-6 justify-between md:px-10 px-6 text-white z-10">
            <div className="max-w-md">
              {project.featured && (
                <span className="bg-Ttext text-white text-xs font-semibold py-1 px-3 rounded mb-2 inline-block">
                  Featured{" "}
                </span>
              )}

              <h2 className="text-2xl md:text-3xl font-bold">
                {project.title}
              </h2>
              <p className="text-sm opacity-90">{project.mission}</p>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <span className="font-semibold mr-2">Complete:</span>
              {format(new Date(project.completeDate), "MMM d, yyyy")}
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Client:</span>{" "}
              {project.client}
            </div>
          </div>

          {/* Overview */}
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="text-gray-700 text-sm md:text-base">
            {project.overView}
          </p>

          {/* Features */}
          <h3 className="text-xl font-semibold mt-6 mb-3">
            Key Features of {project.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-Ttext h-5 w-5" />
                <span className="text-gray-700 text-sm md:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <h3 className="text-xl font-semibold mt-6 mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-Ttext/5 p-5 rounded-lg mt-6">
            <blockquote className="text-gray-700 italic text-sm md:text-base">
              &quot;{project.testimonial.quote}&quot;
            </blockquote>
            <p className="text-indigo-900 font-semibold text-sm mt-2">
              — {project.testimonial.author}
            </p>
          </div>

          {/* Live Demo Button */}
          <div className="flex mt-6">
            <Link
              href={project.demoUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-Ttext text-white rounded-md text-sm font-semibold hover:bg-[#0093dc] transition"
              target="_blank"
            >
              Live Demo
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
