import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-500
        ${
          isScrolled
            ? "glass-strong py-3 shadow-lg shadow-black/5"
            : "bg-transparent py-5"
        }
      `}
    >
      <nav
        className="container mx-auto px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="Himanshu Garg - Home"
          className="
            text-xl
            font-bold
            tracking-tight
            transition-colors
            hover:text-primary
          "
        >
          HG<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div
            className="
              glass
              rounded-full
              px-2
              py-1
              flex
              items-center
              gap-1
            "
          >
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="
                  px-4
                  py-2
                  text-sm
                  text-muted-foreground
                  hover:text-foreground
                  rounded-full
                  hover:bg-surface
                  transition-all
                  duration-200
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">
              Contact Me
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="
            md:hidden
            p-2
            text-foreground
            cursor-pointer
            rounded-lg
            hover:bg-surface
            transition-colors
          "
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={
            isMobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="
            md:hidden
            glass-strong
            border-t
            border-border/40
            animate-fade-in
          "
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">

            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={closeMobileMenu}
                className="
                  text-lg
                  text-muted-foreground
                  hover:text-foreground
                  hover:bg-surface
                  rounded-lg
                  px-3
                  py-2
                  transition-all
                  duration-200
                "
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="w-full"
            >
              <Button className="w-full">
                Contact Me
              </Button>
            </a>

          </div>
        </div>
      )}
    </header>
  );
};