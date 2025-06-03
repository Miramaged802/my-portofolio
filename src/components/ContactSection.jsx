import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
  MessageSquare,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New message from ${formData.name} via Portfolio`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:miramaged345@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Attempt to open mail client
    window.location.href = mailtoLink;

    toast({
      title: "Message Prepared!",
      description:
        "Your email client should open with the message pre-filled. Please send it from there.",
      variant: "success",
    });

    // Reset form (optional)
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "miramaged345@gmail.com",
      href: "mailto:miramaged345@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+20 101 947 3537",
      href: "tel:+201019473537",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Cairo, Egypt",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/mira-maged555",
      label: "LinkedIn",
    },
    {
      icon: <Github size={24} />,
      href: "https://github.com/miramaged802",
      label: "GitHub",
    },
    {
      icon: <Facebook size={24} />,
      href: "https://www.facebook.com/mira.maged.399",
      label: "Facebook",
    },
    {
      icon: <Instagram size={24} />,
      href: "https://www.instagram.com/miramaged2644/",
      label: "Instagram",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I&apos;m always open to discussing new opportunities.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">
                Contact Information
              </h3>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground/90 text-lg text-left">
                      {info.title}
                    </h4>
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm break-all"
                      target={info.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border/50">
              <h4 className="text-xl font-semibold text-foreground mb-4 text-left">
                Connect With Me
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200 hover:scale-110 shadow-sm"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground/80 text-left"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow duration-200 shadow-sm"
                  placeholder="e.g., Mira Maged"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground/80 text-left"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow duration-200 shadow-sm"
                  placeholder="e.g., mira.maged@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground/80 text-left"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow duration-200 shadow-sm resize-none"
                  placeholder="Hello, I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 py-3 text-base"
                )}
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
