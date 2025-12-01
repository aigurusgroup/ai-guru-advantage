import { Building2, Bot, TrendingUp, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Strategic Acquisitions",
      description: "We identify and acquire businesses with strong fundamentals but unrealized potential. Our due diligence process focuses on operational efficiency opportunities and AI integration possibilities.",
      highlights: [
        "Target identification & analysis",
        "Comprehensive due diligence",
        "Negotiation & deal structuring",
        "Post-acquisition integration"
      ]
    },
    {
      icon: Bot,
      title: "AI Implementation",
      description: "Systematic deployment of AI solutions across all business functions. We automate processes, optimize operations, and create intelligent systems that scale efficiently.",
      highlights: [
        "Process automation & optimization",
        "Machine learning integration",
        "Intelligent decision systems",
        "Custom AI solution development"
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Transformation",
      description: "Complete operational overhaul focused on efficiency and growth. We restructure workflows, implement best practices, and build scalable systems for sustainable success.",
      highlights: [
        "Operational restructuring",
        "Workflow optimization",
        "Performance metrics & KPIs",
        "Scalable growth strategies"
      ]
    },
    {
      icon: Lightbulb,
      title: "Value Creation",
      description: "Drive exponential value through strategic improvements and technology adoption. Our approach combines business acumen with technological innovation for maximum ROI.",
      highlights: [
        "Revenue optimization",
        "Cost reduction strategies",
        "Market expansion",
        "Exit strategy development"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            End-to-end business transformation through strategic acquisition and AI integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="p-8 border-2 border-primary/20 hover:border-primary-glow hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary via-primary-glow to-accent flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.highlights.map((highlight) => (
                  <li 
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-glow mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
