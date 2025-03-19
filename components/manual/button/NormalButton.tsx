"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface NormalButtonProps {
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

export default function NormalButton({
  children,
  className,
  iconClassName,
}: NormalButtonProps) {
  return (
    <button
      className={cn(
        "group flex bg-Ttext hover:bg-TtextH active:bg-TtextA duration-300 cursor-pointer text-white items-center gap-2 rounded-md px-4 py-2 font-medium transition-all",
        className
      )}
    >
      <span className="leading-1">{children}</span>
      <ArrowRight
        className={cn(
          "h-5 w-5 mt-0.5 transition-transform duration-300 group-hover:translate-x-1",
          iconClassName
        )}
      />
    </button>
  );
}
