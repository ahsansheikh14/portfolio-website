import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="02. Skills"
          title="Tech Stack & Expertise"
          subtitle="Technologies I work with daily"
        />

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: catIndex * 0.08, duration: 0.5 }}
              className="glass rounded-2xl p-6 hover:shadow-[0_0_40px_rgba(149,209,209,0.12)] hover:border-accent/25 transition-all duration-300 group"
            >
              <h3 className="font-mono text-accent text-sm mb-5 flex items-center gap-2">
                <span className="w-8 h-px bg-accent/50 group-hover:w-12 transition-all" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.05 + i * 0.03 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(149, 209, 209, 0.3)",
                    }}
                    className="px-3 py-1.5 text-xs md:text-sm rounded-lg bg-primary/20 border border-primary/30 text-white/90 hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
