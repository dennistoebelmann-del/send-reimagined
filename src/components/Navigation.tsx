import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import sendesaalLogo from "@/assets/sendesaal-logo.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 50);
      
      // Show/hide based on scroll direction
      if (currentScrollY < 50) {
        // Always show at top of page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down - hide
        setIsVisible(false);
      } else {
        // Scrolling up - show
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programm", href: "/programm" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Mieten", href: "#mieten" },
    { name: "Produzieren", href: "#produzieren" },
  ];

  // On non-home pages or when scrolled, use dark style
  const useDarkStyle = !isHomePage || isScrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useDarkStyle ? "bg-white shadow-md" : "bg-transparent"
      } ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={sendesaalLogo} 
              alt="Sendesaal Bremen" 
              className="h-12 md:h-14 w-auto transition-all duration-300"
              style={useDarkStyle ? { filter: 'brightness(0)' } : {}}
            />
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-semibold hover:text-primary transition-colors tracking-wide uppercase text-[14px] ${useDarkStyle ? "text-black" : "text-foreground"}`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-semibold hover:text-primary transition-colors tracking-wide uppercase text-[14px] ${useDarkStyle ? "text-black" : "text-foreground"}`}
                >
                  {link.name}
                </a>
              )
            ))}
            <Button asChild className={`font-medium ${useDarkStyle ? "bg-primary text-white" : ""}`}>
              <Link to="/programm">Tickets</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} className={useDarkStyle ? "text-black" : ""} /> : <Menu size={28} className={useDarkStyle ? "text-black" : ""} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-border pt-6 bg-background/95 backdrop-blur-sm -mx-6 px-6">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                link.href.startsWith("/") ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-base font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Button asChild className="w-full mt-4 font-medium">
                <Link to="/programm">Tickets kaufen</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
