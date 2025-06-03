import { Code, Building, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-2xl">
                {/* Placeholder for photo - replace src with your actual photo */}
                <img
                  src="me/mira.jpg"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full"></div>
              </div>
              {/* Background decoration */}
              <div className="absolute -z-10 top-4 left-4 w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 lg:order-1">
            <h3 className="text-2xl font-semibold">
              Recent Graduate & Passionate Web Developer
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I am a recent graduate from the Faculty of Commerce (Business
              Information Systems) at Helwan University, with a passion for
              creating interactive and user-friendly web interfaces. I possess
              skills in HTML, CSS, JavaScript, and tools like React and
              Bootstrap and React Native, gained through projects such as
              e-commerce websites for antiques and electronic tools.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My experience includes internships at CIB Bank, participation in
              the Digital Egypt Pioneers Initiative, and intensive training at
              the Information Technology Institute (ITI) in Egypt, specializing
              in Front-End and Mobile Cross-Platform development. I am eager to
              leverage my skills in a dynamic environment to deliver innovative
              solutions.
            </p>


          </div>
        </div>

        {/* Skills/Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive websites with React, HTML, CSS,
                  JavaScript, and Bootstrap.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Business Systems</h4>
                <p className="text-muted-foreground">
                  Business Information Systems graduate with strong analytical
                  and problem-solving skills.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Professional Training</h4>
                <p className="text-muted-foreground">
                  Completed intensive training at ITI and DEPI, with practical
                  experience at CIB Bank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
