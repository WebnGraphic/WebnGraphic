import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type PortfolioCardProps = {
  image: string;
  title: string;
  description: string;
  tags: string[];
};

export default function WebDevPortfolio() {
  return (
    <div>
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Web Development Portfolio
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore some of our recent web development projects
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <PortfolioCard
              image="/placeholder.svg?height=400&width=600"
              title="E-commerce Platform"
              description="A custom e-commerce solution for a fashion retailer with advanced filtering and personalization."
              tags={["React", "Node.js", "MongoDB"]}
            />
            <PortfolioCard
              image="/placeholder.svg?height=400&width=600"
              title="Financial Dashboard"
              description="An interactive dashboard for financial data visualization with real-time updates."
              tags={["Next.js", "TypeScript", "D3.js"]}
            />
            <PortfolioCard
              image="/placeholder.svg?height=400&width=600"
              title="Healthcare Portal"
              description="A secure patient portal for a healthcare provider with appointment scheduling."
              tags={["Angular", "Express", "PostgreSQL"]}
            />
            <PortfolioCard
              image="/placeholder.svg?height=400&width=600"
              title="Real Estate Platform"
              description="A property listing and management platform with advanced search capabilities."
              tags={["Vue.js", "Django", "Mapbox"]}
            />
            <PortfolioCard
              image="/placeholder.svg?height=400&width=600"
              title="Educational LMS"
              description="A learning management system for an online education provider with course creation tools."
              tags={["React", "Firebase", "Stripe"]}
            />
            <PortfolioCard
              image="/placeholder.svg?height=400&width=600"
              title="Community Forum"
              description="A discussion platform for a niche community with moderation tools and user profiles."
              tags={["Next.js", "GraphQL", "MongoDB"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function PortfolioCard({
  image,
  title,
  description,
  tags,
}: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden relative group pb-6 transition-all hover:shadow-md">
      <div className="overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          width={600}
          height={400}
          alt={title}
          className="aspect-[3/2] w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="rounded-md">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-5 align-bottom mt-auto pt-0">
        <div className="border-t border-gray-100 pt-3 w-full flex ">
          <div
            /*                 onClick={() => {
                  setCurrentProject(project.id);
                  setModalOpen(true);
                }} */
            className="flex pr-2 !w-full cursor-pointer justify-between items-center gap-1 text-sm font-semibold text-Ttext hover:text-TtextH transition-colors duration-200"
          >
            <button className="cursor-pointer">View Details</button>

            <ArrowRight
              size={25}
              className="transition-all  duration-500 group-hover:translate-x-3"
            />
          </div>
        </div>
      </CardFooter>
      <div className="absolute bottom-0 left-0 h-1 bg-Ttext w-0 group-hover:w-full transition-all duration-500" />
    </Card>
  );
}
