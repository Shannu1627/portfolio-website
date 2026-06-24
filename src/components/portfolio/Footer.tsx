import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display font-bold">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-primary">
            <Code2 className="w-4 h-4 text-white" />
          </span>
          <span className="text-gradient">Madem Shanmukha Sai</span>
        </div>
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          Built with <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" /> using React & Framer Motion
        </div>
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  );
}
