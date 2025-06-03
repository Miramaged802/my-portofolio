import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "React.js", level: 85, category: "frontend" },
  { name: "React Native", level: 80, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },

  // Backend
  { name: "Node.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "Firebase", level: 80, category: "backend" },

  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 capitalize font-semibold",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg transform scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
              )}
            >
              {category === "all" ? "All Skills" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
            >
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              <div className="relative">
                <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden mb-2">
                  <div
                    className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: skill.level + "%",
                      animationDelay: `${key * 0.1}s`,
                    }}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground capitalize">
                    {skill.category}
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Category badge */}
              <div className="mt-3">
                <span
                  className={cn(
                    "inline-block px-3 py-1 rounded-full text-xs font-semibold border transition-colors duration-200",
                    skill.category === "frontend" &&
                      "bg-transparent text-blue-500 border-blue-300 ",
                    skill.category === "backend" &&
                      "bg-transparent text-green-500 border-green-300 ",
                    skill.category === "tools" &&
                      "bg-transparent text-purple-500 border-purple-300"
                  )}
                >
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
