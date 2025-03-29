import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, CheckCircle, MessageSquare, Star } from "lucide-react";
import { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function WhyChooseUs() {
  return (
    <div className="bg-white">
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We combine technical expertise with creative excellence to deliver
              exceptional results
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Star className="h-10 w-10 text-Ttext" />}
              title="Quality Craftsmanship"
              description="We take pride in delivering high-quality work that exceeds expectations and stands the test of time."
            />
            <FeatureCard
              icon={<ArrowUpRight className="h-10 w-10 text-Ttext" />}
              title="Results-Driven"
              description="Our solutions are designed to achieve your business goals and provide measurable results."
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-Ttext" />}
              title="Clear Communication"
              description="We maintain open and transparent communication throughout the entire project lifecycle."
            />
            <FeatureCard
              icon={<CheckCircle className="h-10 w-10 text-Ttext" />}
              title="Reliable Support"
              description="Our relationship doesn't end at launch. We provide ongoing support to ensure continued success."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden py-6 transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
