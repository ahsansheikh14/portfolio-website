import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { timeline } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="04. Experience"
          title="Journey & Achievements"
          subtitle="My path in software engineering"
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-primary/50 to-transparent md:-translate-x-px" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.title + item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 md:px-8" />
              <motion.div
                className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background md:-translate-x-1.5 z-10 glow-ring"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
              />
              <div
                className={`ml-12 md:ml-0 md:w-1/2 md:px-8 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <span className="font-mono text-xs text-accent">{item.year}</span>
                <h3 className="text-xl font-bold text-heading mt-1">{item.title}</h3>
                <p className="text-sm text-primary-light font-medium mt-0.5">{item.org}</p>
                <p className="mt-3 text-body text-sm leading-relaxed">{item.description}</p>
                <motion.div
                  className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                >
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-md glass text-accent/90"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
