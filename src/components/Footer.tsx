import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer id="kontakt" className="bg-forest-dark text-primary-foreground py-8">
      <div className="container-narrow">
        <div className="grid md:grid-cols-4 gap-8 items-start">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={logo}
                alt="Co Pies Szczeka Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-display text-xl sm:text-2xl font-semibold">
                Co Pies Szczeka
              </span>
            </div>
            <p className="text-base sm:text-lg text-primary-foreground/70 leading-relaxed mb-4">
              Pomagamy opiekunom zrozumieć emocje ich psów i budować silniejsze relacje.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/co.pies.szczeka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61555406721205"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/nasz-zespol" className="text-base sm:text-lg text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Nasz Zespół
                </Link>
              </li>
              <li>
                <Link to="/oferta" className="text-base sm:text-lg text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Oferta
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-base sm:text-lg text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:sabaj.kamola@gmail.com" className="text-base sm:text-lg text-primary-foreground/70 hover:text-primary-foreground transition-colors whitespace-nowrap">
                  sabaj.kamola@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+48733555468" className="text-base sm:text-lg text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +48 733 555 468
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+48504657274" className="text-base sm:text-lg text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +48 504 657 274
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-6 pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm sm:text-base">
            © {new Date().getFullYear()} Co Pies Szczeka. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
