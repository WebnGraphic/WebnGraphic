import { getAllBlog } from "@/app/action/action";
import TopSectionStatic from "@/components/manual/header/top-section-static";
import { Metadata } from "next";
import ContactCommon from "../components/contact-common";
import CTASection1 from "../components/cta-section-1";
import FaqMain from "../components/faq-main";
import TestimonialSection from "../components/testimonial-section";
import BlogPage from "./components/blog-page";

export const metadata: Metadata = {
  title: "Blog | Web Development & Design Insights",
  description:
    "Explore our blog for the latest insights, trends, and tips on web development, graphic design, digital marketing, and more to help improve your online presence.",
  alternates: {
    canonical: "https://webngraphic.com/blog",
  },
  openGraph: {
    title: "WebNGraphic Blog | Web & Design Resources",
    description:
      "Stay updated with the latest web development and graphic design trends, tips, and best practices through our regularly updated blog.",
    url: "https://webngraphic.com/blog",
    type: "website",
    images: [
      {
        url: "/opengraph/blog.jpg", // Replace with your actual graphic design OG image
        width: 1200,
        height: 630,
        alt: "WebNGraphic Graphic Design Services",
      },
    ],
  },
};
export default async function Page() {
  const allBlogs = await getAllBlog();
  return (
    <div>
      <TopSectionStatic
        title="Blog"
        description="Design tips, creative thoughts, and everything in between — straight from my desk to yours."
        breadcrumb={[{ label: "blog", link: "/blog" }]}
      />
      <BlogPage blogs={allBlogs.blogs} />
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
