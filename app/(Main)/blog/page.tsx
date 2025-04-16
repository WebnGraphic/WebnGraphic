import { getAllBlog } from "@/app/action/action";
import TopSectionStatic from "@/components/manual/header/top-section-static";
import ContactCommon from "../components/contact-common";
import CTASection1 from "../components/cta-section-1";
import FaqMain from "../components/faq-main";
import TestimonialSection from "../components/testimonial-section";
import BlogPage from "./components/blog-page";
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
