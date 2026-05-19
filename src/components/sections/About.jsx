import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../ui/SectionHeading";
import { stats } from "../../data/experience";
import { useCounter } from "../../hooks/useCounter";

function StatCard({ label, value, suffix, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useCounter(value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass rounded-2xl p-6 text-center hover:border-accent/30 transition-all duration-300 group"
    >
      <motion.p
        className="text-4xl md:text-5xl font-bold gradient-text"
        whileHover={{ scale: 1.05 }}
      >
        {count}
        {suffix}
      </motion.p>
      <p className="mt-2 text-sm text-muted group-hover:text-accent transition-colors">
        {label}
      </p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="01. About Me"
          title="Who I Am"
          subtitle="Passionate about building impactful software"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted leading-relaxed text-base md:text-lg"
          >
            <p>
              Hello! I'm <span className="text-accent font-medium">Ahsan Sheikh</span>, a
              Software Engineering student and passionate{" "}
              <span className="text-white">Full Stack MERN Developer</span> based in Pakistan.
            </p>
            <p>
              I specialize in building scalable web applications and AI-powered systems that
              solve real-world problems. From mental wellness platforms to smart city portals,
              I enjoy turning complex ideas into elegant, user-focused digital experiences.
            </p>
            <p>
              My interests span scalable backend architecture, authentication systems, REST API
              development, and exploring how AI can enhance modern applications. I'm actively
              strengthening my foundation in{" "}
              <span className="text-accent">Data Structures & Algorithms</span> and core
              software engineering principles.
            </p>
            <p>
              I've participated in hackathons and full-stack competitions — including the AUREX
              AI 2026 Web Development Competition at Bahria University — where I thrive under
              pressure and deliver production-quality solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 glow-ring"
          >
            <h3 className="font-mono text-accent text-sm mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              {[
                "Software Engineering Student",
                "MERN Stack Developer",
                "AI & Recommendation Systems",
                "Hackathon Competitor",
                "DSA Enthusiast",
                "Open to Internships & Collaborations",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-muted"
                >
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
