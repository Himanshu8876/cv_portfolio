import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Tailwind CSS",
  "REST APIs",
  "GraphQL",
  "SQL",
  "Google Gemini API",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            {/* Availability */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Developer • Full-Stack Developer
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-5">

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in animation-delay-100">
                Building
                <span className="text-primary"> scalable </span>
                <br />
                digital products
                <br />
                <span className="font-serif italic font-normal text-white">
                  with purpose.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in animation-delay-200">
                Hi, I'm <span className="text-foreground font-medium">Himanshu Garg</span>.
                I'm a software developer focused on building full-stack web
                applications, scalable backend systems, and cloud-based solutions.
              </p>

              <p className="text-base text-muted-foreground/80 max-w-xl leading-relaxed animate-fade-in animation-delay-200">
                I work primarily with React, TypeScript, Node.js and AWS, with
                experience building applications across fintech, education,
                analytics and AI-powered products.
              </p>

            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">

              <Button size="lg">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>

              {/* DOWNLOAD CV */}
              <a
                href="/Himanshu_Garg_CV.pdf"
                download="Himanshu_Garg_CV.pdf"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 animate-fade-in animation-delay-400">

              <span className="text-sm text-muted-foreground">
                Find me on
              </span>

              <a
                href="https://github.com/Himanshu8876"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/himanshu-garg-326021252/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>

            </div>

          </div>


          {/* RIGHT - PROFILE */}
          <div className="relative animate-fade-in animation-delay-300">

            <div className="relative max-w-sm mx-auto">

              {/* Very subtle glow */}
              <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" />

              <div className="relative">

                <img
                  src="/profile-photo.png"
                  alt="Himanshu Garg"
                  className="w-full aspect-[4/5] object-cover rounded-2xl border border-border/50"
                />

                {/* Availability */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-background/90 backdrop-blur-md border border-border/50">

                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />

                    <span className="text-sm font-medium">
                      Open to opportunities
                    </span>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* SKILLS */}
        <div className="mt-24 animate-fade-in animation-delay-600">

          <p className="text-sm text-muted-foreground mb-6">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">

            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />

            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee">

              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-6 py-3"
                >
                  <span className="text-lg font-medium text-muted-foreground/50 hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>


      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">

        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>

          <ChevronDown className="w-5 h-5 animate-bounce" />

        </a>

      </div>

    </section>
  );
};