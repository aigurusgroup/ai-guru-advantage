import { Target, Eye, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  const values = [
    { letter: "F", word: "Fun", description: "Love the work, and love who you do it with." },
    { letter: "A", word: "Agility", description: "Embrace change and adapt fast." },
    { letter: "B", word: "Best", description: "Bring your best every day." },
    { letter: "R", word: "Responsibility", description: "Own it. Work as one team and deliver for customers." },
    { letter: "I", word: "Integrity", description: "Do what you say you'll do." },
    { letter: "C", word: "Curiosity", description: "Improve continuously. Challenge the status quo." },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            AI Gurus Group acquires and grows established businesses. We specialise in identifying strong companies 
            with untapped potential, acquiring them with discipline, and implementing AI-driven improvements to unlock 
            efficiency and scalable growth.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are not a typical acquisition firm. We are operators — we take ownership, invest in capability, 
            and build long-term value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="p-8 text-center border-2 border-primary/20 hover:border-primary-glow hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the trusted catalyst for business transformation through strategic acquisition and practical AI integration 
              — setting new standards for operational excellence and value creation.
            </p>
          </Card>

          <Card className="p-8 text-center border-2 border-primary/20 hover:border-primary-glow hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To acquire promising businesses and strengthen them through intelligent automation, modern systems, 
              and customer-focused innovation — driving sustainable growth for founders, teams, and stakeholders.
            </p>
          </Card>

          <Card className="p-8 text-center border-2 border-primary/20 hover:border-primary-glow hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Values</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We're values-led builders. <span className="font-semibold text-primary">FABRIC</span> is our operating system — 
              how we lead, how we partner, and how we scale award-winning businesses.
            </p>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{value.letter}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{value.word}</h4>
                <p className="text-xs text-muted-foreground leading-snug">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
