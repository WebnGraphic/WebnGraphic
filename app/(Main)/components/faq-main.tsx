import Accordion from "@/components/manual/accordion/accordion";
export const FaqData = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in web development, web design, and graphic design. Our services include custom website creation, UI/UX design, branding, and visual content to help businesses establish a strong online presence.",
  },
  {
    question: "How long does it take to complete a website or design project?",
    answer:
      "The timeline depends on the project's complexity. A simple website or design project may take 2-4 weeks, while larger projects can take a few months. We provide a detailed timeframe after understanding your requirements.",
  },
  {
    question: "Do you offer custom website designs or use templates?",
    answer:
      "We create fully custom website designs tailored to your brand and business needs. We prioritize originality and user experience to ensure your site stands out.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing is based on project scope and requirements. We offer flexible pricing for web development, web design, and graphic design services. Contact us for a custom quote.",
  },
  {
    question: "Do you provide revisions for design work?",
    answer:
      "Yes! We offer a set number of revisions based on the project scope to ensure you’re fully satisfied with the final design.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes, we offer ongoing support, maintenance, and updates to keep your website running smoothly and secure.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We can revamp your existing website with a modern design, improved user experience, and optimized performance.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is simple! Contact us through our website, and we’ll schedule a consultation to discuss your project in detail.",
  },
];

export default function FaqMain() {
  return (
    <div className="bg-white">
      <div className=" px-5 max-w-5xl w-full mx-auto md:px-12 py-16 text-white">
        <h3 className="text-center text-2xl font-bold md:text-4xl text-black">
          FAQs
        </h3>

        <div className="flex gap-2 mb-12 items-center justify-center">
          <div className="md:w-10 w-7 h-1 bg-Ttext"></div>
          <span className="text-Ttext md:text-base text-sm">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <div className="md:w-10 w-7 h-1 bg-Ttext"></div>
        </div>
        <Accordion items={FaqData} />
      </div>
    </div>
  );
}
