import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              AI Gurus
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming businesses through strategic acquisitions and AI innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/#founders"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link 
                  to="/seller-faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Seller FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/how-it-works"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@aigurusgroup.com" className="hover:text-primary transition-colors">
                  info@aigurusgroup.com
                </a>
              </li>
              <li>
                <a href="mailto:investors@aigurusgroup.com" className="hover:text-primary transition-colors">
                  investors@aigurusgroup.com
                </a>
              </li>
              <li>
                <a href="mailto:partnerships@aigurusgroup.com" className="hover:text-primary transition-colors">
                  partnerships@aigurusgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} AI Gurus Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
