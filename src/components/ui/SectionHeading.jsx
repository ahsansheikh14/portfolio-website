import { motion } from "framer-motion";

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16 text-center"
    >
      <span className="font-mono text-sm text-accent tracking-widest uppercase">
        {label}
      </span>
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-white [.light_&]:text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-muted text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
