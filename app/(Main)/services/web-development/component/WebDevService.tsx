import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Briefcase,
  Heart,
  Newspaper,
  Palette,
  ShieldCheck,
  ShoppingBag,
  Store,
  Utensils,
} from "lucide-react";

export default function WebDevService() {
  const websiteTypes = [
    {
      icon: <ShoppingBag className="h-10 w-10" />,
      title: "E-Commerce",
      description:
        "Online stores with secure payment processing, product catalogs, and shopping carts.",
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Corporate",
      description:
        "Professional websites that showcase your business services, team, and company values.",
    },
    {
      icon: <Store className="h-10 w-10" />,
      title: "Small Business",
      description:
        "Affordable websites that help local businesses establish an online presence.",
    },
    {
      icon: <Newspaper className="h-10 w-10" />,
      title: "Blog & News",
      description:
        "Content-focused websites with easy-to-update articles and subscription options.",
    },
    {
      icon: <Utensils className="h-10 w-10" />,
      title: "Restaurant",
      description:
        "Showcase your menu, location, and allow customers to make reservations online.",
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "Portfolio",
      description:
        "Creative showcases for artists, photographers, and designers to display their work.",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Educational",
      description:
        "Learning platforms with course materials, student portals, and interactive content.",
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Non-Profit",
      description:
        "Mission-driven websites with donation capabilities and volunteer information.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Healthcare",
      description:
        "Patient-focused websites with appointment scheduling and health resources.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-Mbg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 bg-clip-text ">
            Types of Websites We Create
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our expert team designs and develops custom websites tailored to
            your specific industry and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteTypes.map((type, index) => (
            <Card
              key={index}
              className="p-6 transition-all duration-300 hover:shadow-xl group relative overflow-hidden border-[#e5e7eb] hover:border-[#64b5f6] bg-white"
            >
              <div className="absolute inset-0 bg-[#64b5f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

              <div className="relative z-10">
                <div className="mb-4 text-[#0a192f] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#64b5f6]">
                  {type.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-[#0a192f] transition-colors duration-300 group-hover:text-[#64b5f6]">
                  {type.title}
                </h3>

                <p className="text-[#64748b] group-hover:text-[#0a192f] transition-colors duration-300">
                  {type.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#0a192f] to-[#64b5f6] w-0 group-hover:w-full transition-all duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
