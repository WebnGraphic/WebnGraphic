import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
const PopularPosts = [
  {
    title: "How to Improve Your Website's SEO",
    date: "March 15, 2025",
    image: "/assets/Ourlegacy.png",
  },
  {
    title: "10 Web Design Trends for 2025",
    date: "March 20, 2025",
    image: "/assets/Ourlegacy.png",
  },
  {
    title: "The Importance of Mobile-First Design",
    date: "March 25, 2025",
    image: "/assets/Ourlegacy.png",
  },
];

const Categories = [
  { name: "SEO Marketing", count: 15 },
  { name: "Web Development", count: 23 },
  { name: "Logo Design", count: 7 },
  { name: "Digital Marketing", count: 19 },
  { name: "UI/UX Design", count: 12 },
];

export default function BlogSidebar() {
  return (
    <div className="w-full lg:w-1/3 relative ">
      {/* Search Bar */}
      <div className="sticky w-full top-30 z-10 space-y-8">
        <Card className="overflow-hidden  border-0 shadow-[0px_0px_100px_15px_rgba(0,0,0,0.05)] p-7">
          <CardContent className="p-0 border-0 shadow-none">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search blog posts..."
                className="border-0 p-6 shadow-none bg-[#f6fbff]"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute px-6 rounded-l-none right-0 bg-gradient-to-r from-[#3a33ff] to-[#64E9FF] hover:opacity-90 transition-opacity top-0 h-full"
              >
                <Search className="h-4 text-white font-semibold w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Popular Posts */}
        <Card className="border-0 shadow-[0px_0px_100px_15px_rgba(0,0,0,0.05)]">
          <CardHeader>
            <h3 className="text-xl font-bold">Popular Posts</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            {PopularPosts.map((post, index) => (
              <div key={index} className="flex gap-3">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-md"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h4 className="font-medium line-clamp-2 hover:text-primary transition-colors">
                    <a href="#" className="hover:underline">
                      {post.title}
                    </a>
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {post.date}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Categories */}
        <Card className="border-0 shadow-[0px_0px_100px_15px_rgba(0,0,0,0.05)]">
          <CardHeader>
            <h3 className="text-xl font-bold">Categories</h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {Categories.map((category, index) => (
                <li key={index} className="flex justify-between items-center">
                  <a
                    href="#"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    {category.name}
                  </a>
                  <Badge variant="secondary">{category.count}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
