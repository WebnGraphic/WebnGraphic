import { getAllTestimonial } from "@/app/action/action";
import MainHeader from "@/components/manual/header/main-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Testimonial } from "@/types/type";
import { Star } from "lucide-react";

export default async function GraphicTestimonial() {
  const testimonials = await getAllTestimonial();

  // Function to generate initials from name
  const getInitials = (name: string) => {
    if (!name) return "U"; // Default fallback
    const parts = name.trim().split(" ");
    return parts.length > 1
      ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
      : parts[0][0].toUpperCase();
  };

  return (
    <div className="bg-muted">
      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <MainHeader small="Testimonials" big="What Our Clients Say" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials && testimonials.length > 0 ? (
              testimonials.map((testimonial: Testimonial, index) => (
                <Card key={index} className="gap-2 py-6">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={testimonial.avatar || ""}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {getInitials(testimonial.name)}
                        </AvatarFallback>
                      </Avatar>

                      {/* User Info */}
                      <div>
                        <CardTitle className="text-base">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription>
                          {testimonial.role}, {testimonial.company}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Star Ratings */}
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-Ttext text-Ttext"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.comment}
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center col-span-full text-muted-foreground">
                No testimonials available.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
