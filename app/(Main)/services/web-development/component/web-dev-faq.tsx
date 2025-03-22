/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CircleHelp, Clock, Code, CreditCard, Users, Zap } from "lucide-react";

export default function WebDevFAQ() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern" />
        <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-1/4 -right-10 w-60 h-60 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left column - Header */}
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center gap-2">
              <CircleHelp className="h-6 w-6 text-primary" />
              <Badge
                variant="outline"
                className="rounded-full px-4 py-1 text-sm font-medium"
              >
                FAQ
              </Badge>
            </div>
            <h2 className="text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our web development services.
              Can't find the answer you're looking for?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Contact our team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>

          {/* Right column - FAQ Items */}
          <div className="md:w-2/3">
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b">
                    <AccordionTrigger className="text-left font-medium">
                      What web development services do you offer?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      We offer a comprehensive range of web development services
                      including responsive website design, custom web
                      application development, e-commerce solutions, CMS
                      implementation, API development and integration,
                      progressive web apps (PWAs), and ongoing maintenance and
                      support.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="item-2" className="border-b">
                    <AccordionTrigger className="text-left font-medium">
                      How long does it take to complete a website?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Project timelines vary depending on complexity and scope.
                      A simple informational website might take 2-4 weeks, while
                      complex web applications or e-commerce sites can take 2-6
                      months. During our initial consultation, we'll provide a
                      detailed timeline based on your specific requirements.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-3" className="border-b">
                    <AccordionTrigger className="text-left font-medium">
                      What is your pricing structure?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      We offer flexible pricing options including project-based
                      quotes, hourly rates, and retainer packages. Project costs
                      depend on complexity, features, and timeline. We provide
                      detailed proposals with transparent pricing after
                      understanding your requirements. We also offer maintenance
                      packages to keep your site secure and up-to-date.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-4" className="border-b">
                    <AccordionTrigger className="text-left font-medium">
                      What technologies do you work with?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      We specialize in modern web technologies including React,
                      Next.js, Vue.js, Node.js, and TypeScript. For content
                      management, we work with WordPress, Shopify, and headless
                      CMS solutions like Contentful and Sanity. Our backend
                      expertise includes Node.js, Python, and PHP. We prioritize
                      performance, accessibility, and SEO in all our projects.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-5" className="border-b">
                    <AccordionTrigger className="text-left font-medium">
                      Do you provide ongoing support after launch?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, we offer various support and maintenance packages to
                      ensure your website remains secure, up-to-date, and
                      performing optimally. Our support services include regular
                      updates, security monitoring, performance optimization,
                      content updates, and technical support. We can tailor a
                      maintenance plan to suit your specific needs and budget.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
