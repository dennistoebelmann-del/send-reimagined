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
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programm", href: "/programm" },
    { name: "Tickets", href: "/tickets" },
    { name: "Mieten", href: "#mieten" },
    { name: "Produzieren", href: "#produzieren" },
    { name: "Unterstützen", href: "#unterstuetzen" },
    { name: "Über uns", href: "/ueber-uns" },
  ];

  // On non-home pages or when scrolled, use dark style (black text on white bg)
  const useDarkStyle = !isHomePage || isScrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useDarkStyle ? "bg-white shadow-md" : "bg-transparent"
      } ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="container mx-auto px-6 md:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - black background when transparent, black filter when scrolled */}
          <Link to="/" className="flex items-start -mt-4">
            <div className={`transition-all duration-300 px-4 pb-3 pt-4 rounded-b-md ${useDarkStyle ? 'bg-white shadow-lg' : 'bg-black'}`}>
              <img 
                src={sendesaalLogo} 
                alt="Sendesaal Bremen" 
                className="h-10 md:h-12 w-auto transition-all duration-300"
                style={useDarkStyle ? { filter: 'brightness(0)' } : {}}
              />
            </div>
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-6 py-4 font-bold text-[16px] transition-colors ${
                    useDarkStyle ? "text-black hover:text-[#E47C03]" : "text-white hover:text-[#E47C03]"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-6 py-4 font-bold text-[16px] transition-colors ${
                    useDarkStyle ? "text-black hover:text-[#E47C03]" : "text-white hover:text-[#E47C03]"
                  }`}
                >
                  {link.name}
                </a>
              )
            ))}
            <Button 
              asChild 
              className="ml-4 bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white font-bold px-8 py-4 h-auto text-[16px] border border-white"
            >
              <Link to="/programm">Tickets</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={28} className={useDarkStyle ? "text-black" : "text-white"} />
            ) : (
              <Menu size={28} className={useDarkStyle ? "text-black" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-200 pt-6 bg-white -mx-6 px-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith("/") ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-base font-bold text-black hover:text-[#E47C03] transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-bold text-black hover:text-[#E47C03] transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Button 
                asChild 
                className="w-full mt-4 bg-[#CF3D11] hover:bg-[#CF3D11]/90 text-white font-bold py-4 h-auto"
              >
                <Link to="/programm" onClick={() => setIsMenuOpen(false)}>Tickets</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
