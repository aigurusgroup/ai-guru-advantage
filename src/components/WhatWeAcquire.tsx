import { Search, Handshake, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const WhatWeAcquire = () => {
  const businessCriteria = [
    "Proven demand and trading history",
    "Consistent profitability and healthy cash flow",
    "Strong reputation and loyal customers",
    "Repeat/recurring revenue or dependable demand"
  ];

  const successionOptions = [
    "Full exit (you step away completely)",
    "Partial exit (take some chips off the table, stay involved)",
    "Phased buyout (transition over time)",
    "Succession planning (handover to a stronger future structure)"
  ];

  return (
    <section id="what-we-acquire" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What Businesses We Look For
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Thinking about selling your business?
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AI Gurus Group acquires established, profitable SMEs and strengthens them with practical AI, automation, and modern operating systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* The Kind of Business We Acquire */}
          <Card className="p-8 border-2 border-primary/20 hover:border-primary-glow hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 bg-card">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary via-primary-glow to-accent flex items-center justify-center mb-6">
              <Search className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Kind of Business We Acquire
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're interested in SME acquisitions where the business has strong fundamentals and a willing seller. A great fit often includes:
            </p>
            <ul className="space-y-3 mb-6">
              {businessCriteria.map((criterion) => (
                <li 
                  key={criterion}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-primary-glow mt-0.5 flex-shrink-0" />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed italic">
              If you're unsure, still reach out — many great businesses aren't "perfect on paper".
            </p>
          </Card>

          {/* Succession Planning and Flexible Outcomes */}
          <Card className="p-8 border-2 border-primary/20 hover:border-primary-glow hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 bg-card">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary via-primary-glow to-accent flex items-center justify-center mb-6">
              <Handshake className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Succession Planning & Flexible Outcomes
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Not every sale is the same. We regularly support:
            </p>
            <ul className="space-y-3 mb-6">
              {successionOptions.map((option) => (
                <li 
                  key={option}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-primary-glow mt-0.5 flex-shrink-0" />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Our goal is a deal that works commercially and works for you personally.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
