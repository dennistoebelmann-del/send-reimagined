import { Facebook, Instagram, Mail } from "lucide-react";

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
      { name: "Über uns", href: "#ueber-uns" },
      { name: "Geschichte", href: "#geschichte" },
      { name: "Team", href: "#team" },
      { name: "Kontakt", href: "#kontakt" },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-tight">SENDESAAL</span>
              <span className="text-sm tracking-widest text-secondary-foreground/70">BREMEN</span>
            </div>
            <p className="text-secondary-foreground/70 mb-6">
              musik. live. erleben.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:info@sendesaal-bremen.de"
                className="hover:text-primary transition-colors"
                aria-label="E-Mail"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Programm</h3>
            <ul className="space-y-2">
              {footerLinks.programm.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Über uns</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/70">
            <p>© 2025 Sendesaal Bremen. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <a href="#impressum" className="hover:text-primary transition-colors">
                Impressum
              </a>
              <a href="#datenschutz" className="hover:text-primary transition-colors">
                Datenschutz
              </a>
              <a href="#cookies" className="hover:text-primary transition-colors">
                Cookie-Einstellungen
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
