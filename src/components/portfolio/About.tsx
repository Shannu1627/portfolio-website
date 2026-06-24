import { motion } from "framer-motion";
import { GraduationCap, Code, Brain, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { value: "10+", label: "Projects Built", icon: Code },
  { value: "12+", label: "Technologies", icon: Brain },
  { value: "2028", label: "Graduation Year", icon: GraduationCap },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="About Me" title="A developer with a builder's mindset" />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I'm <span className="text-foreground font-semibold">Madem Shanmukha Sai</span>,
              a <span className="text-foreground">B.Tech Computer Science</span> student graduating in
              <span className="text-foreground"> 2028</span>. I fell in love with the web the first time
              I deployed a page that felt alive — and I've been chasing that feeling ever since.
            </p>
            <p>
              I specialize in <span className="text-foreground">React.js</span> and modern frontend tooling,
              and I'm actively expanding into <span className="text-foreground">Full Stack Development</span>
              {" "}and <span className="text-foreground">Artificial Intelligence</span>. Every project I build
              is an opportunity to ship something faster, cleaner, and more delightful than the last.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Curious", "Detail-oriented", "Team Player", "Fast Learner"].map((t) => (
                <span key={t} className="px-4 py-1.5 rounded-full glass text-sm">
                  <Rocket className="inline w-3 h-3 mr-2 text-primary" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 grid gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-strong rounded-2xl p-6 flex items-center gap-5 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center group-hover:glow-primary transition-shadow">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold font-display text-gradient">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
