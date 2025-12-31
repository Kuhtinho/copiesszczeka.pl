import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const navItems = [
  { label: "Nasz Zespół", href: "/nasz-zespol" },
  { label: "Oferta", href: "/oferta" },
  { label: "Cennik", href: "/cennik" },
  { label: "Kontakt", href: "/kontakt" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm overflow-hidden">
      <div className="container-narrow w-full max-w-full">
        <nav className="flex items-center justify-between h-20 w-full min-w-0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0 min-w-0">
            <img 
              src={logo} 
              alt="Co Pies Szczeka Logo" 
              className="w-12 h-12 rounded-full object-cover shadow-soft transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-base sm:text-xl md:text-2xl font-semibold text-foreground">
              Co Pies Szczeka
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0 min-w-0">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-lg bg-lavender/30 hover:bg-lavender/50 text-muted-foreground hover:text-foreground transition-all duration-300 font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-4 py-2 rounded-lg bg-lavender/30 hover:bg-lavender/50 text-muted-foreground hover:text-foreground transition-all duration-300 font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link to="/umow-spotkanie">
              <Button variant="hero" size="sm">
                Umów spotkanie
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors flex-shrink-0"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="container-narrow py-6 flex flex-col gap-2">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-lg bg-lavender/30 hover:bg-lavender/50 text-foreground transition-all duration-300 font-medium"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-lg bg-lavender/30 hover:bg-lavender/50 text-foreground transition-all duration-300 font-medium"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Link to="/umow-spotkanie" onClick={() => setIsOpen(false)} className="mt-2">
                <Button variant="hero" className="w-full">
                  Umów spotkanie
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
