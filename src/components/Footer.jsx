import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Copyright,
  Briefcase,
  Heart,
  MapPin,
  Phone,
} from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={22} />,
      href: "https://github.com/miramaged802",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={22} />,
      href: "https://www.linkedin.com/in/mira-maged555",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={22} />,
      href: "mailto:miramaged345@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Educations", href: "#educations" },
    { name: "Courses", href: "#courses" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 px-4 bg-gradient-to-br from-card/30 via-card/50 to-card/30 backdrop-blur-md border-t border-border/50 relative text-foreground">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section: Logo/Name and Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 pb-8 border-b border-border/30">
          <a
            href="#hero"
            className="text-3xl font-bold text-primary flex items-center group mb-6 sm:mb-0"
          >
            <Briefcase
              size={30}
              className="mr-3 transition-transform duration-300 group-hover:rotate-[-15deg]"
            />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Mira Maged
            </span>
          </a>
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section: Quick Links and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-foreground/90 mb-6 text-left">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium hover:underline underline-offset-4"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground/90 mb-6 text-left">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-muted-foreground">
                <MapPin
                  size={18}
                  className="mr-3 text-primary/80 flex-shrink-0"
                />{" "}
                Cairo, Egypt
              </li>
              <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail
                  size={18}
                  className="mr-3 text-primary/80 flex-shrink-0"
                />
                <a href="mailto:miramaged345@gmail.com">
                  miramaged345@gmail.com
                </a>
              </li>
              {/* Add phone number if desired */}
              <li className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200">
                <Phone size={18} className="mr-3 text-primary/80 flex-shrink-0" /> 
                <a href="tel:+201019473537">+20 101 947 3537</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Scroll to Top */}
        <div className="border-t border-border/30 pt-10 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center text-muted-foreground mb-4 sm:mb-0">
            <Copyright size={16} className="mr-2 flex-shrink-0" />
            <span>{new Date().getFullYear()} Mira Maged.</span>
            <span className="mx-1">•</span>
            <span>
              Crafted with{" "}
              <Heart size={14} className="inline text-red-500 mx-1" /> in Egypt.
            </span>
          </div>

          <a
            href="#hero"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-md shadow-sm"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
