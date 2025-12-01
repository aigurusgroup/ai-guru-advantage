import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Building } from "lucide-react";

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
              Whether you're an investor looking for opportunities or a business owner interested in strategic partnership, 
              we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="text-lg bg-primary-glow hover:bg-primary-glow/90"
                onClick={() => window.location.href = 'mailto:info@aigurus.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Building className="mr-2 h-5 w-5" />
                Investment Opportunities
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">For Investors</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn about our acquisition pipeline and investment opportunities
                  </p>
                  <a 
                    href="mailto:investors@aigurus.com"
                    className="text-sm text-primary-glow hover:underline inline-block mt-2 font-medium"
                  >
                    investors@aigurus.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">For Business Owners</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore strategic partnerships and acquisition opportunities
                  </p>
                  <a 
                    href="mailto:partnerships@aigurus.com"
                    className="text-sm text-primary-glow hover:underline inline-block mt-2 font-medium"
                  >
                    partnerships@aigurus.com
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
