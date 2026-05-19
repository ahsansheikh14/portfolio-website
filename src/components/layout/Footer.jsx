import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.p
          className="text-sm text-muted flex items-center justify-center gap-2 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Designed & Developed by{" "}
          <span className="text-accent font-medium glow-ring px-2 py-0.5 rounded">
            Ahsan Sheikh
          </span>
          <Heart className="w-4 h-4 text-accent fill-accent/30 inline" />
        </motion.p>
        <p className="mt-2 text-xs text-muted/60 font-mono">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
}
