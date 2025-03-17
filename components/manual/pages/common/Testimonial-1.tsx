/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/types/type";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      service: "Web Dev",
      name: "Alex Morgan",
      role: "Chief Product Officer",
      company: "Innovatech",
      content:
        "This platform completely transformed our workflow. The intuitive interface and powerful features have boosted our team's productivity by over 40%. I can't imagine running our operations without it now.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 2,
      name: "Samantha Chen",
      service: "Web Dev",
      role: "Marketing Director",
      company: "GrowthWave",
      content:
        "After trying countless solutions, we finally found one that actually delivers on its promises. The customer support team is incredibly responsive, and the platform itself is both powerful and easy to use.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 3,
      name: "Marcus Johnson",
      service: "Web Dev",
      role: "Startup Founder",
      company: "NexGen",
      content:
        "As a startup founder, I need tools that scale with my business. This solution has been with us from day one, adapting to our changing needs. The value for money is exceptional.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
    },
    {
      id: 4,
      name: "Priya Patel",
      service: "Web Dev",
      role: "Operations Manager",
      company: "Streamline Inc.",
      content:
        "The implementation was seamless, and the results were immediate. Our team adopted the platform quickly, and we saw ROI within the first month. It's rare to find technology that delivers such clear value.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 5,
      name: "David Wilson",
      service: "Web Dev",
      role: "CTO",
      company: "TechForward",
      content:
        "From a technical perspective, the architecture is impressive. API integration was straightforward, and performance has been rock-solid even under heavy load. This is enterprise-grade software without the enterprise complexity.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our Clients Are Saying
          </h2>
          <div className="mx-auto max-w-2xl">
            <p className="text-muted-foreground">
              Don&apos;t just take our word for it — hear from the people who
              have transformed their businesses with our solution.
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Featured testimonial */}
          <motion.div
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Card className="border-none bg-Mbg shadow-xl backdrop-blur">
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-8 md:flex-row">
                  <div className="relative shrink-0">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-background md:h-32 md:w-32">
                      <Image
                        src={"/web-design.jpg"}
                        alt={testimonials[activeIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 rounded-full bg-primary p-2 text-primary-foreground">
                      <Quote className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4 text-white flex justify-center md:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={cn(
                            "h-5 w-5",
                            i < testimonials[activeIndex].rating
                              ? "fill-white"
                              : "fill-muted"
                          )}
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="mb-4 text-lg font-medium text-white italic md:text-xl">
                      "{testimonials[activeIndex].content}"
                    </blockquote>
                    <div>
                      <p className=" text-white font-semibold">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-sm text-white">
                        {testimonials[activeIndex].role},{" "}
                        {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    index === activeIndex ? "w-6 bg-primary" : "bg-muted"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
