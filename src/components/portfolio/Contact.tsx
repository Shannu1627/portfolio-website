import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

const channels = [
  { icon: Mail, label: "Email", value: "shanmukhasai98@gmail.com", href: "mailto:shanmukhasai98@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shanmukhasai", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "github.com/shanmukhasai", href: "https://github.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Get in touch
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05]">
            Let's build something
            <br />
            <span className="text-gradient">amazing together.</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Open to internships, freelance projects, and collaborations.
            Drop me a line — I reply within 24 hours.
          </p>

          <motion.a
            href="mailto:shanmukhasai98@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-primary text-white font-semibold glow-accent text-lg mb-16"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </motion.a>

          <div className="grid sm:grid-cols-3 gap-4">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group glass-strong rounded-2xl p-6 text-left flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center">
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
