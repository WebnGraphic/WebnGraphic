import HowWeWork from "../../components/how-we-work";
const graphicDesignProcess = [
  {
    title: "Understanding Your Vision",
    description:
      "We begin by learning about your brand, objectives, and target audience. This helps us create designs that align with your message and goals.",
  },
  {
    title: "Concept Development",
    description:
      "We brainstorm and sketch multiple design concepts, ensuring a creative and unique approach that suits your brand identity.",
  },
  {
    title: "Design & Refinement",
    description:
      "We create high-quality digital designs, incorporating typography, colors, and visuals. Your feedback helps us refine and perfect the final look.",
  },
  {
    title: "Finalization & Delivery",
    description:
      "Once approved, we finalize the designs and provide the necessary formats for print, web, or social media, ensuring a seamless brand experience.",
  },
];

export default function page() {
  return (
    <div>
      <HowWeWork
        process={graphicDesignProcess}
        title="How We Craft Stunning Graphic Designs – Step by Step"
      />
    </div>
  );
}
