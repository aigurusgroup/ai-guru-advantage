import { Shield, ArrowRight, CheckCircle, Award, Users, Phone, UserCheck, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const WhyOwnersChoose = () => {
  return (
    <section id="why-owners-choose" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <Award className="w-4 h-4" />
              17+ Successful Deals
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              <Award className="w-4 h-4" />
              Customer Service Awards
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-glow/10 text-primary-glow font-medium">
              <Award className="w-4 h-4" />
              Best Technology
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <Users className="w-4 h-4" />
              Investors in People
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Why AI Gurus Group
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Sellers work with us when they want a fair deal, a smooth quick process, and a buyer who will invest in the business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 border-2 border-primary/20 hover:border-primary-glow hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Owners Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Legacy-first:</span>
                  <span className="text-muted-foreground"> we protect what you've built — brand, culture, customers.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">People matter:</span>
                  <span className="text-muted-foreground"> continuity for teams, investment in skills and leadership stability.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Tech uplift:</span>
                  <span className="text-muted-foreground"> AI + automation applied to real operations.</span>
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-8 border-2 border-primary/20 hover:border-primary-glow hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Next Steps</h3>
            <ol className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1
                </span>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary-glow" />
                  <span className="text-muted-foreground">Meet and Talk — Phone</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  2
                </span>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-primary-glow" />
                  <span className="text-muted-foreground">Face to Face — High-level review & fit</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  3
                </span>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary-glow" />
                  <span className="text-muted-foreground">Indicative offer & structure options</span>
                </div>
              </li>
            </ol>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="text-lg group bg-primary-glow hover:bg-primary-glow/90"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
