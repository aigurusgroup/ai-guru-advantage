import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Circuit board pattern background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" className="text-primary"/>
              <circle cx="90" cy="90" r="2" fill="currentColor" className="text-accent"/>
              <path d="M10 10 L30 10 L30 30 M70 70 L90 70 L90 90 M30 70 L50 70 L50 50 L70 50" 
                    stroke="currentColor" strokeWidth="1" fill="none" className="text-primary-glow"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Large logo watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 opacity-[0.08] pointer-events-none">
        <img 
          src={logo} 
          alt="" 
          className="w-[800px] h-auto"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Acquisition. Investment. Innovation.{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Growth.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Founder-led. Operator mindset. Confidential. Quick Decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg group bg-primary-glow hover:bg-primary-glow/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-glow/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
