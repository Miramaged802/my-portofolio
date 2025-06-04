import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Educations", href: "#educations" },
  { name: "Courses", href: "#courses" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    // Handle scroll for background blur
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Handle active link based on scroll position
    const handleActiveLink = () => {
      const sections = navItems.map((item) => ({
        id: item.href.substring(1), // Remove '#' from href
        element: document.getElementById(item.href.substring(1)),
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(`#${section.id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveLink);
    handleActiveLink(); // Set initial active link on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveLink);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
          onClick={() => setActiveLink("#hero")}
        >
          <span className="relative z-10 font-bold">
            <span className="text-glow text-foreground text-2xl">Mira</span>{" "}
            Maged
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "relative text-foreground/80 hover:text-primary transition-colors duration-300",
                activeLink === item.href &&
                  "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-primary after:scale-x-100 after:transition-transform after:duration-300"
              )}
              onClick={() => setActiveLink(item.href)}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile nav - Theme toggle and Menu button */}
        <div className="md:hidden flex items-center space-x-1">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50 hover:bg-primary/10 rounded-full transition-colors duration-300"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "relative text-foreground/80 hover:text-primary transition-colors duration-300",
                  activeLink === item.href &&
                    "text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-primary after:scale-x-100 after:transition-transform after:duration-300"
                )}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveLink(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
