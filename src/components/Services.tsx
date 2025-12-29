import { Building2, Bot, TrendingUp, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Acquisitions",
      description: "We acquire businesses with strong fundamentals and clear upside.",
      highlights: [
        "Target identification & assessment",
        "Due diligence (commercial, financial, operational)",
        "Deal structuring (flexible outcomes)",
        "Integration planning and transition support"
      ]
    },
    {
      icon: Bot,
      title: "AI & Automation Implementation",
      description: "We implement AI where it drives real outcomes: speed, accuracy, customer experience, and scalability.",
      highlights: [
        "Workflow automation & operational optimisation",
        "Intelligent reporting and decision support",
        "AI-enabled customer and team tools",
        "Data foundations (clean inputs → reliable outputs)"
      ]
    },
    {
      icon: TrendingUp,
      title: "Operational Transformation",
      description: "We upgrade the operating system of the business.",
      highlights: [
        "Process redesign & standardisation",
        "KPI dashboards & performance cadence",
        "Role clarity, accountability, and training",
        "Scalable systems and documentation"
      ]
    },
    {
      icon: Lightbulb,
      title: "Value Creation & Growth",
      description: "We grow value through disciplined execution.",
      highlights: [
        "Revenue improvement and conversion uplift",
        "Cost-to-serve reduction",
        "Customer experience enhancements",
        "Long-term growth plan (and optional exit planning)"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Capabilities
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Acquire. Improve. Scale.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            We combine strategic acquisition with systematic AI integration to unlock efficiency, customer experience improvements, and sustainable growth.
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