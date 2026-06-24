import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket, Brain } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const milestones = [
  { year: "2024", title: "Started B.Tech CSE", desc: "Began my Computer Science Engineering journey — diving into algorithms, data structures, and the fundamentals that power everything I build.", icon: GraduationCap },
  { year: "2025", title: "Learned Frontend Development", desc: "Mastered HTML, CSS, and JavaScript. Built my first websites and discovered a deep love for crafting user interfaces.", icon: Code2 },
  { year: "2026", title: "Built React Projects", desc: "Leveled up with React.js, Tailwind, and modern tooling. Shipped multiple projects, learning component design and state management along the way.", icon: Rocket },
  { year: "Now", title: "Exploring AI & Full Stack", desc: "Currently expanding into Full Stack Development and Artificial Intelligence — building the foundation to become a complete software engineer.", icon: Brain },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="My Journey" title="From first line of code to here"
          subtitle="A timeline of growth, curiosity, and the milestones that shaped my path." />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon node */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center glow-primary ring-4 ring-background">
                    <m.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div whileHover={{ y: -4 }} className="glass-strong rounded-2xl p-6">
                    <div className="text-xs font-mono text-primary mb-2">{m.year}</div>
                    <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
