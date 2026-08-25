import {
  Code2,
  Cloud,
  Brain,
  TrendingUp,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building modern web applications with React, TypeScript, Node.js, Express.js, MongoDB, and PostgreSQL.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Working with AWS, Docker, Kubernetes, and GitHub Actions to build and deploy scalable applications.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Integrating AI capabilities such as Google Gemini API, OCR, and LLM-powered features into real-world applications.",
  },
  {
    icon: TrendingUp,
    title: "FinTech & Trading",
    description:
      "Experience across financial technology, derivatives trading, real-time market data, and trading platforms.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Developer,
              <span className="font-serif italic font-normal text-white">
                {" "}builder, and problem solver.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">

              <p>
                I'm Himanshu Garg, a software developer with a strong interest
                in building full-stack applications, scalable backend systems,
                and cloud-based products. I recently completed my B.Tech in
                Information Technology from Vellore Institute of Technology.
              </p>

              <p>
                My experience spans software development, cloud infrastructure,
                AI-powered applications, and financial technology. I've worked
                with React, TypeScript, Node.js, MongoDB, PostgreSQL, and AWS to
                build and deploy real-world applications.
              </p>

              <p>
                I've also worked on financial trading platforms and derivatives
                markets, which has given me an understanding of both the
                technology and business side of financial products.
              </p>

            </div>

            {/* Personal Statement */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">

              <p className="text-lg font-medium italic text-foreground">
                "I enjoy turning complex problems into simple, reliable
                products — combining engineering, curiosity, and continuous
                learning to build things that create real value."
              </p>

            </div>

          </div>


          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{
                    animationDelay: `${(idx + 1) * 100}ms`,
                  }}
                >

                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">

                    <Icon className="w-6 h-6 text-primary" />

                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};