import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  points: Array<{ name: string; link: string }>;
  imageSrc: string;
  imageAlt: string;
  href: string;
  className?: string;
}

export default function ServiceCard({
  title,
  points,
  imageSrc,
  imageAlt,
  href,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-[#E2E8F0] bg-white shadow-lg transition-all hover:shadow-xl dark:border-[#2D3748] dark:bg-[#1E1D3A]",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#16152F] dark:text-white">
          {title}
        </h3>

        <ul className="mt-3 space-y-2">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start text-sm text-[#4A5568] dark:text-[#A0AEC0]"
            >
              <span className="mr-2 text-[#18B3C7]">•</span>
              <span>{point.name}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-4 border-t border-[#E2E8F0] dark:border-[#2D3748]">
          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-[#18B3C7] hover:bg-[#14A0B2] text-white"
          >
            <Link href={href}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
