import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Code2, X, Menu, ArrowRight, Mail, Sparkles, Rocket, Code, Brain, GraduationCap, FileCode, Palette, Braces, Atom, Wind, GitBranch, Smartphone, Layout, ArrowUpRight, ExternalLink, Heart } from "lucide-react";
function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsx(
    motion.div,
    {
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.6 },
      className: "fixed inset-0 z-[100] grid place-items-center bg-background",
      children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { scale: 0, rotate: -180 },
            animate: { scale: 1, rotate: 0 },
            transition: { type: "spring", duration: 0.8 },
            className: "w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-primary grid place-items-center glow-accent",
            children: /* @__PURE__ */ jsx("span", { className: "text-3xl font-display font-bold text-white", children: "MS" })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 },
            className: "text-sm text-muted-foreground font-mono",
            children: "Crafting experience..."
          }
        )
      ] })
    }
  ) });
}
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    motion.nav,
    {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "glass-strong shadow-card" : ""}`, children: [
          /* @__PURE__ */ jsxs("a", { href: "#home", className: "flex items-center gap-2 font-display font-bold text-lg", children: [
            /* @__PURE__ */ jsx("span", { className: "grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary glow-primary", children: /* @__PURE__ */ jsx(Code2, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "MSS" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: "px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              className: "hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-primary text-white text-sm font-medium hover:scale-105 transition-transform glow-primary",
              children: "Let's Connect"
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "md:hidden text-foreground", onClick: () => setOpen(!open), children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {}) })
        ] }),
        open && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            className: "md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1",
            children: links.map((l) => /* @__PURE__ */ jsx(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: "px-4 py-3 text-sm rounded-lg hover:bg-white/5",
                children: l.label
              },
              l.href
            ))
          }
        )
      ] })
    }
  );
}
function Github(props) {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ jsx("path", { d: "M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" }) });
}
function Linkedin(props) {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ jsx("path", { d: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0Z" }) });
}
const profileAsset = "/assets/profile-q3uZXTrm.png";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-blob" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 -right-20 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl animate-blob", style: { animationDelay: "4s" } }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.2 },
                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6",
                children: [
                  /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }),
                    /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-green-500" })
                  ] }),
                  "Available for Internships 2026"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 },
                className: "text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6",
                children: [
                  "Hi, I'm",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Shanmukha Sai" }),
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: "Building Fast, Responsive &" }),
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: "User-Centric Web Applications." })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4 },
                className: "text-lg text-muted-foreground max-w-xl mb-8",
                children: "Frontend Developer · React.js Enthusiast · Future Software Engineer. Crafting fast, accessible, and beautifully designed interfaces."
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.5 },
                className: "flex flex-wrap gap-4 mb-10",
                children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "#projects",
                      className: "group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-white font-medium hover:scale-105 transition-transform glow-primary",
                      children: [
                        "View Projects",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "#contact",
                      className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass hover:bg-white/10 transition-colors font-medium",
                      children: [
                        /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                        "Contact Me"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.7 },
                className: "flex items-center gap-4",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Find me" }),
                  /* @__PURE__ */ jsx("div", { className: "h-px flex-1 max-w-12 bg-border" }),
                  [
                    { icon: Github, href: "https://github.com" },
                    { icon: Linkedin, href: "https://linkedin.com" },
                    { icon: Mail, href: "mailto:shanmukhasai98@gmail.com" }
                  ].map((s, i) => /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: s.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "w-10 h-10 rounded-xl glass grid place-items-center hover:bg-white/10 hover:scale-110 transition-all",
                      children: /* @__PURE__ */ jsx(s.icon, { className: "w-4 h-4" })
                    },
                    i
                  ))
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.9, delay: 0.3 },
          className: "relative flex justify-center lg:justify-end",
          children: /* @__PURE__ */ jsxs("div", { className: "relative w-[320px] h-[420px] sm:w-[400px] sm:h-[500px]", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 rounded-[2.5rem] bg-gradient-primary opacity-30 blur-2xl animate-pulse" }),
            /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full rounded-[2rem] overflow-hidden glass-strong p-2 animate-float", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: profileAsset,
                  alt: "Madem Shanmukha Sai",
                  className: "w-full h-full object-cover rounded-[1.75rem]"
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: -50 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 1 },
                  className: "absolute -left-6 top-12 glass-strong rounded-2xl p-4 shadow-card",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Tech Stack" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: "React + TS" })
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: 50 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 1.2 },
                  className: "absolute -right-4 bottom-16 glass-strong rounded-2xl p-4 shadow-card",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Currently" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-sm font-semibold flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-green-400 animate-pulse" }),
                      "Coding in React"
                    ] })
                  ]
                }
              )
            ] })
          ] })
        }
      )
    ] })
  ] });
}
function SectionHeader({ eyebrow, title, subtitle }) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "mb-16 max-w-2xl",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
          eyebrow
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl font-bold mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-gradient", children: title }) }),
        subtitle && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: subtitle })
      ]
    }
  );
}
const stats = [
  { value: "10+", label: "Projects Built", icon: Code },
  { value: "12+", label: "Technologies", icon: Brain },
  { value: "2028", label: "Graduation Year", icon: GraduationCap }
];
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "relative py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "About Me", title: "A developer with a builder's mindset" }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "lg:col-span-3 space-y-6 text-lg text-muted-foreground leading-relaxed",
          children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "I'm ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold", children: "Madem Shanmukha Sai" }),
              ", a ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "B.Tech Computer Science" }),
              " student graduating in",
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: " 2028" }),
              ". I fell in love with the web the first time I deployed a page that felt alive — and I've been chasing that feeling ever since."
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "I specialize in ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "React.js" }),
              " and modern frontend tooling, and I'm actively expanding into ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Full Stack Development" }),
              " ",
              "and ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Artificial Intelligence" }),
              ". Every project I build is an opportunity to ship something faster, cleaner, and more delightful than the last."
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 pt-2", children: ["Curious", "Detail-oriented", "Team Player", "Fast Learner"].map((t) => /* @__PURE__ */ jsxs("span", { className: "px-4 py-1.5 rounded-full glass text-sm", children: [
              /* @__PURE__ */ jsx(Rocket, { className: "inline w-3 h-3 mr-2 text-primary" }),
              t
            ] }, t)) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.2 },
          className: "lg:col-span-2 grid gap-4",
          children: stats.map((s, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              whileHover: { y: -4, scale: 1.02 },
              className: "glass-strong rounded-2xl p-6 flex items-center gap-5 group",
              style: { animationDelay: `${i * 100}ms` },
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center group-hover:glow-primary transition-shadow", children: /* @__PURE__ */ jsx(s.icon, { className: "w-7 h-7 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold font-display text-gradient", children: s.value }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: s.label })
                ] })
              ]
            },
            s.label
          ))
        }
      )
    ] })
  ] }) });
}
const skills = [
  { name: "HTML", icon: FileCode, color: "from-orange-500 to-red-500", level: 95 },
  { name: "CSS", icon: Palette, color: "from-blue-500 to-cyan-500", level: 92 },
  { name: "JavaScript", icon: Braces, color: "from-yellow-400 to-amber-500", level: 88 },
  { name: "React.js", icon: Atom, color: "from-cyan-400 to-blue-500", level: 90 },
  { name: "Tailwind CSS", icon: Wind, color: "from-teal-400 to-cyan-500", level: 93 },
  { name: "Git", icon: GitBranch, color: "from-orange-600 to-red-600", level: 85 },
  { name: "GitHub", icon: Github, color: "from-slate-400 to-slate-600", level: 88 },
  { name: "Responsive Design", icon: Smartphone, color: "from-purple-500 to-pink-500", level: 92 },
  { name: "Frontend Dev", icon: Layout, color: "from-blue-500 to-violet-500", level: 90 }
];
function Skills() {
  return /* @__PURE__ */ jsxs("section", { id: "skills", className: "relative py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-50" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          eyebrow: "Skills",
          title: "The tools I build with",
          subtitle: "A modern frontend stack I use daily to ship production-ready interfaces."
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4", children: skills.map((skill, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.05 },
          whileHover: { y: -6 },
          className: "group relative glass-strong rounded-2xl p-6 overflow-hidden cursor-default",
          children: [
            /* @__PURE__ */ jsx("div", { className: `absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity rounded-full` }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} grid place-items-center mb-4 group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsx(skill.icon, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-3", children: skill.name }),
              /* @__PURE__ */ jsx("div", { className: "h-1.5 rounded-full bg-white/5 overflow-hidden", children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  whileInView: { width: `${skill.level}%` },
                  viewport: { once: true },
                  transition: { duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" },
                  className: `h-full rounded-full bg-gradient-to-r ${skill.color}`
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 text-xs text-muted-foreground font-mono", children: [
                skill.level,
                "%"
              ] })
            ] })
          ]
        },
        skill.name
      )) })
    ] })
  ] });
}
const faqImg = "/assets/project-faq-Da1cO62u.jpg";
const portfolioImg = "/assets/project-portfolio-vk7WaXUo.jpg";
const projects = [
  {
    title: "Smart FAQ System",
    description: "An intelligent FAQ platform with instant search, categorized answers, and a clean conversational UI. Built to deliver fast, accurate help with snappy interactions.",
    image: faqImg,
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/shanmukhasai",
    demo: "#"
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern, animated portfolio (this one!) crafted with React, Framer Motion, and a custom glassmorphic design system. Recruiter-optimized from the first scroll.",
    image: portfolioImg,
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/shanmukhasai",
    demo: "#"
  }
];
function Projects() {
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "relative py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Featured Work",
        title: "Projects I'm proud of",
        subtitle: "A selection of products and experiments — each one a chance to push my craft forward."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto", children: projects.map((p, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: i * 0.1 },
        whileHover: { y: -8 },
        className: "group glass-strong rounded-3xl overflow-hidden flex flex-col",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: p.image,
                alt: p.title,
                loading: "lazy",
                width: 1024,
                height: 640,
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 w-10 h-10 rounded-full glass-strong grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 group-hover:text-gradient transition-all", children: p.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4 flex-1", children: p.description }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-5", children: p.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10", children: t }, t)) }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: p.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass hover:bg-white/10 transition-colors text-sm font-medium",
                  children: [
                    /* @__PURE__ */ jsx(Github, { className: "w-4 h-4" }),
                    " Code"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: p.demo,
                  className: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-primary text-white text-sm font-medium hover:scale-105 transition-transform",
                  children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }),
                    " Live"
                  ]
                }
              )
            ] })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
const milestones = [
  { year: "2024", title: "Started B.Tech CSE", desc: "Began my Computer Science Engineering journey — diving into algorithms, data structures, and the fundamentals that power everything I build.", icon: GraduationCap },
  { year: "2025", title: "Learned Frontend Development", desc: "Mastered HTML, CSS, and JavaScript. Built my first websites and discovered a deep love for crafting user interfaces.", icon: Code2 },
  { year: "2026", title: "Built React Projects", desc: "Leveled up with React.js, Tailwind, and modern tooling. Shipped multiple projects, learning component design and state management along the way.", icon: Rocket },
  { year: "Now", title: "Exploring AI & Full Stack", desc: "Currently expanding into Full Stack Development and Artificial Intelligence — building the foundation to become a complete software engineer.", icon: Brain }
];
function Journey() {
  return /* @__PURE__ */ jsx("section", { id: "journey", className: "relative py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "My Journey",
        title: "From first line of code to here",
        subtitle: "A timeline of growth, curiosity, and the milestones that shaped my path."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent md:-translate-x-1/2" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: milestones.map((m, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: i * 0.1 },
          className: `relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center glow-primary ring-4 ring-background", children: /* @__PURE__ */ jsx(m.icon, { className: "w-5 h-5 text-white" }) }) }),
            /* @__PURE__ */ jsx("div", { className: `ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`, children: /* @__PURE__ */ jsxs(motion.div, { whileHover: { y: -4 }, className: "glass-strong rounded-2xl p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-primary mb-2", children: m.year }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: m.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: m.desc })
            ] }) })
          ]
        },
        m.title
      )) })
    ] })
  ] }) });
}
const channels = [
  { icon: Mail, label: "Email", value: "shanmukhasai98@gmail.com", href: "mailto:shanmukhasai98@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shanmukhasai", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "github.com/shanmukhasai", href: "https://github.com" }
];
function Contact() {
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/15 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-5xl px-6 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse" }),
            "Get in touch"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05]", children: [
            "Let's build something",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "amazing together." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto mb-12", children: "Open to internships, freelance projects, and collaborations. Drop me a line — I reply within 24 hours." }),
          /* @__PURE__ */ jsxs(
            motion.a,
            {
              href: "mailto:shanmukhasai98@gmail.com",
              whileHover: { scale: 1.05 },
              className: "inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-primary text-white font-semibold glow-accent text-lg mb-16",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }),
                "Say Hello"
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: channels.map((c, i) => /* @__PURE__ */ jsxs(
            motion.a,
            {
              href: c.href,
              target: "_blank",
              rel: "noopener noreferrer",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              whileHover: { y: -4 },
              className: "group glass-strong rounded-2xl p-6 text-left flex items-center gap-4",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center", children: /* @__PURE__ */ jsx(c.icon, { className: "w-5 h-5 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: c.label }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-medium truncate", children: c.value })
                ] }),
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" })
              ]
            },
            c.label
          )) })
        ]
      }
    ) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative border-t border-white/5 py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-display font-bold", children: [
      /* @__PURE__ */ jsx("span", { className: "grid place-items-center w-8 h-8 rounded-lg bg-gradient-primary", children: /* @__PURE__ */ jsx(Code2, { className: "w-4 h-4 text-white" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Madem Shanmukha Sai" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
      "Built with ",
      /* @__PURE__ */ jsx(Heart, { className: "w-3.5 h-3.5 text-pink-400 fill-pink-400" }),
      " using React & Framer Motion"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " All rights reserved."
    ] })
  ] }) });
}
function Portfolio() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(LoadingScreen, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Skills, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Journey, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Portfolio as component
};
