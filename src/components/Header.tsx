import { Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/lovable-uploads/WhatsApp Image 2025-08-10 at 22.38.24.jpeg"
            alt="Company Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Right: Email + Language + Social */}
        <div className="flex items-center gap-5">
          <a
            href="mailto:info@gracehospitality.com"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 text-primary" />
            <span>gracehospitalityandmanpower@gmail.com</span>
          </a>

          {/* Language Switcher */}
        

          {/* Social icons */}
          <nav className="flex items-center gap-2">
            <a href="#" aria-label="Facebook" className="p-2 rounded-md text-primary hover:bg-accent transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-md text-primary hover:bg-accent transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-md text-primary hover:bg-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </nav>

          <LanguageSwitcher inline className="w-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header; 