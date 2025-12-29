import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SellerFAQ = () => {
  const faqs = [
    {
      question: "Do you keep this confidential?",
      answer: "Yes. We treat every conversation as strictly confidential from first contact. We won't approach staff, customers, suppliers, or anyone in your network without your explicit permission, and we only request information in stages as the conversation progresses."
    },
    {
      question: "How fast can you make an indicative offer?",
      answer: "If the business looks like a fit, we can typically provide an indicative offer range quickly once we've had an initial call and reviewed a small set of high-level information (see the next question). Our goal is fast clarity, not a drawn-out process."
    },
    {
      question: "What information do you need first?",
      answer: "We keep it light at the start. Usually:\n• Last 2–3 years of accounts (or management accounts)\n• Current year-to-date performance\n• A simple overview of revenue mix, key customers, and team size\n• A high-level view of owner involvement and what you want next (full exit / partial / succession)"
    },
    {
      question: "What size and type of businesses are a good fit for AI Gurus Group?",
      answer: "We focus on established, reputable SMEs with consistent trading performance and clear potential to improve systems, operations, and scalable growth. If you have a solid business and you're thinking about succession or the next chapter, it's worth a conversation."
    },
    {
      question: "Do you only do full buyouts, or can I sell part of the business?",
      answer: "We're flexible. Depending on fit, we can explore:\n• Full exit\n• Partial exit (de-risk and take some chips off the table)\n• Phased buyout over time\n• Succession solutions where you step back gradually"
    },
    {
      question: "Can I stay involved after selling?",
      answer: "Often, yes — if that's what you want. Many founders stay on for a transition period, then move into an advisory or part-time role. We'll design a handover that protects the business and suits your goals."
    },
    {
      question: "Will you keep the staff, brand, and location?",
      answer: "Our default is to protect what's working. In most cases we aim for continuity — keeping the team, respecting the culture, and building on the brand equity you've created. Any changes are planned carefully and communicated properly, with stability as the priority."
    },
    {
      question: "How do you approach due diligence?",
      answer: "We keep it focused, respectful, and commercially minded. Due diligence is about verifying the fundamentals and understanding risks and opportunities — not creating disruption. We work to minimise the burden on you and your team, and we're clear about what we need and why."
    },
    {
      question: "How do you value a business?",
      answer: "Valuation depends on the quality and consistency of earnings, customer concentration, team structure, growth profile, and how reliant the business is on the owner. We aim to be fair, transparent, and practical — and we'll explain our thinking clearly."
    },
    {
      question: "How do you fund acquisitions?",
      answer: "We fund acquisitions through a disciplined approach aligned to long-term value creation. The structure varies by opportunity, and we're open about how a deal would be funded and what that means for certainty and speed."
    },
    {
      question: "What does the process look like from first call to completion?",
      answer: "A typical journey is:\n1. Confidential intro call\n2. High-level fit review\n3. Indicative offer / structure discussion\n4. Due diligence\n5. Completion\n6. Transition + 100-day improvement plan\n\nWe keep momentum, communicate clearly, and avoid unnecessary complexity."
    },
    {
      question: "What happens after completion? What does integration look like?",
      answer: "We don't \"flip a switch\" on day one. Integration is staged and calm:\n• Stabilise the business and protect customers and staff confidence\n• Align goals, roles, and reporting\n• Remove bottlenecks and manual workload\n• Implement practical automation and modern systems\n• Build a scalable operating rhythm (KPIs, cadence, continuous improvement)"
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-6">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Seller FAQ
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Common questions from business owners considering selling their company to AI Gurus Group
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="mb-12">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-2 border-primary/20 rounded-lg px-6 bg-card hover:border-primary-glow transition-colors"
                    >
                      <AccordionTrigger className="text-left font-semibold text-lg text-foreground hover:text-primary-glow py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                        <div className="whitespace-pre-line">{faq.answer}</div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* CTA Section */}
              <div className="text-center p-8 rounded-lg bg-gradient-to-br from-primary/10 via-primary-glow/10 to-accent/10 border-2 border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Ready to explore selling your business?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Get in touch for a confidential conversation about your business and how we can help with your next chapter.
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
                  <Link to="/">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      Back to Home
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

export default SellerFAQ;

