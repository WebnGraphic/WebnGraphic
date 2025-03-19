import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Briefcase,
  Globe,
  PenTool,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
export default function WebDevService() {
  return (
    <div className="bg-muted">
      <section id="services" className="w-full px-5 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Types of Websites We Create
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We specialize in creating various types of websites tailored to
                your specific business needs and goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Globe className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Corporate Websites</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional websites that establish your brand identity and
                  showcase your company&apos;s values, services, and
                  achievements.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <ShoppingCart className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>E-Commerce Stores</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fully-featured online stores with secure payment gateways,
                  inventory management, and seamless shopping experiences.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Briefcase className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Portfolio Websites</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Elegant showcases for creative professionals to display their
                  work, skills, and services to potential clients.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <PenTool className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Blog & Content Sites</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Content-focused websites with optimized layouts for
                  readability, engagement, and content discovery.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <BarChart className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Web Applications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Custom web applications with complex functionality, user
                  authentication, and data management capabilities.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Smartphone className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Progressive Web Apps</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mobile-first applications that work offline, load instantly,
                  and provide app-like experiences on any device.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
