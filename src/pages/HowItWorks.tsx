import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, FileText, Handshake, CheckCircle2, Rocket, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const scrollToStep = (stepNumber: number) => {
    const element = document.getElementById(`step-${stepNumber}`);
    if (element) {
      const offset = 120; // Offset for fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveStep(stepNumber);
      
      // Reset active step after scroll animation
      setTimeout(() => {
        setActiveStep(null);
      }, 2000);
    }
  };

  // Detect which step is in view while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const steps = [1, 2, 3, 4, 5, 6];
      const scrollPosition = window.scrollY + 200; // Offset for navigation

      for (let i = steps.length - 1; i >= 0; i--) {
        const stepElement = document.getElementById(`step-${steps[i]}`);
        if (stepElement) {
          const elementTop = stepElement.offsetTop;
          if (scrollPosition >= elementTop) {
            setActiveStep(steps[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      number: 1,
      title: "Confidential introduction",
      duration: "15–30 minutes",
      icon: Phone,
      description: "A private call to understand:",
      details: [
        "what the business does",
        "what you want next (full exit, partial exit, succession)",
        "timing and any sensitivities"
      ],
      note: "If it's not a fit, we'll tell you quickly and respectfully."
    },
    {
      number: 2,
      title: "High-level review",
      subtitle: "light information",
      icon: FileText,
      description: "We'll request a small amount of information so we can assess fit and value, typically:",
      details: [
        "last 2–3 years accounts (or management accounts)",
        "year-to-date trading",
        "team size and your role day-to-day",
        "simple customer/revenue overview"
      ]
    },
    {
      number: 3,
      title: "Indicative offer and options",
      icon: Handshake,
      description: "If there's alignment, we'll discuss:",
      details: [
        "an indicative valuation range",
        "deal structure options (full exit / partial / phased)",
        "likely timeline and key milestones"
      ],
      note: "This is designed to give you clarity before you invest time."
    },
    {
      number: 4,
      title: "Due diligence",
      subtitle: "focused and staged",
      icon: CheckCircle2,
      description: "We move into deeper verification, while keeping disruption low:",
      details: [
        "financial, commercial, operational review",
        "risk and opportunity mapping",
        "clarity on dependencies (owner reliance, key customers, systems)"
      ],
      note: "We're transparent about what we need and why."
    },
    {
      number: 5,
      title: "Completion",
      subtitle: "the deal closes",
      icon: Rocket,
      description: "Final legal documentation is completed, funds are transferred as agreed, and we confirm:",
      details: [
        "governance and decision-making",
        "communications plan (especially for staff)",
        "the transition approach and priorities"
      ]
    },
    {
      number: 6,
      title: "Transition and the 100-day plan",
      icon: Clock,
      description: "We don't rush change. We stabilise first, then improve:",
      details: [
        "protect customers, culture, and team confidence",
        "remove bottlenecks and manual workload",
        "implement practical automation and AI-enabled tools",
        "establish KPIs, reporting, and a steady operating rhythm",
        "build a scalable plan for sustainable growth"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-32 pb-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  How It Works
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-4 max-w-3xl mx-auto">
                  A clear, confidential process for business owners
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  If you're exploring selling your business, thinking about succession planning, or speaking with a business acquisition company in the UK, you deserve a process that's simple, respectful, and discreet.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">
                  At AI Gurus Group, we keep things staged and straightforward: fast clarity early on, deeper work only when it makes sense, and minimal disruption to your business.
                </p>
              </div>

              {/* Interactive Timeline */}
              <div className="mb-20">
                <Card className="p-6 md:p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-accent/5">
                  <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                    Simple timeline: from first call to completion
                  </h2>
                  
                  {/* Horizontal Timeline */}
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-glow to-accent hidden md:block" />
                    
                    {/* Steps */}
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-2 relative z-10">
                      {steps.map((step, index) => {
                        const Icon = step.icon;
                        const stepId = `step-${step.number}`;
                        
                        return (
                          <button
                            key={step.number}
                            onClick={() => scrollToStep(step.number)}
                            className={`group relative flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                              activeStep === step.number
                                ? 'bg-gradient-to-br from-primary via-primary-glow to-accent scale-105 shadow-lg'
                                : 'bg-card hover:bg-primary/10 hover:scale-105 border-2 border-primary/20 hover:border-primary-glow'
                            }`}
                            aria-label={`Go to step ${step.number}: ${step.title}`}
                          >
                            {/* Step number circle */}
                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                              activeStep === step.number
                                ? 'bg-white shadow-lg scale-110'
                                : 'bg-gradient-to-br from-primary via-primary-glow to-accent group-hover:scale-110'
                            }`}>
                              <Icon className={`w-8 h-8 md:w-10 md:h-10 ${
                                activeStep === step.number ? 'text-primary' : 'text-white'
                              }`} />
                            </div>
                            
                            {/* Step number badge */}
                            <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              activeStep === step.number
                                ? 'bg-accent text-white'
                                : 'bg-primary-glow text-white'
                            }`}>
                              {step.number}
                            </div>
                            
                            {/* Step title */}
                            <h3 className={`text-xs md:text-sm font-semibold text-center mt-2 line-clamp-2 ${
                              activeStep === step.number ? 'text-white' : 'text-foreground'
                            }`}>
                              {step.title.split(' ').slice(0, 2).join(' ')}
                              {step.title.split(' ').length > 2 && (
                                <span className="block">{step.title.split(' ').slice(2).join(' ')}</span>
                              )}
                            </h3>
                            
                            {/* Duration if available */}
                            {step.duration && (
                              <span className={`text-xs mt-1 ${
                                activeStep === step.number ? 'text-white/80' : 'text-muted-foreground'
                              }`}>
                                {step.duration}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                    
                  </div>
                </Card>
              </div>

              {/* Detailed Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-accent hidden md:block" />

                {/* Steps */}
                <div className="space-y-12">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isEven = index % 2 === 0;
                    
                    return (
                      <div key={step.number} id={`step-${step.number}`} className="relative scroll-mt-24">
                        {/* Timeline dot */}
                        <div className="absolute left-6 md:left-8 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-primary-glow border-4 border-background shadow-lg z-10 transform -translate-x-1/2" />

                        {/* Step content */}
                        <Card className={`ml-12 md:ml-16 border-2 border-primary/20 hover:border-primary-glow hover:shadow-[var(--shadow-medium)] transition-all duration-300 ${isEven ? 'md:mr-0' : ''} ${
                          activeStep === step.number ? 'ring-2 ring-primary-glow ring-offset-2' : ''
                        }`}>
                          <div className="p-6 md:p-8">
                            {/* Step header */}
                            <div className="flex items-start gap-4 mb-4">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-primary-glow to-accent flex items-center justify-center flex-shrink-0">
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="text-sm font-semibold text-primary-glow">Step {step.number}</span>
                                  {step.duration && (
                                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                      {step.duration}
                                    </span>
                                  )}
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">
                                  {step.title}
                                  {step.subtitle && (
                                    <span className="text-lg font-normal text-muted-foreground ml-2">
                                      ({step.subtitle})
                                    </span>
                                  )}
                                </h3>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {step.description}
                            </p>

                            {/* Details list */}
                            <ul className="space-y-2 mb-4">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex gap-2 text-muted-foreground">
                                  <span className="text-primary-glow flex-shrink-0">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Note */}
                            {step.note && (
                              <div className="mt-4 p-3 bg-primary/10 border-l-4 border-primary-glow rounded">
                                <p className="text-sm text-muted-foreground italic">
                                  {step.note}
                                </p>
                              </div>
                            )}
                          </div>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-16 p-8 rounded-lg bg-gradient-to-br from-primary/10 via-primary-glow/10 to-accent/10 border-2 border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Ready to start the conversation?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Get in touch for a confidential discussion about your business and how we can help with your next chapter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/#contact">
                    <Button
                      size="lg"
                      className="text-lg group bg-primary-glow hover:bg-primary-glow/90"
                    >
                      Get in Touch
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/seller-faq">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      View FAQ
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;

