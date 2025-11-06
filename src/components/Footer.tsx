export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              AI Gurus
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transforming businesses through strategic acquisitions and AI innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Our Team
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="mailto:info@aigurus.com" className="hover:text-secondary transition-colors">
                  info@aigurus.com
                </a>
              </li>
              <li>
                <a href="mailto:investors@aigurus.com" className="hover:text-secondary transition-colors">
                  investors@aigurus.com
                </a>
              </li>
              <li>
                <a href="mailto:partnerships@aigurus.com" className="hover:text-secondary transition-colors">
                  partnerships@aigurus.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} AI Gurus Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
