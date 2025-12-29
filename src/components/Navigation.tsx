import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Link, useLocation } from "react-router-dom";
export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [{
    label: "About",
    href: "/#about"
  }, {
    label: "Services",
    href: "/#services"
  }, {
    label: "Founders",
    href: "/#founders"
  }, {
    label: "Contact",
    href: "/#contact"
  }, {
    label: "FAQ",
    href: "/seller-faq"
  }];

  const handleSectionClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/' && href.startsWith('/#')) {
      // Already on homepage, scroll to section
      const hash = href.replace('/', '');
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/98 backdrop-blur-md shadow-[var(--shadow-soft)]' : 'bg-background/95 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.label} 
                to={link.href}
                onClick={() => handleSectionClick(link.href)}
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/#contact">
              <Button variant="default" className="bg-primary-glow hover:bg-primary-glow/90">
                Get Started
              </Button>
            </Link>
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
            {navLinks.map(link => (
              <Link 
                key={link.label} 
                to={link.href} 
                onClick={() => handleSectionClick(link.href)} 
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="default" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>}
    </nav>;
};