import NormalButton from "@/components/manual/button/NormalButton";
import ResModTrigBtn from "@/components/manual/button/ResModTrigBtn";
import { Check } from "lucide-react";

const PricingPlans = [
  {
    title: "Starter",
    discountPrice: "$45",
    regularPrice: "68",
    check: (
      <Check
        size={32}
        className="!w-[18px] p-1 group-hover:bg-[#00b1dc] group-hover:text-white text-[#01D2A1] !h-[18px] mt-1 rounded-full bg-[#30A8201A]"
      />
    ),
    points: [
      "Basic Web Design (Up to 3 pages)",
      "Simple Logo Design (2 concepts, 2 revisions)",
      "Basic Graphic Design (Social media banner or business card)",
      "Mobile-friendly design",
      "Standard delivery (5-7 days)",
    ],
  },
  {
    title: "Professional",
    discountPrice: "$99",
    regularPrice: "139",
    popularTag: true,
    check: (
      <Check
        size={32}
        className="!w-[18px] p-1 group-hover:bg-[#00b1dc] group-hover:text-white text-[#01D2A1] !h-[18px] mt-1 rounded-full bg-[#30A8201A]"
      />
    ),
    points: [
      "Advanced Web Design (Up to 6 pages)",
      "Custom Logo Design (3 concepts, 4 revisions)",
      "Professional Graphic Design (Brochures, banners, or social media kit)",
      "Responsive & SEO-friendly website",
      "Premium stock images",
      "Faster delivery (3-5 days)",
    ],
  },
  {
    title: "Exclusive",
    discountPrice: "$299",
    regularPrice: "399",
    check: (
      <Check
        size={32}
        className="!w-[18px] p-1 group-hover:bg-[#00b1dc] group-hover:text-white text-[#01D2A1] !h-[18px] mt-1 rounded-full bg-[#30A8201A]"
      />
    ),
    points: [
      "Premium Web Design (Up to 10 pages)",
      "High-End Logo Design (5 concepts, unlimited revisions)",
      "Exclusive Graphic Design (Full branding kit: social media, business cards, flyers, brochures)",
      "E-commerce Integration (Shop setup, payment gateway)",
      "Custom animations & interactive UI",
      "VIP priority support",
      "Super-fast delivery (2-3 days)",
    ],
  },
];

export default function WebDevPricing() {
  return (
    <div className="bg-gray-100 px-5 py-16 md:px-12">
      <div className="max-w-7xl space-y-10 mx-auto">
        <h1 className="text-4xl text-center font-bold">Our Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
          {PricingPlans.map((plan, i) => (
            <div
              key={i}
              className="p-6 shadow-lg w-full bg-white rounded-2xl relative"
            >
              {plan.popularTag && (
                <div className="absolute top-0 right-0 bg-Redish text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}

              <div>
                <h2 className="text-2xl text-center border-b-2 uppercase font-bold">
                  {plan.title}
                </h2>
                <div className="py-8 flex justify-center border-b-2">
                  <p className="text-5xl font-bold text-[#00b1dc]">
                    {plan.discountPrice}
                    <span className="text-gray-400 text-2xl italic line-through">
                      {plan.regularPrice}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <ul className="py-6 pl-5 list-none space-y-2 text-gray-700">
                  {plan.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-2.5 group hover:text-[#00b1dc]"
                    >
                      <span>{plan.check}</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center ">
                  <ResModTrigBtn>
                    <NormalButton>Get Started</NormalButton>
                  </ResModTrigBtn>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
