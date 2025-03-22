import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CalendarDays, Tag, User } from "lucide-react";
import Image from "next/image";
import BlogSidebar from "./blog-sidebar";

const Blogs = [
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "April 7, 2025",
    tagsName: "Seo Marketing",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "April 9, 2025",
    tagsName: "Web Development",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "April 10, 2025",
    tagsName: "Logo Design",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "March 11, 2024",
    tagsName: "Seo Marketing",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "April 7, 2025",
    tagsName: "Seo Marketing",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "April 9, 2025",
    tagsName: "Web Development",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "April 10, 2025",
    tagsName: "Logo Design",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "March 11, 2024",
    tagsName: "Seo Marketing",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "April 7, 2025",
    tagsName: "Seo Marketing",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "April 9, 2025",
    tagsName: "Web Development",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "April 10, 2025",
    tagsName: "Logo Design",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "March 11, 2024",
    tagsName: "Seo Marketing",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
];

const Icons = [
  <User key={"icon1"} className="h-3.5 w-3.5" />,
  <CalendarDays key={"icon2"} className="h-3.5 w-3.5" />,
  <Tag key={"icon3"} className="h-3.5 w-3.5" />,
];

export default function BlogLists() {
  return (
    <section className="container">
      <div className="flex flex-col lg:flex-row p-16 gap-8">
        {/* Blog Posts */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Blogs.map((item, i) => (
              <Card
                key={i}
                className="overflow-hidden p-5 border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-[220px] rounded-xl overflow-hidden relative">
                  <Image
                    src={item.blogImage || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-0">
                  <ul className="flex flex-wrap gap-3 text-xs !text-[#009dff] mb-2">
                    {Icons.map((icon, idx) => (
                      <li key={idx} className="flex  items-center gap-1">
                        <i>{icon}</i>
                        <span className="uppercase">
                          {icon.key === "icon1"
                            ? item.author
                            : icon.key === "icon2"
                            ? item.dudate
                            : item.tagsName}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-bold line-clamp-2 hover:text-primary transition-colors">
                    <a href="#" className="hover:underline">
                      {item.title}
                    </a>
                  </h3>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {item.descript}
                  </p>
                </CardContent>
                <CardFooter className="p-0">
                  <Button className="bg-gradient-to-r from-[#3a33ff] to-[#64E9FF] hover:opacity-90 transition-opacity">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <BlogSidebar />
      </div>
    </section>
  );
}
