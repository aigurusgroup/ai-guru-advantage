import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import chrisRobinson from "@/assets/chris-robinson.jpg";
import geoffreyErasmus from "@/assets/geoffrey-erasmus.jpg";

export const Founders = () => {
  const founders = [
    {
      name: "Chris Robinson",
      title: "Founder & CEO",
      image: chrisRobinson,
      bio: "Entrepreneur, founder, and investor with a track record of building, scaling, and exiting technology-driven businesses. With 11 successful ventures across software, AI, and customer-experience technology, including the 2025 merger of Creovai Inc with Capacity AI (USA), Chris combines deep operational expertise with cutting-edge AI innovation. At Creovai, he built award-winning conversational analytics and real-time guidance solutions that transformed customer engagement for enterprises worldwide.",
      expertise: [
        "Technology Ventures & Exits",
        "AI & Automation Strategy",
        "Business Acquisition & Integration",
        "Operational Transformation"
      ],
      linkedin: "https://www.linkedin.com/in/chris-robinson-979940b/",
      email: "chris@aigurus.com"
    },
    {
      name: "Geoffrey Erasmus",
      title: "Co-Founder & CTO",
      image: geoffreyErasmus,
      bio: "Geoffrey is a pioneering AI strategist with 15+ years of experience implementing enterprise AI solutions. He has led AI transformation initiatives for Fortune 500 companies, specializing in machine learning, process automation, and intelligent systems integration. His innovative approach has helped businesses achieve 40-60% efficiency gains through strategic AI deployment.",
      expertise: [
        "AI Strategy & Implementation",
        "Machine Learning & Automation",
        "Digital Transformation",
        "Technology Integration"
      ],
      linkedin: "#",
      email: "geoffrey@aigurus.com"
    }
  ];

  return (
    <section id="founders" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Founders
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Combining decades of experience in business acquisition and AI innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder) => (
            <Card key={founder.name} className="overflow-hidden hover:shadow-[var(--shadow-strong)] transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-secondary font-semibold mb-4">
                  {founder.title}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {founder.bio}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <a 
                    href={founder.linkedin}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a 
                    href={`mailto:${founder.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
