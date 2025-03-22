"use client";
import { ImageUploaderClient } from "@/components/manual/input/ImageUploaderClient";

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Image Upload with Cropping
      </h1>
      <div className="max-w-md mx-auto">
        <ImageUploaderClient
          onImageUploaded={(url, publicId) => console.log(url, publicId)}
          uploadPreset="blog_image"
        />
      </div>
    </main>
  );
}
