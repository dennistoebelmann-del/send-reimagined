import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Programm", href: "#programm" },
    { name: "Tickets", href: "#tickets" },
    { name: "Mieten", href: "#mieten" },
    { name: "Produzieren", href: "#produzieren" },
    { name: "Über uns", href: "#ueber-uns" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight">SENDESAAL</span>
            <span className="text-sm tracking-widest text-muted-foreground">BREMEN</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" className="ml-4">
              Tickets kaufen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button size="sm" className="w-full mt-2">
                Tickets kaufen
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
