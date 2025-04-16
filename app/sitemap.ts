import type { MetadataRoute } from "next";
import { getAllBlog } from "./action/action";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { blogs } = await getAllBlog();

  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: "https://webngraphic.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://webngraphic.com/web-development",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://webngraphic.com/graphic-design",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://webngraphic.com/about",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://webngraphic.com/contact",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://webngraphic.com/portfolio",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://webngraphic.com/blog",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://webngraphic.com/privacy-policy",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://webngraphic.com/terms-of-service",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://webngraphic.com/cookie-policy",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://webngraphic.com/faq",
      lastModified: new Date(),
      priority: 0.6,
    },
  ];

  // Create blog entries
  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `https://webngraphic.com/blog/${blog.id}`,
    lastModified: new Date(blog.updatedAt),
    priority: 0.6,
  }));

  return [...baseEntries, ...blogEntries];
}
