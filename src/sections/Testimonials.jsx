import {
  Award,
  ExternalLink,
  FileText,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    title: "AWS Certified Cloud Practitioner",
    type: "Certification",
    description:
      "Earned the AWS Certified Cloud Practitioner certification, demonstrating foundational knowledge of AWS cloud concepts, services, security, and cloud architecture.",
    icon: Award,
    link: "https://drive.google.com/file/d/17Kx4eclW_3LHv0zNoFd0smSLpAFikfuw/view",
    buttonText: "View Certificate",
  },
  {
    title: "Letter of Recommendation",
    type: "Recognition",
    description:
      "Received a Letter of Recommendation from Techbairn for my contributions during my Software Developer Internship, including full-stack development, deployment, and technical contributions.",
    icon: FileText,
    link: "https://drive.google.com/file/d/18ftvC-jHsdEUpMjgbSKuzLLPoJqy8rCg/view",
    buttonText: "View Recommendation",
  },
  {
    title: "Bolt 2.0 Hackathon Finalist",
    type: "Achievement",
    description:
      "Reached the Top 10 among 150+ participating teams at the Bolt 2.0 Hackathon.",
    icon: Trophy,
    link: "https://drive.google.com/file/d/1cKUAPK_s_1N30nTUqfXUnVXZiDNSO6-m/view",
    buttonText: "View Achievement",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx(
      (prev) => (prev + 1) % achievements.length
    );
  };

  const previous = () => {
    setActiveIdx(
      (prev) =>
        (prev - 1 + achievements.length) %
        achievements.length
    );
  };

  const achievement = achievements[activeIdx];
  const Icon = achievement.icon;

  return (
    <section
      id="achievements"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          w-[800px]
          h-[800px]
          bg-primary/5
          rounded-full
          blur-3xl
          -translate-x-1/2
          -translate-y-1/2
          pointer-events-none
        "
      />

      <div
        className="
          container
          mx-auto
          px-6
          relative
          z-10
        "
      >
        {/* Section Header */}
        <div
          className="
            text-center
            max-w-3xl
            mx-auto
            mb-16
          "
        >
          <span
            className="
              text-secondary-foreground
              text-sm
              font-medium
              tracking-wider
              uppercase
              animate-fade-in
            "
          >
            Achievements
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
              mb-6
              animate-fade-in
              animation-delay-100
              text-secondary-foreground
            "
          >
            Milestones I'm{" "}
            <span
              className="
                font-serif
                italic
                font-normal
                text-white
              "
            >
              proud of.
            </span>
          </h2>

          <p
            className="
              text-muted-foreground
              animate-fade-in
              animation-delay-200
            "
          >
            Certifications, recognition, and achievements
            from my academic and professional journey.
          </p>
        </div>

        {/* Achievement Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">

            {/* Main Achievement Card */}
            <div
              key={activeIdx}
              className="
                relative
                glass
                p-8
                md:p-12
                rounded-3xl
                glow-border
                animate-fade-in
                animation-delay-200
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-primary/10
                  flex
                  items-center
                  justify-center
                  mb-8
                "
              >
                <Icon
                  className="
                    w-8
                    h-8
                    text-primary
                  "
                />
              </div>

              {/* Achievement Type */}
              <span
                className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-primary
                  font-medium
                "
              >
                {achievement.type}
              </span>

              {/* Title */}
              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-semibold
                  mt-3
                  mb-5
                "
              >
                {achievement.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-muted-foreground
                  leading-relaxed
                  max-w-2xl
                "
              >
                {achievement.description}
              </p>

              {/* View Document Button */}
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-8
                  px-5
                  py-2.5
                  rounded-full
                  bg-primary/10
                  text-primary
                  border
                  border-primary/20
                  hover:bg-primary
                  hover:text-primary-foreground
                  transition-all
                  duration-300
                  text-sm
                  font-medium
                "
              >
                {achievement.buttonText}

                <ExternalLink
                  className="w-4 h-4"
                />
              </a>
            </div>

            {/* Navigation */}
            <div
              className="
                flex
                items-center
                justify-center
                gap-5
                mt-8
              "
            >
              {/* Previous */}
              <button
                onClick={previous}
                aria-label="Previous achievement"
                className="
                  p-3
                  rounded-full
                  glass
                  hover:bg-primary/10
                  hover:text-primary
                  transition-all
                "
              >
                <ChevronLeft
                  className="w-5 h-5"
                />
              </button>

              {/* Dots */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                {achievements.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      setActiveIdx(idx)
                    }
                    aria-label={`Show achievement ${
                      idx + 1
                    }`}
                    className={`
                      h-2
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        idx === activeIdx
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }
                    `}
                  />
                ))}
              </div>

              {/* Next */}
              <button
                onClick={next}
                aria-label="Next achievement"
                className="
                  p-3
                  rounded-full
                  glass
                  hover:bg-primary/10
                  hover:text-primary
                  transition-all
                "
              >
                <ChevronRight
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};