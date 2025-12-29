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
