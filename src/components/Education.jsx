import { GraduationCap, MapPin, Calendar } from "lucide-react";

export const Education = () => {
  const educationData = [
    {
      title: "Front-End And Mobile Cross Platform",
      institution: "Information Technology Institute",
      dates: "12/2024 – 04/2025",
      location: "Egypt, Aswan",
    },
    {
      title: "React Web Developer",
      institution: "Digital Egypt Pioneers Initiative (DEPI)",
      dates: "06/2024 – 11/2024",
      location: "Cairo, Egypt",
    },
    {
      title: "Business Information Systems",
      institution: "Helwan university",
      dates: "09/2020 – 07/2024",
      location: "Cairo, Egypt",
    },
  ];

  return (
    <section id="educations" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            My educational journey and professional development experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/30 rounded-l-2xl"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center space-x-3 mb-2 md:mb-0">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {edu.title}
                  </h3>
                </div>
              </div>

              <h4 className="text-xl font-medium text-foreground/90 mb-4 text-start">
                {edu.institution}
              </h4>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 text-foreground/70">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.dates}</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground/70">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
