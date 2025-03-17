"use client";

import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          {/* Question Section */}
          <button
            onClick={() => toggleAccordion(index)}
            className="flex w-full items-center justify-between py-4 text-base font-medium text-left hover:underline"
          >
            {item.question}
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Answer Section */}
          <div
            ref={(el) => {
              if (el) contentRefs.current[0] = el;
            }}
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight:
                openIndex === index
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <div className="pb-4 text-sm text-gray-600">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
