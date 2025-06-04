import {
  Briefcase,
  MapPin,
  Calendar,
  Code,
  Building2,
  Globe,
} from "lucide-react";

export const Experience = () => {
  const experienceData = [
    {
      title: "Front End Developer",
      company: "Freelancer - Nafezly",
      type: "Freelance",
      description:
        "Quiz Game - Built with Firebase, HTML, CSS, and JavaScript. This project is an interactive quiz game that I developed using Firebase, HTML, CSS, and JavaScript. The game offers an engaging experience where users can test their knowledge in different categories and receive instant feedback on their answers.",
      dates: "02/2025 – 02/2025",
      location: "Online",
      technologies: ["Firebase", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Front End Developer",
      company: "Freelancer - Khamsat",
      type: "Freelance",
      description:
        "Built a sleek, responsive landing page with React.js, featuring smooth interactivity and a clean design. Used CSS for styling and React hooks for dynamic touches. Mobile-ready and user-friendly!",
      dates: "01/2025 – 01/2025",
      location: "Online",
      technologies: ["React.js", "CSS", "React Hooks"],
    },
    {
      title: "Trainee",
      company: "CIB Bank",
      type: "Internship",
      description:
        "My internship at CIB included online lectures on marketing. These sessions covered the differences between debit and credit cards, as well as the bank's operational system. This experience deepened my understanding of the banking sector.",
      dates: "08/2023 – 09/2023",
      location: "Cairo, Egypt",
      technologies: ["Banking Systems", "Marketing", "Financial Products"],
    },
    {
      title: "Trainee",
      company: "CIB Bank",
      type: "Internship",
      description:
        "My internship at CIB consisted of online lectures focused on marketing. I learned about the differences between debit and credit cards, as well as the bank's system. This experience enhanced my understanding of the banking industry.",
      dates: "08/2022 – 09/2022",
      location: "Cairo, Egypt",
      technologies: ["Banking Operations", "Marketing", "Financial Systems"],
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Freelance":
        return "bg-transparent text-blue-500 border-blue-300 ";
      case "Internship":
        return "bg-transparent text-purple-500 border-purple-300 ";
      default:
        return "bg-transparent text-gray-500 border-gray-300 ";
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "Freelance":
        return <Globe className="w-6 h-6 text-primary" />;
      case "Internship":
        return <Building2 className="w-6 h-6 text-primary" />;
      default:
        return <Briefcase className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            My journey in web development and professional growth through
            various roles and projects
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>

            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                  {/* Experience card */}
                  <div className="ml-20">
                    <div className="group bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                        <div className="flex-1">
                          {/* Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              {getIcon(exp.type)}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-left">
                                {exp.title}
                              </h3>
                              <h4 className="text-xl font-medium text-foreground/90 mt-1 text-left">
                                {exp.company}
                              </h4>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-foreground/70 leading-relaxed mb-6 text-start">
                            {exp.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Date and Location */}
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                            <div className="flex items-center space-x-2 text-foreground/70">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-medium">
                                {exp.dates}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 text-foreground/70">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm font-medium">
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Type badge */}
                        <div className="lg:ml-6">
                          <div
                            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 ${getTypeColor(
                              exp.type
                            )}`}
                          >
                            <Code className="w-4 h-4 mr-2" />
                            {exp.type}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card/30 rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-foreground/70 font-medium">Positions</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-foreground/70 font-medium">
              Freelance Projects
            </div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-foreground/70 font-medium">Internships</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-2xl border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-foreground/70 font-medium">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
