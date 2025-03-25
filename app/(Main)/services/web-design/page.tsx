import HowWeWork from "../../components/how-we-work";
const webDesignProcess = [
  {
    title: "Research & Discovery",
    description:
      "We begin by understanding your brand, audience, and design preferences. This phase helps us gather insights to create a visually appealing and effective design.",
  },
  {
    title: "Wireframing & UI/UX Planning",
    description:
      "We create wireframes to define the layout and user flow. This ensures an intuitive and seamless experience before moving to high-fidelity designs.",
  },
  {
    title: "Visual Design & Branding",
    description:
      "We design a stunning interface using color schemes, typography, and graphics that align with your brand identity while maintaining usability.",
  },
  {
    title: "Prototyping & Feedback",
    description:
      "We develop interactive prototypes to showcase how the final design will look and function. Your feedback helps us refine the design before development.",
  },
];

export default function page() {
  return (
    <div>
      <HowWeWork
        process={webDesignProcess}
        title="How We Create Stunning Web Designs – Step by Step"
      />
    </div>
  );
}
