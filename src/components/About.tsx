import { Target, Eye, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            AI Gurus specializes in identifying undervalued businesses with untapped potential, 
            acquiring them strategically, and implementing AI-driven solutions to unlock unprecedented growth and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="p-8 text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the premier catalyst for business transformation through strategic acquisitions and AI integration, 
              setting new standards for operational excellence and value creation.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
              <Target className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To acquire promising businesses and transform them through intelligent AI implementation, 
              driving efficiency, innovation, and sustainable growth for all stakeholders.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strategic acquisition followed by systematic AI integration. We identify inefficiencies, 
              implement intelligent automation, and create scalable systems for exponential value growth.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
