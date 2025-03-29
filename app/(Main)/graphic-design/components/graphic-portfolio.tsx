"use client";

import { format } from "date-fns";
import { Calendar, Clock, Tag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import NormalButton from "@/components/manual/button/NormalButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Sample data based on the Graphicdesign model
const graphicDesigns = [
  {
    id: "1",
    title: "Modern Brand Identity",
    description:
      "A comprehensive brand identity design for a tech startup, including logo, color palette, and typography guidelines.",
    category: "logo",
    imageLink: "/placeholder.svg?height=400&width=600",
    imagePublicID: "modern-brand-identity",
    completeDate: new Date("2023-10-15"),
    featured: true,
    published: true,
    createdAt: new Date("2023-09-01"),
    updatedAt: new Date("2023-10-15"),
  },
  {
    id: "2",
    title: "Event Promotion Campaign",
    description:
      "A series of promotional materials for a major music festival, including digital and print assets.",
    category: "poster",
    imageLink: "/placeholder.svg?height=400&width=600",
    imagePublicID: "event-promotion",
    completeDate: new Date("2023-11-20"),
    featured: true,
    published: true,
    createdAt: new Date("2023-10-05"),
    updatedAt: new Date("2023-11-20"),
  },
  {
    id: "3",
    title: "Product Packaging Redesign",
    description:
      "A complete redesign of packaging for an organic food brand, focusing on sustainability and visual appeal.",
    category: "packaging",
    imageLink: "/placeholder.svg?height=400&width=600",
    imagePublicID: "packaging-redesign",
    completeDate: new Date("2023-12-10"),
    featured: false,
    published: true,
    createdAt: new Date("2023-11-01"),
    updatedAt: new Date("2023-12-10"),
  },
  {
    id: "4",
    title: "Annual Report Design",
    description:
      "A visually engaging annual report design for a financial institution, translating complex data into accessible visuals.",
    category: "publication",
    imageLink: "/placeholder.svg?height=400&width=600",
    imagePublicID: "annual-report",
    completeDate: new Date("2024-01-15"),
    featured: false,
    published: true,
    createdAt: new Date("2023-12-01"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "5",
    title: "Mobile App UI Design",
    description:
      "A clean and intuitive user interface design for a fitness tracking mobile application.",
    category: "ui",
    imageLink: "/placeholder.svg?height=400&width=600",
    imagePublicID: "app-ui-design",
    completeDate: new Date("2024-02-20"),
    featured: true,
    published: true,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-02-20"),
  },
  {
    id: "6",
    title: "Social Media Campaign",
    description:
      "A cohesive social media campaign for a fashion brand's seasonal collection launch.",
    category: "digital",
    imageLink: "/placeholder.svg?height=400&width=600",
    imagePublicID: "social-campaign",
    completeDate: new Date("2024-03-15"),
    featured: false,
    published: true,
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-03-15"),
  },
];

export default function GraphicPortfolio() {
  const [selectedDesign, setSelectedDesign] = useState<
    (typeof graphicDesigns)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowProject = (design: (typeof graphicDesigns)[0]) => {
    setSelectedDesign(design);
    setIsModalOpen(true);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our Design Portfolio
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Explore our latest graphic design projects across various categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {graphicDesigns.map((design) => (
            <Card
              key={design.id}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={design.imageLink || "/placeholder.svg"}
                  alt={design.title}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
                <Badge className={cn("absolute top-2 right-2", "bg-Ttext")}>
                  {design.category}
                </Badge>
                {design.featured && (
                  <Badge
                    variant="outline"
                    className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm"
                  >
                    Featured
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2 line-clamp-1">
                  {design.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {design.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {format(design.completeDate, "MMM yyyy")}
                </div>
                <NormalButton onClick={() => handleShowProject(design)}>
                  Show Project
                </NormalButton>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          {selectedDesign && (
            <DialogContent className="sm:max-w-[90vw] md:max-w-[700px] lg:max-w-[800px] p-0 overflow-hidden max-h-[90vh] w-[95vw]">
              <div className="relative w-full aspect-video max-h-[40vh]">
                <Image
                  src={selectedDesign.imageLink || "/placeholder.svg"}
                  alt={selectedDesign.title}
                  fill
                  className="object-cover"
                />
              </div>
              <DialogHeader className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <DialogTitle className="text-2xl font-bold">
                    {selectedDesign.title}
                  </DialogTitle>
                  <Badge className="bg-Ttext">{selectedDesign.category}</Badge>
                </div>
                <DialogDescription className="text-base text-foreground">
                  {selectedDesign.description}
                </DialogDescription>
              </DialogHeader>
              <div className="p-6 pt-0 space-y-4 overflow-y-auto max-h-[40vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Completed</p>
                      <p className="text-sm text-muted-foreground">
                        {format(selectedDesign.completeDate, "MMMM d, yyyy")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Created</p>
                      <p className="text-sm text-muted-foreground">
                        {format(selectedDesign.createdAt, "MMMM d, yyyy")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Project ID</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedDesign.imagePublicID}
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
