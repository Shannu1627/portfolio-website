import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import profileAsset from "../../assets/profile.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for Internships 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Shanmukha Sai</span>
            <br />
            <span className="text-foreground/90">Building Fast, Responsive &</span>
            <br />
            <span className="text-foreground/90">User-Centric Web Applications.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-xl mb-8"
          >
            Frontend Developer · React.js Enthusiast · Future Software Engineer.
            Crafting fast, accessible, and beautifully designed interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-white font-medium hover:scale-105 transition-transform glow-primary">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass hover:bg-white/10 transition-colors font-medium">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Find me</span>
            <div className="h-px flex-1 max-w-12 bg-border" />
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:shanmukhasai98@gmail.com" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass grid place-items-center hover:bg-white/10 hover:scale-110 transition-all">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[320px] h-[420px] sm:w-[400px] sm:h-[500px]">
            {/* Decorative rings */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-primary opacity-30 blur-2xl animate-pulse" />

            <div className="relative w-full h-full rounded-[2rem] overflow-hidden glass-strong p-2 animate-float">
             <img
              src={profileAsset}
              alt="Madem Shanmukha Sai"
               className="w-full h-full object-cover rounded-[1.75rem]"
            />

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-6 top-12 glass-strong rounded-2xl p-4 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Tech Stack</div>
                    <div className="text-sm font-semibold">React + TS</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-4 bottom-16 glass-strong rounded-2xl p-4 shadow-card"
              >
                <div className="text-xs text-muted-foreground mb-1">Currently</div>
                <div className="text-sm font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Coding in React
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
