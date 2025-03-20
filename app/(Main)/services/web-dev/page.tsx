/* eslint-disable react/no-unescaped-entities */
import {
  Check,
  Code,
  Database,
  Globe,
  Layout,
  Lightbulb,
  MessageSquare,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transform Your Digital Presence with Expert Web Development
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We build stunning, high-performance websites and web
                  applications that drive results for your business.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Web Development Illustration"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Comprehensive Web Development Solutions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                From concept to deployment, we offer end-to-end web development
                services tailored to your unique business needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Website Design</CardTitle>
                <CardDescription>
                  Custom designs that reflect your brand identity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We create visually stunning, user-friendly websites that
                  engage your audience and drive conversions.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Learn more
                </Link>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Robust, scalable web applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We build powerful web applications with clean code, optimal
                  performance, and seamless functionality.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Learn more
                </Link>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Responsive Design</CardTitle>
                <CardDescription>
                  Mobile-first approach for all devices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We ensure your website looks and functions perfectly on all
                  devices, from desktops to smartphones.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Learn more
                </Link>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>E-Commerce Solutions</CardTitle>
                <CardDescription>
                  Sell products and services online
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We develop secure, user-friendly e-commerce platforms that
                  drive sales and enhance customer experience.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Learn more
                </Link>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>CMS Integration</CardTitle>
                <CardDescription>
                  Easy content management systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We integrate powerful content management systems that make
                  updating your website simple and efficient.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Learn more
                </Link>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Website Maintenance</CardTitle>
                <CardDescription>Ongoing support and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We provide regular maintenance, security updates, and
                  technical support to keep your website running smoothly.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Learn more
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                How We Bring Your Vision to Life
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our proven development process ensures transparent communication
                and exceptional results.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl mt-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  We learn about your business, goals, and target audience to
                  create a strategic plan.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Design</h3>
                <p className="text-sm text-muted-foreground">
                  We create wireframes and mockups that align with your brand
                  and user experience goals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Development</h3>
                <p className="text-sm text-muted-foreground">
                  Our developers bring the designs to life with clean,
                  efficient, and scalable code.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-bold">Deployment</h3>
                <p className="text-sm text-muted-foreground">
                  We thoroughly test, launch your website, and provide ongoing
                  support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Technologies
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Cutting-Edge Technologies We Use
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                We leverage the latest technologies to build fast, secure, and
                scalable web solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl mt-12">
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="cms">CMS & E-Commerce</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="React"
                    />
                    <span className="font-medium">React</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Next.js"
                    />
                    <span className="font-medium">Next.js</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Vue.js"
                    />
                    <span className="font-medium">Vue.js</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Tailwind CSS"
                    />
                    <span className="font-medium">Tailwind CSS</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="backend" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Node.js"
                    />
                    <span className="font-medium">Node.js</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Python"
                    />
                    <span className="font-medium">Python</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="PHP"
                    />
                    <span className="font-medium">PHP</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="MongoDB"
                    />
                    <span className="font-medium">MongoDB</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="cms" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="WordPress"
                    />
                    <span className="font-medium">WordPress</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Shopify"
                    />
                    <span className="font-medium">Shopify</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="WooCommerce"
                    />
                    <span className="font-medium">WooCommerce</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Strapi"
                    />
                    <span className="font-medium">Strapi</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Work
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Featured Projects
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Explore our portfolio of successful web development projects
                across various industries.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>E-Commerce Platform</CardTitle>
                <CardDescription>Retail Industry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A custom e-commerce solution with advanced product filtering,
                  secure checkout, and inventory management.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  View Case Study
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Corporate Website</CardTitle>
                <CardDescription>Finance Sector</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A professional website with custom CMS, interactive
                  dashboards, and secure client portals.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  View Case Study
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Booking Platform</CardTitle>
                <CardDescription>Hospitality Industry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  An online booking system with real-time availability, payment
                  processing, and customer management.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  View Case Study
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-10">
            <Button size="lg">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Transparent Pricing Plans
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Choose the perfect package for your business needs and budget.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <div className="mt-4 text-4xl font-bold">$1,499</div>
                <CardDescription className="mt-2">
                  Perfect for small businesses
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Up to 5 pages</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic SEO setup</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Contact form</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>1 month of support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col border-primary relative">
              <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Popular
              </div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <div className="mt-4 text-4xl font-bold">$3,999</div>
                <CardDescription className="mt-2">
                  For growing businesses
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Up to 15 pages</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced SEO setup</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>CMS integration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>3 months of support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <div className="mt-4 text-4xl font-bold">Custom</div>
                <CardDescription className="mt-2">
                  For large organizations
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited pages</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom design & development</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>E-commerce functionality</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>12 months of support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Us</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Meet the Experts Behind Our Success
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our talented team of developers, designers, and strategists are
                dedicated to your success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member 1"
                  className="aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground">Lead Designer</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member 2"
                  className="aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-sm text-muted-foreground">Senior Developer</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member 3"
                  className="aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Emily Rodriguez</h3>
              <p className="text-sm text-muted-foreground">Project Manager</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member 4"
                  className="aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">David Wilson</h3>
              <p className="text-sm text-muted-foreground">UX Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Don't just take our word for it. Here's what our clients have to
                say about our web development services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="bg-muted/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Client 1"
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-base">Robert Brown</CardTitle>
                    <CardDescription>CEO, TechStart Inc.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  "The team delivered an exceptional website that exceeded our
                  expectations. Their attention to detail and technical
                  expertise is unmatched."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Client 2"
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-base">Jennifer Lee</CardTitle>
                    <CardDescription>
                      Marketing Director, Retail Co.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  "Our e-commerce sales increased by 200% after launching our
                  new website. The user experience is seamless and our customers
                  love it."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Client 3"
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-base">Mark Thompson</CardTitle>
                    <CardDescription>Founder, Service Pro</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  "Working with this team was a pleasure from start to finish.
                  They understood our vision and delivered a website that
                  perfectly represents our brand."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Find answers to common questions about our web development
                services.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How long does it take to build a website?
                </AccordionTrigger>
                <AccordionContent>
                  The timeline varies depending on the complexity of the
                  project. A simple website can take 4-6 weeks, while more
                  complex projects may take 3-6 months. We'll provide a detailed
                  timeline during our initial consultation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What is your development process?
                </AccordionTrigger>
                <AccordionContent>
                  Our process includes discovery, planning, design, development,
                  testing, and launch phases. We maintain clear communication
                  throughout and provide regular updates on progress.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Do you provide website maintenance?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer ongoing maintenance packages to keep your
                  website secure, up-to-date, and performing optimally. Our
                  maintenance includes regular updates, security patches, and
                  technical support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can you help with SEO?</AccordionTrigger>
                <AccordionContent>
                  We build all websites with SEO best practices in mind. We also
                  offer additional SEO services including keyword research,
                  on-page optimization, and content strategy to improve your
                  search engine rankings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What platforms do you work with?
                </AccordionTrigger>
                <AccordionContent>
                  We work with various platforms including WordPress, Shopify,
                  WooCommerce, and custom solutions built with React, Next.js,
                  and other modern frameworks. We recommend the best platform
                  based on your specific needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Do you offer hosting services?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we provide reliable hosting solutions tailored to your
                  website's needs. Our hosting includes regular backups,
                  security monitoring, and technical support to ensure your
                  website remains online and performs well.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Digital Presence?
                </h2>
                <p className="md:text-xl">
                  Let's discuss how we can help you achieve your business goals
                  with a custom web solution.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="px-8">
                  Schedule a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8"
                >
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-primary-foreground/10 p-6">
                <div className="flex items-center space-x-4">
                  <Lightbulb className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Custom Solutions</h3>
                </div>
                <p className="mt-2 text-primary-foreground/80">
                  Tailored web development solutions designed specifically for
                  your business needs.
                </p>
              </div>
              <div className="rounded-lg bg-primary-foreground/10 p-6">
                <div className="flex items-center space-x-4">
                  <Rocket className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Fast Delivery</h3>
                </div>
                <p className="mt-2 text-primary-foreground/80">
                  Efficient development process to get your website up and
                  running quickly.
                </p>
              </div>
              <div className="rounded-lg bg-primary-foreground/10 p-6">
                <div className="flex items-center space-x-4">
                  <Users className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Dedicated Support</h3>
                </div>
                <p className="mt-2 text-primary-foreground/80">
                  Ongoing support and maintenance to ensure your website
                  continues to perform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get in Touch
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Have a project in mind? Let's discuss how we can help you
                achieve your goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 mt-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Our Location</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Web Dev Street, Tech City, 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-sm text-muted-foreground">
                    info@webdevagency.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-sm text-muted-foreground">
                    (123) 456-7890
                  </p>
                </div>
              </div>
              <div className="rounded-lg border p-4 mt-6">
                <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Monday - Friday</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>Saturday</div>
                  <div>10:00 AM - 4:00 PM</div>
                  <div>Sunday</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium"
                      >
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6" />
                <span className="text-lg font-bold">WebDevAgency</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Creating exceptional web experiences that drive business growth.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">Facebook</span>
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">Twitter</span>
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">Instagram</span>
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
                    className="h-5 w-5"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">LinkedIn</span>
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
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Website Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    E-Commerce Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    CMS Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Website Maintenance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} WebDevAgency. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
