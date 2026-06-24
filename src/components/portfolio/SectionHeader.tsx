import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 max-w-2xl"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        {eyebrow}
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold mb-3">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
    </motion.div>
  );
}
