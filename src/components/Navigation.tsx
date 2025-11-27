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
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo - Bold and Minimalist */}
          <a href="/" className="flex flex-col">
            <span className="text-4xl md:text-5xl font-black tracking-tighter">SENDESAAL</span>
            <span className="text-[11px] tracking-[0.35em] text-muted-foreground uppercase font-light">Bremen</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-semibold hover:text-primary transition-colors tracking-wide uppercase text-xs"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button className="font-medium">
              Tickets
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-border pt-6">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-4 font-medium">
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
