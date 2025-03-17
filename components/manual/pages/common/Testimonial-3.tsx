/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Linkedin,
  Pause,
  Play,
  Quote,
  Star,
  Twitter,
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
  featured: boolean;
  videoUrl?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  tags?: string[];
  industry?: string;
}

export default function EnhancedTestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alexandra Morgan",
      role: "Chief Product Officer",
      company: "Innovatech Solutions",
      content:
        "This platform completely transformed our workflow. The intuitive interface and powerful features have boosted our team's productivity by over 40%. I can't imagine running our operations without it now. The ROI has been incredible, and our stakeholders are thrilled with the results.",
      avatar: "/placeholder.svg?height=400&width=400",
      rating: 5,
      featured: true,
      videoUrl: "#video-testimonial-1",
      socialLinks: {
        twitter: "#twitter",
        linkedin: "#linkedin",
        website: "#website",
      },
      tags: ["Enterprise", "SaaS", "Productivity"],
      industry: "Technology",
    },
    {
      id: 2,
      name: "Samantha Chen",
      role: "Marketing Director",
      company: "GrowthWave Media",
      content:
        "After trying countless solutions, we finally found one that actually delivers on its promises. The customer support team is incredibly responsive, and the platform itself is both powerful and easy to use. It's helped us scale our marketing efforts without scaling our team size.",
      avatar: "/placeholder.svg?height=400&width=400",
      rating: 5,
      featured: true,
      socialLinks: {
        linkedin: "#linkedin",
      },
      tags: ["Marketing", "Analytics", "Growth"],
      industry: "Media",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Startup Founder",
      company: "NexGen Ventures",
      content:
        "As a startup founder, I need tools that scale with my business. This solution has been with us from day one, adapting to our changing needs. The value for money is exceptional, and it's given us enterprise-level capabilities on a startup budget.",
      avatar: "/placeholder.svg?height=400&width=400",
      rating: 4,
      featured: false,
      videoUrl: "#video-testimonial-3",
      tags: ["Startup", "Scalability", "Cost-effective"],
      industry: "Technology",
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Operations Manager",
      company: "Streamline Inc.",
      content:
        "The implementation was seamless, and the results were immediate. Our team adopted the platform quickly, and we saw ROI within the first month. It's rare to find technology that delivers such clear value without a steep learning curve.",
      avatar: "/placeholder.svg?height=400&width=400",
      rating: 5,
      featured: false,
      tags: ["Operations", "Implementation", "Team Adoption"],
      industry: "Manufacturing",
    },
    {
      id: 5,
      name: "David Wilson",
      role: "CTO",
      company: "TechForward",
      content:
        "From a technical perspective, the architecture is impressive. API integration was straightforward, and performance has been rock-solid even under heavy load. This is enterprise-grade software without the enterprise complexity or price tag.",
      avatar: "/placeholder.svg?height=400&width=400",
      rating: 5,
      featured: true,
      socialLinks: {
        twitter: "#twitter",
        website: "#website",
      },
      tags: ["Technical", "API", "Performance"],
      industry: "Software",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<"carousel" | "grid" | "showcase">(
    "showcase"
  );
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
  const rotation = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]);

  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden py-24" ref={containerRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(120,120,255,0.1),transparent_50%)]"></div>
      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[100px]"></div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 px-4 py-1 text-sm font-medium text-primary"
          >
            Client Success Stories
          </Badge>
          <h2 className="mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Trusted by Industry Leaders
          </h2>
          <div className="mx-auto max-w-2xl">
            <p className="text-lg text-muted-foreground">
              Join hundreds of businesses that have transformed their operations
              and achieved remarkable results with our platform.
            </p>
          </div>
        </motion.div>

        <Tabs
          defaultValue="showcase"
          className="mb-12"
          onValueChange={(value) => setViewMode(value as any)}
        >
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="showcase">Showcase</TabsTrigger>
              <TabsTrigger value="carousel">Carousel</TabsTrigger>
              <TabsTrigger value="grid">Grid</TabsTrigger>
            </TabsList>
          </div>

          {/* Showcase View */}
          <TabsContent value="showcase" className="mt-8">
            <div className="relative mx-auto max-w-6xl">
              <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 mx-auto max-w-4xl"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Card className="overflow-hidden border-none bg-gradient-to-br from-background/90 to-background/70 shadow-2xl backdrop-blur-lg">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-5">
                          {/* Left column - Image and company info */}
                          <div className="relative col-span-2 flex flex-col bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                            <div className="absolute -right-6 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 rotate-45 bg-background/90 md:block"></div>
                            <div className="mb-6 flex items-center gap-2">
                              {currentTestimonial.tags?.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="bg-background/50"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="relative mx-auto mb-6 aspect-square w-40 overflow-hidden rounded-full border-4 border-background/50 shadow-lg md:w-48">
                              <Image
                                src={
                                  currentTestimonial.avatar ||
                                  "/placeholder.svg"
                                }
                                alt={currentTestimonial.name}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-110"
                              />
                            </div>

                            <div className="mt-auto text-center">
                              <div className="mb-2 flex justify-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={cn(
                                      "h-5 w-5",
                                      i < currentTestimonial.rating
                                        ? "fill-primary text-primary"
                                        : "fill-muted text-muted"
                                    )}
                                  />
                                ))}
                              </div>
                              <p className="font-semibold">
                                {currentTestimonial.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {currentTestimonial.role}
                              </p>
                              <div className="mt-1 flex items-center justify-center gap-1">
                                <Badge
                                  variant="outline"
                                  className="bg-background/50"
                                >
                                  {currentTestimonial.company}
                                </Badge>
                                {currentTestimonial.industry && (
                                  <Badge
                                    variant="outline"
                                    className="bg-background/50"
                                  >
                                    {currentTestimonial.industry}
                                  </Badge>
                                )}
                              </div>

                              {currentTestimonial.socialLinks && (
                                <div className="mt-4 flex justify-center gap-2">
                                  {currentTestimonial.socialLinks.twitter && (
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      asChild
                                      className="h-8 w-8"
                                    >
                                      <a
                                        href={
                                          currentTestimonial.socialLinks.twitter
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <Twitter className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  )}
                                  {currentTestimonial.socialLinks.linkedin && (
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      asChild
                                      className="h-8 w-8"
                                    >
                                      <a
                                        href={
                                          currentTestimonial.socialLinks
                                            .linkedin
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <Linkedin className="w-4 h-4" />
                                      </a>
                                    </Button>
                                  )}
                                  {currentTestimonial.socialLinks.website && (
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      asChild
                                      className="h-8 w-8"
                                    >
                                      <a
                                        href={
                                          currentTestimonial.socialLinks.website
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <ExternalLink className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Right column - Testimonial content */}
                          <div className="col-span-3 flex flex-col justify-between p-8">
                            <div>
                              <div className="mb-6 flex justify-between">
                                <Quote className="h-10 w-10 text-primary/20" />
                                {currentTestimonial.videoUrl && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="gap-2"
                                  >
                                    <Play className="h-4 w-4" />
                                    Watch Video
                                  </Button>
                                )}
                              </div>
                              <blockquote className="mb-8 text-lg font-medium leading-relaxed md:text-xl">
                                "{currentTestimonial.content}"
                              </blockquote>
                            </div>

                            <div className="mt-auto">
                              <div className="flex items-center justify-between">
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
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    aria-label={
                                      isPlaying
                                        ? "Pause autoplay"
                                        : "Start autoplay"
                                    }
                                  >
                                    {isPlaying ? (
                                      <Pause className="h-4 w-4" />
                                    ) : (
                                      <Play className="h-4 w-4" />
                                    )}
                                  </Button>
                                </div>

                                <div className="flex items-center gap-2">
                                  {testimonials.map((_, index) => (
                                    <button
                                      key={index}
                                      onClick={() => setActiveIndex(index)}
                                      className={cn(
                                        "h-2 w-2 rounded-full transition-all",
                                        index === activeIndex
                                          ? "w-6 bg-primary"
                                          : "bg-muted"
                                      )}
                                      aria-label={`Go to testimonial ${
                                        index + 1
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Floating company logos */}
              <div className="pointer-events-none absolute -bottom-12 left-0 right-0 mx-auto hidden justify-center gap-8 md:flex">
                {testimonials.map((testimonial, index) => {
                  if (index === activeIndex) return null;

                  // Calculate position based on index relative to active index
                  const position = index - activeIndex;
                  const isLeft = position < 0;
                  const distance = Math.abs(position);

                  return (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 0.7 - distance * 0.15,
                        scale: 0.9 - distance * 0.05,
                        x: isLeft ? -80 * distance : 80 * distance,
                        y: 30 * distance,
                        rotateZ: isLeft ? -8 * distance : 8 * distance,
                      }}
                      whileHover={{ scale: 0.95, opacity: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="cursor-pointer"
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className="flex h-16 w-40 items-center justify-center rounded-lg border bg-background/80 p-3 shadow-md backdrop-blur">
                        <p className="text-center font-semibold">
                          {testimonial.company}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* Carousel View */}
          <TabsContent value="carousel" className="mt-8">
            <div className="relative mx-auto max-w-6xl overflow-hidden">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="absolute left-4 z-10 h-10 w-10 rounded-full bg-background/80 shadow-md backdrop-blur-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <div className="w-full overflow-hidden px-12">
                  <div className="flex gap-6">
                    <AnimatePresence initial={false} mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full flex-shrink-0"
                      >
                        <Card className="overflow-hidden border-none bg-gradient-to-br from-background/90 to-background/70 shadow-xl backdrop-blur-lg">
                          <CardContent className="p-8">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                              <div className="flex flex-col items-center md:items-start">
                                <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20">
                                  <Image
                                    src={
                                      currentTestimonial.avatar ||
                                      "/placeholder.svg"
                                    }
                                    alt={currentTestimonial.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="mb-2 text-center md:text-left">
                                  <p className="font-semibold">
                                    {currentTestimonial.name}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {currentTestimonial.role},{" "}
                                    {currentTestimonial.company}
                                  </p>
                                </div>
                                <div className="mb-4 flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={cn(
                                        "h-4 w-4",
                                        i < currentTestimonial.rating
                                          ? "fill-primary text-primary"
                                          : "fill-muted text-muted"
                                      )}
                                    />
                                  ))}
                                </div>
                                {currentTestimonial.tags && (
                                  <div className="flex flex-wrap gap-2">
                                    {currentTestimonial.tags.map((tag) => (
                                      <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="bg-primary/5"
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </div>

                              <div className="col-span-2">
                                <Quote className="mb-4 h-8 w-8 text-primary/20" />
                                <blockquote className="text-lg font-medium">
                                  "{currentTestimonial.content}"
                                </blockquote>
                                {currentTestimonial.videoUrl && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-6 gap-2"
                                  >
                                    <Play className="h-4 w-4" />
                                    Watch Video
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="absolute right-4 z-10 h-10 w-10 rounded-full bg-background/80 shadow-md backdrop-blur-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "h-2 w-2 rounded-full transition-all",
                      index === activeIndex ? "w-6 bg-primary" : "bg-muted"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Grid View */}
          <TabsContent value="grid" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Card
                    className={cn(
                      "h-full transition-all duration-300 hover:shadow-lg",
                      testimonial.featured ? "border-primary/20" : ""
                    )}
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 border border-primary/10">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              {testimonial.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-3 w-3",
                                i < testimonial.rating
                                  ? "fill-primary text-primary"
                                  : "fill-muted text-muted"
                              )}
                            />
                          ))}
                        </div>
                      </div>

                      <blockquote className="mb-4 line-clamp-4 text-sm">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="mt-auto flex flex-wrap gap-2">
                        {testimonial.tags?.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {testimonial.featured && (
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-xs"
                          >
                            Featured
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 shadow-lg backdrop-blur-sm">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold">
                Trusted by businesses worldwide
              </h3>
              <p className="text-muted-foreground">
                Our platform is helping companies achieve remarkable results
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Active Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">
                  Satisfaction Rate
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">40%</p>
                <p className="text-sm text-muted-foreground">
                  Avg. Productivity Boost
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">
                  Industries Served
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
