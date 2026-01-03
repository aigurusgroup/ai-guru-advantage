import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyOwnersChoose } from "@/components/WhyOwnersChoose";
import { Services } from "@/components/Services";
import { WhatWeAcquire } from "@/components/WhatWeAcquire";
import { Founders } from "@/components/Founders";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/StructuredData";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to section if hash is present in URL
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <SEO
        title="Sell Your Business UK | AI Gurus Group - Confidential Business Acquisition"
        description="Sell your business confidentially in the UK. AI Gurus Group is a UK-based acquisition partner that acquires established SMEs and transforms them with AI, automation, and modern systems. Protect your legacy while building the next chapter."
        path="/"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aigurusgroup.com/" },
        ]}
      />
      <Navigation />
      <main>
        <Hero />
        <WhatWeAcquire />
        <WhyOwnersChoose />
        <Services />
        <About />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
