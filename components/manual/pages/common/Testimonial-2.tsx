/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  logo?: string;
  color?: string;
}

export default function TestimonialSectionWith3D() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Chief Product Officer",
      company: "Innovatech",
      content:
        "This platform completely transformed our workflow. The intuitive interface and powerful features have boosted our team's productivity by over 40%. I can't imagine running our operations without it now.",
      avatar: "/placeholder.svg?height=400&width=400",
      rating: 5,
      logo: "/placeholder.svg?height=80&width=200",
      color: "#8b5cf6",
    },
    {
      id: 2,
      name: "Samantha Chen",
      role: "Marketing Director",
      company: "GrowthWave",
      content:
        "After trying countless solutions, we finally found one that actually delivers on its promises. The customer support team is incredibly responsive, and the platform itself is both powerful and easy to use.",
      avatar: "/placeholder.svg?height=400&width=400",
      rating: 5,
      logo: "/placeholder.svg?height=80&width=200",
      color: "#ec4899",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Startup Founder",
      company: "NexGen",
      content:
        "As a startup founder, I need tools that scale with my business. This solution has been with us from day one, adapting to our changing needs. The value for money is exceptional.",
      avatar: "/placeholder.svg?height=400&width=400",
      rating: 4,
      logo: "/placeholder.svg?height=80&width=200",
      color: "#14b8a6",
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Operations Manager",
      company: "Streamline Inc.",
      content:
        "The implementation was seamless, and the results were immediate. Our team adopted the platform quickly, and we saw ROI within the first month. It's rare to find technology that delivers such clear value.",
      avatar: "/placeholder.svg?height=400&width=400",
      rating: 5,
      logo: "/placeholder.svg?height=80&width=200",
      color: "#f59e0b",
    },
    {
      id: 5,
      name: "David Wilson",
      role: "CTO",
      company: "TechForward",
      content:
        "From a technical perspective, the architecture is impressive. API integration was straightforward, and performance has been rock-solid even under heavy load. This is enterprise-grade software without the enterprise complexity.",
      avatar: "/placeholder.svg?height=400&width=400",
      rating: 5,
      logo: "/placeholder.svg?height=80&width=200",
      color: "#3b82f6",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-Sbg overflow-hidden py-12 md:py-20"
      ref={containerRef}
    >
      <div className="max-w-5xl relative mx-auto px-4">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl text-white font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <div className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations
            with our platform.
          </div>
          <div className="mt-6 w-20 h-1 bg-white mx-auto rounded-full" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* 3D Testimonial Card */}
          <motion.div style={{ y, opacity, scale }} className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeIndex].id}
                initial={{ opacity: 0, rotateY: direction * 45 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: direction * -45 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  opacity: { duration: 0.3 },
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <Card
                  className="overflow-hidden border-none shadow-md"
                  style={{
                    boxShadow: `0 25px 50px -12px ${testimonials[activeIndex].color}20`,
                    background: `linear-gradient(135deg, ${testimonials[activeIndex].color}30, ${testimonials[activeIndex].color}20)`,
                  }}
                >
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {/* Left column - Image and info */}
                      <div className="relative flex flex-col items-center justify-center p-8 md:items-start md:p-12">
                        <div
                          className="absolute inset-0 -z-10 opacity-10"
                          style={{
                            background: `radial-gradient(circle at center, ${testimonials[activeIndex].color}40, transparent 70%)`,
                          }}
                        />

                        <div className="mb-8 flex items-center justify-center md:justify-start">
                          <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-background/50 shadow-lg md:h-24 md:w-24">
                            <Image
                              src={"/stillnotsure.jpg"}
                              alt={testimonials[activeIndex].name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="font-semibold">
                              {testimonials[activeIndex].name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonials[activeIndex].role}
                            </p>
                            <p
                              className="text-sm font-medium"
                              style={{ color: testimonials[activeIndex].color }}
                            >
                              {testimonials[activeIndex].company}
                            </p>
                          </div>
                        </div>

                        <div className="mb-6 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-5 w-5",
                                i < testimonials[activeIndex].rating
                                  ? "fill-primary text-primary"
                                  : "fill-muted text-muted"
                              )}
                            />
                          ))}
                        </div>

                        {testimonials[activeIndex].logo && (
                          <div className="mt-auto hidden md:block">
                            <div className="h-12 w-32 overflow-hidden rounded-md bg-background/50 p-2 backdrop-blur-sm">
                              <Image
                                src="/welcome1.jpg"
                                alt={`${testimonials[activeIndex].company} logo`}
                                width={120}
                                height={40}
                                className="h-full w-full object-contain"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right column - Testimonial content */}
                      <div className="flex flex-col justify-between bg-white/70 p-8 backdrop-blur-sm md:p-12">
                        <div>
                          <Quote className="mb-6 h-10 w-10 text-primary/20" />
                          <blockquote className="mb-8 text-lg font-medium leading-relaxed md:text-xl">
                            &quot;{testimonials[activeIndex].content}&quot;
                          </blockquote>
                        </div>

                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={prevTestimonial}
                              aria-label="Previous testimonial"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={nextTestimonial}
                              aria-label="Next testimonial"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>

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
                                  index === activeIndex ? "w-6" : "bg-muted"
                                )}
                                style={{
                                  backgroundColor:
                                    index === activeIndex
                                      ? testimonials[activeIndex].color
                                      : undefined,
                                }}
                                aria-label={`Go to testimonial ${index + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-2xl text-center"
        >
          <p className="mb-6 text-lg text-slate-300">
            Join hundreds of satisfied customers who have transformed their
            business with our platform.
          </p>
          <Button size="lg" className="gap-2">
            Get Started Today
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
