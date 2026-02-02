import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";
import sendesaalLogo from "@/assets/sendesaal-logo.svg";

const Footer = () => {
  const footerLinks = {
    programm: [
      { name: "Konzerte", href: "#konzerte" },
      { name: "Kalender", href: "#kalender" },
      { name: "Künstler", href: "#kuenstler" },
      { name: "Tickets", href: "#tickets" },
    ],
    services: [
      { name: "Mieten", href: "#mieten" },
      { name: "Produzieren", href: "#produzieren" },
      { name: "Technik", href: "#technik" },
    ],
    about: [
      { name: "Über uns", href: "/ueber-uns" },
      { name: "Geschichte", href: "#geschichte" },
      { name: "Team", href: "#team" },
      { name: "Kontakt", href: "#kontakt" },
    ],
  };

  return (
    <footer className="bg-black text-white">
      {/* Concave curve at top */}
      <div className="relative h-24 bg-white overflow-hidden">
        <div className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[120%] h-[200px] rounded-[50%] bg-black" />
        
        {/* Orange bars */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-[10px] z-10">
          {[45, 38, 32, 28, 28, 32, 38, 45].map((height, i) => (
            <div
              key={i}
              className="w-[5px] bg-primary rounded-sm"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand / Logo */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-8">
              <img 
                src={sendesaalLogo} 
                alt="Sendesaal Bremen" 
                className="h-24 w-auto"
              />
            </Link>
            <div className="flex gap-5">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a 
                href="mailto:info@sendesaal-bremen.de"
                className="text-white hover:text-primary transition-colors"
                aria-label="E-Mail"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Programm Links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-base">Programm</h3>
            <ul className="space-y-4">
              {footerLinks.programm.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-base">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-base">Über uns</h3>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-primary transition-colors text-base"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors text-base"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <p>© 2025 Sendesaal Bremen</p>
            <div className="flex gap-8">
              <a href="#impressum" className="hover:text-primary transition-colors">
                Impressum
              </a>
              <a href="#datenschutz" className="hover:text-primary transition-colors">
                Datenschutz
              </a>
              <a href="#cookies" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
