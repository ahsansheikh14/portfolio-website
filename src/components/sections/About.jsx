import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="01. About Me"
          title="Who I Am"
          subtitle="Passionate about building impactful software"
        />

        <motion.div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-body leading-relaxed text-base md:text-lg"
          >
            <p>
              Hello! I'm <span className="text-accent font-medium">Ahsan Sheikh</span>, a
              Software Engineering student at{" "}
              <span className="text-highlight font-medium">Bahria University</span> (since 2023) and a passionate{" "}
              <span className="text-highlight font-medium">Full Stack MERN Developer</span> based in Pakistan.
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
                "Software Engineering @ Bahria University (2023)",
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
                  className="flex items-center gap-3 text-body"
                >
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
