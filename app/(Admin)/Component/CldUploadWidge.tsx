"use client";
import { CldUploadWidget } from "next-cloudinary";

// Define the type for the onImageUpload function
type ImageUploadProps = {
  onImageUpload: (publicId: string, imageLink: string) => void;
};

export default function ImageUpload({ onImageUpload }: ImageUploadProps) {
  return (
    <div>
      <div>
        <CldUploadWidget
          signatureEndpoint="/api/sign-cloudinary-params"
          options={{
            sources: ["local"],
            multiple: false,
            cropping: true,
            croppingAspectRatio: 16 / 9,
            clientAllowedFormats: ["jpg", "png", "webp"],
          }}
          onSuccess={(results) => {
            if (results.info) {
              const info = results.info;
              if (info && typeof info !== "string") {
                const publicId = info.public_id;
                const imageLink = info.secure_url;
                onImageUpload(publicId, imageLink);
              }
            }
          }}
        >
          {({ open }) => {
            return <button onClick={() => open()}>Upload an Image</button>;
          }}
        </CldUploadWidget>
      </div>
    </div>
  );
}
