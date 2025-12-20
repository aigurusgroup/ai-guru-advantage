import { Shield, Clock, Sparkles, Award, Users, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const WhyOwnersChoose = () => {
  return (
    <section id="why-owners-choose" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <Award className="w-4 h-4" />
              17+ Successful Deals
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              Customer Service Awards
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-glow/10 text-primary-glow font-medium">
              Best Technology
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
              <Users className="w-4 h-4" />
              Investors in People
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Why Owners Choose AI Gurus Group
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A great business deserves a great next chapter. Owners work with us when they want a fair deal, 
            a smooth quick process, and a buyer who will invest in the business — not strip it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
                  <span className="font-semibold text-foreground">Fast clarity:</span>
                  <span className="text-muted-foreground"> straightforward feedback and clear next steps.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Modern uplift:</span>
                  <span className="text-muted-foreground"> AI + automation applied to real operations and the latest marketing practices.</span>
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-8 border-2 border-primary/20 hover:border-primary-glow hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6">How It Works — Timeline</h3>
            <ol className="space-y-4">
              {[
                "Confidential introduction",
                "High-level review & fit",
                "Indicative offer & structure options",
                "Focused due diligence",
                "Completion",
                "100-day plan: stabilise, improve, scale"
              ].map((step, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </Card>

          <Card className="p-8 border-2 border-primary/20 hover:border-primary-glow hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6">What Happens After the Sale?</h3>
            <p className="text-muted-foreground mb-6">
              This is the reassurance most acquirers miss:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Clear communication to staff</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Founder transition plan (you choose the level)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Investment in systems + training</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Measurable improvements, not buzzwords</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
