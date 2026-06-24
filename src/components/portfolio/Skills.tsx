import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { FileCode, Palette, Braces, Atom, Wind, GitBranch, Smartphone, Layout } from "lucide-react";
import { Github } from "./BrandIcons";

const skills = [
  { name: "HTML", icon: FileCode, color: "from-orange-500 to-red-500", level: 95 },
  { name: "CSS", icon: Palette, color: "from-blue-500 to-cyan-500", level: 92 },
  { name: "JavaScript", icon: Braces, color: "from-yellow-400 to-amber-500", level: 88 },
  { name: "React.js", icon: Atom, color: "from-cyan-400 to-blue-500", level: 90 },
  { name: "Tailwind CSS", icon: Wind, color: "from-teal-400 to-cyan-500", level: 93 },
  { name: "Git", icon: GitBranch, color: "from-orange-600 to-red-600", level: 85 },
  { name: "GitHub", icon: Github, color: "from-slate-400 to-slate-600", level: 88 },
  { name: "Responsive Design", icon: Smartphone, color: "from-purple-500 to-pink-500", level: 92 },
  { name: "Frontend Dev", icon: Layout, color: "from-blue-500 to-violet-500", level: 90 },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Skills" title="The tools I build with"
          subtitle="A modern frontend stack I use daily to ship production-ready interfaces." />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative glass-strong rounded-2xl p-6 overflow-hidden cursor-default"
            >
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity rounded-full`} />

              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} grid place-items-center mb-4 group-hover:scale-110 transition-transform`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>

                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
                <div className="mt-2 text-xs text-muted-foreground font-mono">{skill.level}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
