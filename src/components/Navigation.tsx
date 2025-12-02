import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import sendesaalLogo from "@/assets/sendesaal-logo.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programm", href: "#programm" },
    { name: "Mieten", href: "#mieten" },
    { name: "Produzieren", href: "#produzieren" },
    { name: "Über uns", href: "#ueber-uns" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={sendesaalLogo} 
              alt="Sendesaal Bremen" 
              className="h-12 md:h-14 w-auto transition-all duration-300"
              style={isScrolled ? { filter: 'brightness(0)' } : {}}
            />
          </a>

          {/* Desktop Navigation + CTA */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold hover:text-primary transition-colors tracking-wide uppercase text-[14px] ${isScrolled ? "text-black" : "text-foreground"}`}
              >
                {link.name}
              </a>
            ))}
            <Button className={`font-medium ${isScrolled ? "bg-primary text-white" : ""}`}>
              Tickets
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} className={isScrolled ? "text-black" : ""} /> : <Menu size={28} className={isScrolled ? "text-black" : ""} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-border pt-6 bg-background/95 backdrop-blur-sm -mx-6 px-6">
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
