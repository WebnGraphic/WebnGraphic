import { getAllBlog, getBlogById } from "@/app/action/action";
import TopSectionStatic from "@/components/manual/header/top-section-static";
import { format } from "date-fns";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactCommon from "../../components/contact-common";
import CTASection1 from "../../components/cta-section-1";
import FaqMain from "../../components/faq-main";
import TestimonialSection from "../../components/testimonial-section";
import IndividualBlogPage from "../components/individual-blog-page";

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  const blogs = await getAllBlog();

  return blogs.blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const { blog } = await getBlogById(id);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found",
    };
  }

  return {
    title: `${blog.title} | Blog`,
    description: blog.content,
    openGraph: {
      title: blog.title,
      description: blog.content,
      type: "article",
      publishedTime: format(new Date(blog.createdAt), "MMMM d, yyyy"),
      authors: [blog.author?.name],
      images: blog.imageLink,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Fetch data in parallel for better performance
  const [allBlogsData, blogData] = await Promise.all([
    getAllBlog(),
    getBlogById(id),
  ]);

  const { blogs } = allBlogsData;
  const { blog } = blogData;

  // Handle case when blog is not found
  if (!blog) {
    notFound();
  }

  return (
    <div>
      <TopSectionStatic
        title="Blog"
        description={blog.title}
        breadcrumb={[
          { label: "Blog", link: "/blog" },
          { label: blog.title, link: `/blog/${id}` },
        ]}
      />
      <IndividualBlogPage blogs={blogs} blog={blog} />
      <CTASection1
        first="Ready to Work With Us?"
        second="Get the Best for Your Business"
      />
      <TestimonialSection />
      <FaqMain />
      <ContactCommon />
    </div>
  );
}
