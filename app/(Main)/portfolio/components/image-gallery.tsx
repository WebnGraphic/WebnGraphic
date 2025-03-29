"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Sample image data
const images = [
  {
    id: 1,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Project 1",
    title: "E-commerce Website",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Project 2",
    title: "Portfolio Design",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Project 3",
    title: "Mobile App UI",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Project 4",
    title: "Corporate Website",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Project 5",
    title: "Blog Platform",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=300&width=400",
    alt: "Project 6",
    title: "Dashboard Interface",
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (id: number) => {
    setSelectedImage(id);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    // Restore body scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <div className="relative">
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            onClick={() => openImage(image.id)}
          >
            <div className="relative h-64">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3">
                <h3 className="text-white font-medium">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeImage}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={closeImage}
            >
              <X size={32} />
            </button>

            <div className="relative h-[80vh]">
              {images.map(
                (image) =>
                  image.id === selectedImage && (
                    <Image
                      key={image.id}
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-contain"
                    />
                  )
              )}
            </div>

            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="text-xl font-bold">
                {images.find((img) => img.id === selectedImage)?.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
