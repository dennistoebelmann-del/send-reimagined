import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import sendesaalLogo from "@/assets/sendesaal-logo.svg";
import { searchPalette, useSearchPalette } from "@/lib/useSearchPalette";
import SearchBar from "./SearchBar";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { open: searchOpen } = useSearchPalette();

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
    { name: "Mieten", href: "/mieten" },
    { name: "Produzieren", href: "/produzieren" },
    { name: "Unterstützen", href: "/unterstuetzen" },
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
      {!useDarkStyle && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        />
      )}
      <nav className="relative container mx-auto px-6 md:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - black background when transparent, black filter when scrolled */}
          <Link to="/" className="flex items-start -mt-4">
            {useDarkStyle ? (
              <div className="transition-all duration-300 px-4 pb-3 pt-4 rounded-b-md bg-white">
                <img
                  src={sendesaalLogo}
                  alt="Sendesaal Bremen"
                  className="h-12 md:h-14 w-auto transition-all duration-300"
                  style={{ filter: 'brightness(0)' }}
                />
              </div>
            ) : (
              <div className="transition-all duration-300 px-4 pb-3 pt-4">
                <img
                  src={sendesaalLogo}
                  alt="Sendesaal Bremen"
                  className="h-12 md:h-14 w-auto transition-all duration-300"
                  style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.85)) drop-shadow(0 2px 6px rgba(0,0,0,0.7))' }}
                />
              </div>
            )}
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden lg:flex items-center flex-1 justify-end">
            <div
              className={`flex items-center transition-all duration-300 ${
                searchOpen ? "opacity-0 w-0 overflow-hidden pointer-events-none" : "opacity-100"
              }`}
            >
              {navLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-6 py-4 font-medium text-[16px] transition-colors ${
                    useDarkStyle ? "text-black hover:text-[#E47C03]" : "text-white hover:text-[#E47C03]"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-6 py-4 font-medium text-[16px] transition-colors ${
                    useDarkStyle ? "text-black hover:text-[#E47C03]" : "text-white hover:text-[#E47C03]"
                  }`}
                >
                  {link.name}
                </a>
              )
              ))}
            </div>

            <SearchBar
              dark={useDarkStyle}
              className={`${searchOpen ? "flex-1 ml-6 mr-3" : "w-[200px] ml-6"}`}
            />

            <div
              className={`transition-all duration-300 ${
                searchOpen ? "opacity-0 w-0 overflow-hidden pointer-events-none" : "opacity-100"
              }`}
            >
              <Button
                asChild
                className="ml-6 bg-[#E17900] hover:bg-[#E17900]/90 text-white font-bold px-8 py-4 h-auto text-[16px] border border-white"
              >
                <a href="https://tickets.sendesaal-bremen.de/" target="_blank" rel="noopener noreferrer">Tickets</a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2 flex-1 justify-end ml-3">
            <SearchBar
              dark={useDarkStyle}
              className={searchOpen ? "flex-1" : "w-[140px]"}
            />
            {!searchOpen && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={28} className={useDarkStyle ? "text-black" : "text-white"} />
                ) : (
                  <Menu size={28} className={useDarkStyle ? "text-black" : "text-white"} />
                )}
              </button>
            )}
          </div>
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
                    className="text-base font-medium text-black hover:text-[#E47C03] transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-black hover:text-[#E47C03] transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Button 
                asChild 
                className="w-full mt-4 bg-[#E17900] hover:bg-[#E17900]/90 text-white font-bold py-4 h-auto"
              >
                <a
                  href="https://tickets.sendesaal-bremen.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tickets
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
