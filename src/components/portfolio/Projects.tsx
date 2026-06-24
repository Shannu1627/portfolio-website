import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "./BrandIcons";
import { SectionHeader } from "./SectionHeader";
import faqImg from "@/assets/project-faq.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";

const projects = [
  {
    title: "Smart FAQ System",
    description: "An intelligent FAQ platform with instant search, categorized answers, and a clean conversational UI. Built to deliver fast, accurate help with snappy interactions.",
    image: faqImg,
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/shanmukhasai",
    demo: "#",
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern, animated portfolio (this one!) crafted with React, Framer Motion, and a custom glassmorphic design system. Recruiter-optimized from the first scroll.",
    image: portfolioImg,
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/shanmukhasai",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Featured Work" title="Projects I'm proud of"
          subtitle="A selection of products and experiments — each one a chance to push my craft forward." />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass-strong rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-strong grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass hover:bg-white/10 transition-colors text-sm font-medium">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href={p.demo}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-primary text-white text-sm font-medium hover:scale-105 transition-transform">
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
