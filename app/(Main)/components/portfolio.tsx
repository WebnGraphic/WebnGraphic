import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PortfolioCardProps = {
  image: string;
  title: string;
  category: string;
  link: string;
};
export default function PortfolioSection() {
  return (
    <div>
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore some of our recent projects
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <PortfolioCard
              image="/web-development.jpg"
              title="Modern E-commerce Platform"
              category="Web Development"
              link="#"
            />
            <PortfolioCard
              image="/placeholder.svg?height=400&width=600"
              title="Corporate Brand Identity"
              category="Graphic Design"
              link="#"
            />
            <PortfolioCard
              image="/placeholder.svg?height=400&width=600"
              title="Mobile App UI Design"
              category="UI/UX Design"
              link="#"
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function PortfolioCard({ image, title, category, link }: PortfolioCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-md">
      <div className="relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          width={600}
          height={400}
          alt={title}
          className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div>
            <p className="text-sm font-medium text-Ttext">{category}</p>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
      <CardFooter className="p-4">
        <Link
          href={link}
          className="flex w-full text-black hover:bg-TtextH/10 rounded-md transition-all duration-200 py-2 px-4 justify-between items-center gap-1 text-sm font-semibold  "
        >
          View Project
          <ArrowRight
            size={20}
            className="transition-all mr-2 duration-500 group-hover:translate-x-3"
          />
        </Link>

        <div className="absolute bottom-0 left-0 h-1 bg-Ttext w-0 group-hover:w-full transition-all duration-500" />
      </CardFooter>
    </Card>
  );
}
