import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center border-2 border-primary/20 hover:border-primary-glow hover:shadow-[var(--shadow-strong)] transition-all duration-300">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Let's Transform Your Business
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you're a business owner considering succession or an investor/partner exploring opportunities, we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="text-lg bg-primary-glow hover:bg-primary-glow/90"
                onClick={() => window.location.href = 'mailto:info@aigurusgroup.co'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">For Business Owners</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore strategic partnerships and acquisition opportunities
                  </p>
                  <a 
                    href="mailto:partnerships@aigurusgroup.co"
                    className="text-sm text-primary-glow hover:underline inline-block mt-2 font-medium"
                  >
                    partnerships@aigurusgroup.co
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">For Investors</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn about our acquisition pipeline and investment opportunities
                  </p>
                  <a 
                    href="mailto:investors@aigurusgroup.co"
                    className="text-sm text-primary-glow hover:underline inline-block mt-2 font-medium"
                  >
                    investors@aigurusgroup.co
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
