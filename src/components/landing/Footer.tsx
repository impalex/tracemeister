import { Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-gradient">TraceMeister</span>
            <p className="text-sm text-muted-foreground">
              © 2025-{currentYear} TraceMeister. All rights reserved.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/impalex/icmpenguin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="privacy_policy.html" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="terms.html" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Use
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeW9GGgwMbWgKwfGN1z8Ha9_48NetzRC-IhMVhcaj_4lcAwEg/viewform" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
