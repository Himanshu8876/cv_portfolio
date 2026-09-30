import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Job Radar",

    description:
      "A full-stack job discovery and matching platform that aggregates fresher opportunities, processes resumes with Gemini, matches jobs to user profiles, and delivers personalized job alerts.",

    image: "/projects/job.png",

    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Gemini API",
      "JWT",
    ],

    category: "Full-Stack + AI",

    link: "https://jobraadar.netlify.app/",

    github: "https://github.com/Himanshu8876/job-radar",
  },

  {
    title: "MyFinance-AI",

    description:
      "An AI-powered personal finance platform that helps users track income and expenses, scan receipts using Gemini, automatically categorize transactions, and understand their spending through interactive analytics.",

    image: "/projects/finora_02.png",

    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
    ],

    category: "AI + FinTech",

    link: "https://jocular-madeleine-de937f.netlify.app/",

    github: "https://github.com/Himanshu8876/finance-AI",
  },

  {
    title: "Operate",

    description:
      "A real-time leveraged trading platform built for financial markets, supporting live market interactions, trading workflows, referral systems, and scalable cloud infrastructure.",

    image: "/projects/operate.png",

    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "AWS",
      "Lambda",
      "WebSockets",
    ],

    category: "Trading Platform",

    link: "#",

    github: "https://github.com/Udaylev/oprate-demo-v01",
  },

  {
    title: "TechBairn Website",

    description:
      "A full-stack educational platform for technical training and learning resources, featuring authentication, course management, payments, and cloud deployment.",

    image: "/projects/techbairn.png",

    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "Razorpay",
    ],

    category: "Full-Stack Development",

    link: "https://techbairn.com",

    github: "https://github.com/whateverhappenshappens/tbrFrontend",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden"
    >

      {/* Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">

          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Things I've
            <span className="font-serif italic font-normal text-white">
              {" "}built.
            </span>
          </h2>

          <p className="text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
            A selection of projects I've built across full-stack development,
            artificial intelligence, financial technology, trading systems,
            and developer-focused products.
          </p>

        </div>


        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, idx) => (

            <article
              key={project.title}
              className="
                group
                glass
                rounded-2xl
                overflow-hidden
                animate-fade-in
                border border-border/40
                hover:border-primary/30
                transition-all
                duration-500
              "
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >

              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-surface">

                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Dark overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                    opacity-70
                  "
                />

                {/* Category */}
                <div className="absolute top-5 left-5">

                  <span
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      bg-black/50
                      backdrop-blur-md
                      border
                      border-white/10
                      text-xs
                      text-white/80
                    "
                  >
                    {project.category}
                  </span>

                </div>


                {/* Hover Links */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    gap-4
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                >

                  <a
                    href={project.link}
                    target={project.link !== "#" ? "_blank" : undefined}
                    rel={
                      project.link !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      p-3
                      rounded-full
                      glass
                      hover:bg-primary
                      hover:text-primary-foreground
                      transition-all
                    "
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>


                  <a
                    href={project.github}
                    target={project.github !== "#" ? "_blank" : undefined}
                    rel={
                      project.github !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      p-3
                      rounded-full
                      glass
                      hover:bg-primary
                      hover:text-primary-foreground
                      transition-all
                    "
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github className="w-5 h-5" />
                  </a>

                </div>

              </div>


              {/* Content */}
              <div className="p-6 space-y-5">

                {/* Title */}
               {/* Title */}
<div className="flex items-start justify-between gap-4">
  <div>
    <p className="text-xs uppercase tracking-wider text-primary mb-2">
      {project.category}
    </p>

    {project.link !== "#" ? (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title}`}
      >
        <h3
          className="
            text-xl
            font-semibold
            group-hover:text-primary
            transition-colors
            cursor-pointer
          "
        >
          {project.title}
        </h3>
      </a>
    ) : (
      <h3
        className="
          text-xl
          font-semibold
          group-hover:text-primary
          transition-colors
        "
      >
        {project.title}
      </h3>
    )}
  </div>

  <ArrowUpRight
    className="
      w-5
      h-5
      flex-shrink-0
      text-muted-foreground
      group-hover:text-primary
      group-hover:translate-x-1
      group-hover:-translate-y-1
      transition-all
    "
  />
</div>


                {/* Description */}
                <p
                  className="
                    text-muted-foreground
                    text-sm
                    leading-relaxed
                  "
                >
                  {project.description}
                </p>


                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        bg-surface
                        text-xs
                        font-medium
                        border
                        border-border/50
                        text-muted-foreground
                        hover:border-primary/50
                        hover:text-primary
                        transition-all
                        duration-300
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
};