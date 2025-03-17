"use client";

import { cn } from "@/lib/utils";
import { BarChart, CheckCircle, Clock, Layers, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
export default function WhyChooseOurService() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const features = [
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Lightning Fast",
      description:
        "Our solutions are optimized for speed, ensuring your business operates efficiently without delays.",
    },
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: "Quality Guaranteed",
      description:
        "Every product and service we offer undergoes rigorous quality testing before reaching you.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "24/7 Support",
      description:
        "Our dedicated team is available around the clock to assist you whenever you need help.",
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "All-in-One Solution",
      description:
        "Get all your digital needs met under one roof, ensuring consistent branding and seamless integration across platforms.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Client-Focused Approach",
      description:
        "We collaborate closely with you to understand your goals and deliver solutions that exceed your expectations.",
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Proven Results",
      description:
        "Our portfolio showcases successful projects that have helped businesses like yours achieve significant growth online.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-12 md:py-24 overflow-hidden px-5 mx-auto md:px-12 w-full max-w-7xl">
        <div className="relative">
          <div className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Why Choose <span className="text-primary">Us</span>
            </h2>
            <div className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver
              exceptional value that sets us apart from the competition.
            </div>
            <div className="mt-6 w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  "relative group rounded-xl p-8 transition-all duration-300 bg-Sbg border border-border",
                  hoveredCard === index
                    ? "shadow-lg scale-[1.02] z-10 border-Ttext"
                    : "hover:shadow-md"
                )}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0 }} // Increased y offset for better effect
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }} // Triggers animation when 30% of the card is visible
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }} // Stagger effect
              >
                <div className="relative z-10">
                  <div
                    className={cn(
                      "mb-5 inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300",
                      hoveredCard === index
                        ? "text-black bg-white"
                        : "text-muted-foreground bg-muted"
                    )}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl text-white font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>

                {/* Decorative corner accent */}
                <div
                  className={cn(
                    "absolute top-0 right-0 w-16 h-16 transition-opacity duration-300 overflow-hidden rounded-tr-xl rounded-bl-[100px]",
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="absolute inset-0 bg-Ttext" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Ready to experience the difference?
              </h3>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
