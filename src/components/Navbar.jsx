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
    // Handle scroll for background blur and mobile menu close
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMenuOpen) {
        setIsMenuOpen(false); // Close sidebar on scroll
      }
    };

    // Handle active link based on scroll position
    const handleActiveLink = () => {
      const sections = navItems.map((item) => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1)),
      }));

      let found = false;
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(`#${section.id}`);
            found = true;
            break;
          }
        }
      }
      if (!found) {
        setActiveLink("#hero"); // Fallback to #hero
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleActiveLink, { passive: true });
    handleActiveLink(); // Set initial active link

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveLink);
    };
  }, [isMenuOpen]); // Keep isMenuOpen to ensure scroll handler updates

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
          onClick={() => {
            setActiveLink("#hero");
            setIsMenuOpen(false);
          }}
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

          {!isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground hover:bg-primary/10 rounded-full transition-colors duration-300 relative z-[60]"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[55] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar - Slides from Right */}
          <div
            className={cn(
              "absolute top-0 right-0 h-screen w-80 max-w-[85vw] bg-background border-l border-border/50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out",
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/30 min-h-[70px]">
              <a
                href="#hero"
                className="text-lg font-bold text-primary flex items-center"
                onClick={() => {
                  setActiveLink("#hero");
                  setIsMenuOpen(false);
                }}
              >
                <span className="text-glow text-foreground">Mira</span>{" "}
                <span className="text-primary ml-1">Maged</span>
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-colors duration-200 ml-4"
                aria-label="Close Sidebar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 py-6 px-4 overflow-y-auto">
              <nav className="space-y-2">
                {navItems.map((item, key) => (
                  <a
                    key={key}
                    href={item.href}
                    className={cn(
                      "flex items-center w-full px-4 py-3 rounded-lg text-left text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 group",
                      activeLink === item.href &&
                        "text-primary bg-primary/10 font-medium shadow-sm"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setActiveLink(item.href);
                      // Smooth scroll to section
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    <span className="flex-1 text-sm font-medium">
                      {item.name}
                    </span>
                    {activeLink === item.href && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse ml-3" />
                    )}
                  </a>
                ))}
              </nav>
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-border/30 bg-card/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Theme
                </span>
                <ThemeToggle />
              </div>
              <div className="text-xs text-muted-foreground/70 text-center">
                © 2024 Mira Maged
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
