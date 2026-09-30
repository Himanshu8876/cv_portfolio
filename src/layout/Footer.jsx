import {
  Github,
  Linkedin,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Himanshu8876",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/himanshu-garg-326021252/",
    label: "LinkedIn",
  },
  {
    icon: Code2,
    href: "https://leetcode.com/u/garghimanshu778/",
    label: "LeetCode",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border overflow-hidden">

      {/* Subtle Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-96
          h-32
          bg-primary/5
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo & Copyright */}
          <div className="text-center md:text-left">

            <a
              href="#"
              aria-label="Himanshu Garg - Home"
              className="
                text-xl
                font-bold
                tracking-tight
                hover:text-primary
                transition-colors
              "
            >
              HG<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-2">
              Full-Stack Developer building scalable web applications.
            </p>

            <p className="text-xs text-muted-foreground/70 mt-2">
              © {currentYear} Himanshu Garg. All rights reserved.
            </p>

          </div>

          {/* Footer Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-sm
                  text-muted-foreground
                  hover:text-foreground
                  transition-colors
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="
                    p-2.5
                    rounded-full
                    glass
                    hover:bg-primary/10
                    hover:text-primary
                    hover:border-primary/30
                    transition-all
                    duration-300
                  "
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}

          </div>

        </div>

        {/* Bottom Divider / Back to Top */}
        <div
          className="
            mt-10
            pt-6
            border-t
            border-border/50
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          <p className="text-xs text-muted-foreground/60">
            Built with React, TypeScript & Tailwind CSS.
          </p>

          <a
            href="#"
            className="
              flex
              items-center
              gap-1.5
              text-xs
              text-muted-foreground
              hover:text-primary
              transition-colors
            "
          >
            Back to top
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

        </div>

      </div>
    </footer>
  );
};