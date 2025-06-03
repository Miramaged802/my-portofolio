import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Recipe App",
    description:
      "A Modern Web Application for Food Lovers. A React + Redux Toolkit Recipe App with live search, meal type filters, and tag browsing, featuring recipe cards and detailed pages from the DummyJSON API. Fully responsive, with plans for user authentication and favorites.",
    image: "projects/respi1.png",
    tags: ["React", "Redux Toolkit", "API", "Responsive Design"],
    demoUrl: "https://recipes-prodact.netlify.app/",
    githubUrl: "https://github.com/Miramaged802/recipes.git",
    date: "03/2025",
  },
  {
    id: 2,
    title: "LuxeDecor E-Commerce",
    description:
      "A React-Powered E-Commerce Experience! Designed and developed a modern, feature-rich e-commerce platform using React.js, Redux Toolkit, and Tailwind CSS, offering users a premium, seamless shopping journey from discovery to checkout.",
    image: "projects/LuxeDecor.png",
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "E-Commerce"],
    demoUrl: "https://lnkd.in/d8jfcVTS",
    githubUrl: "https://lnkd.in/dv8Tfxah",
    date: "2024",
  },
  {
    id: 3,
    title: "Car Retail Platform",
    description:
      "A web-based platform designed for showcasing and managing car sales. Provides a user-friendly interface to browse through a variety of car models, view detailed specifications, and compare options with filtering capabilities.",
    image: "projects/Car.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    demoUrl: "https://miramaged802.github.io/car-retail/",
    githubUrl: "https://github.com/Miramaged802/car-retail.git",
    date: "12/2024",
  },
  {
    id: 4,
    title: "FASHION E-Commerce",
    description:
      "A responsive e-commerce platform designed for fashion lovers to browse and shop with ease. Powered by Tailwind CSS and TypeScript, showcasing modern, scalable, and user-friendly web application development.",
    image: "projects/fashoun.png",
    tags: ["TypeScript", "Tailwind CSS", "HTML5", "E-Commerce"],
    demoUrl: "https://fashionwe.netlify.app",
    githubUrl: "https://lnkd.in/dJEPxPaW",
    date: "2024",
  },
  {
    id: 5,
    title: "Fitness Fit",
    description:
      "A comprehensive fitness mobile application built with React Native. Features workout tracking, exercise routines, progress monitoring, and personalized fitness plans. Designed to help users achieve their fitness goals with an intuitive and engaging mobile interface.",
    image: "projects/fit.jpg",
    tags: ["React Native", "Mobile App", "Fitness", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Miramaged802/fitnessfit.git",
    date: "2024",
  },
  {
    id: 6,
    title: "Vite Product System",
    description:
      "React & Vite-Powered Product-System App. Designed and developed a responsive e-commerce platform featuring dynamic product listings, advanced search/filtering, and an interactive shopping cart with streamlined checkout process.",
    image: "projects/pro.png",
    tags: ["React", "Vite", "E-Commerce", "State Management"],
    demoUrl: "https://mira-products.netlify.app/",
    githubUrl: "https://github.com/Miramaged802/product-system.git",
    date: "02/2024",
  },
  {
    id: 7,
    title: "Event Manager",
    description:
      "A comprehensive event management mobile application built with React Native. Features event creation, user invitations, event timeline management, and real-time notifications. Designed to streamline event planning and coordination with an intuitive mobile interface.",
    image: "projects/Event Manager.jpeg",
    tags: ["React Native", "Mobile App", "Event Management", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Miramaged802/task.git",
    date: "2024",
  },
  {
    id: 8,
    title: "FreelancerHub",
    description:
      "A modern freelance platform connecting clients with skilled professionals. Built with modern web technologies featuring project management, secure payments, user profiles, and real-time messaging. Streamlines the freelancing workflow for both clients and freelancers.",
    image: "projects/Freelancer.png",
    tags: ["React", "Freelance Platform", "Web Development", "JavaScript"],
    demoUrl: "https://freelanceflo.netlify.app/",
    githubUrl: "https://github.com/Miramaged802/freelancerhubweb.git",
    date: "2024",
  },
  {
    id: 9,
    title: "CodeK - Software Company",
    description:
      "A professional website for a software technology company built using modern web templates. Features company portfolio, service offerings, team profiles, and client testimonials. Designed with a clean, corporate aesthetic to showcase technical expertise and business solutions.",
    image: "projects/Codek.png",
    tags: ["React", "Vite", "Corporate Website", "Tailwind CSS"],
    demoUrl: "https://codekf.netlify.app/",
    githubUrl: "https://github.com/Miramaged802/codek.git",
    date: "2024",
  },
  {
    id: 10,
    title: "FitClub - Gym Website",
    description:
      "A dynamic fitness and gym website designed to promote health and wellness services. Features class schedules, trainer profiles, membership plans, and fitness programs. Built with modern web technologies to provide an engaging user experience for fitness enthusiasts.",
    image: "projects/Gym.png",
    tags: ["Web Development", "Fitness", "Responsive Design", "JavaScript"],
    demoUrl: "https://fitclu.netlify.app/",
    githubUrl: "https://github.com/Miramaged802/fitclub.git",
    date: "2024",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/400/300";
                    e.target.alt = "Project Image";
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex space-x-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>

                  <span className="text-xs text-muted-foreground font-medium">
                    {project.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-card/30 rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">10</div>
            <div className="text-foreground/70 font-medium">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <div className="text-foreground/70 font-medium">Live Websites</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-foreground/70 font-medium">
              Technologies Used
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/miramaged802"
          >
            View All Projects on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
