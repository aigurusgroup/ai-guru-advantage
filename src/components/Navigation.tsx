import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    label: "About",
    href: "#about"
  }, {
    label: "Services",
    href: "#services"
  }, {
    label: "Founders",
    href: "#founders"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/98 backdrop-blur-md shadow-[var(--shadow-soft)]' : 'bg-background/95 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img alt="AI Gurus - The Acquisition & Investment People" className="h-16 w-auto" src={logo} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <button key={link.label} onClick={() => scrollToSection(link.href)} className="font-medium text-foreground hover:text-primary transition-colors">
                {link.label}
              </button>)}
            <Button variant="default" onClick={() => scrollToSection('#contact')} className="bg-primary-glow hover:bg-primary-glow/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map(link => <button key={link.label} onClick={() => scrollToSection(link.href)} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                {link.label}
              </button>)}
            <Button variant="default" className="w-full" onClick={() => scrollToSection('#contact')}>
              Get Started
            </Button>
          </div>
        </div>}
    </nav>;
};