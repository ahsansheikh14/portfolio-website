import { motion } from "framer-motion";
import { ExternalLink, Code2, Trophy, Sparkles } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { projects } from "../../data/projects";

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? "lg:direction-rtl" : ""}`}
    >
      <motion.div
        whileHover={{ y: -6 }}
        className={`relative glass rounded-2xl p-8 overflow-hidden group ${!isEven ? "lg:order-2" : ""}`}
      >
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}
          whileHover={{ opacity: 1 }}
        />
        <motion.div className="relative z-10">
          <motion.div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="font-mono text-xs text-accent mb-1">Featured Project</p>
              <h3 className="text-2xl md:text-3xl font-bold text-heading">{project.title}</h3>
              <p className="text-body text-sm mt-1">{project.subtitle}</p>
            </div>
            <Sparkles className="w-6 h-6 text-accent/50 shrink-0" />
          </motion.div>

          {project.badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-medium rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
              <Trophy className="w-3.5 h-3.5" />
              {project.badge}
            </span>
          )}

          <p className="text-body leading-relaxed mb-6">{project.description}</p>

          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {project.features.slice(0, 6).map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-body">
                <span className="text-accent mt-1">▹</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs font-mono rounded-md tech-badge"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="secondary">
                <Code2 className="w-4 h-4" />
                GitHub
              </Button>
            )}
          </div>
        </motion.div>
      </motion.div>

      <div className={`hidden lg:flex justify-center ${!isEven ? "lg:order-1" : ""}`}>
        <motion.div
          className="w-full max-w-md aspect-video rounded-2xl border border-theme flex items-center justify-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${project.accent}22, transparent)` }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-6xl font-bold opacity-10">{project.title.charAt(0)}</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 to-transparent"
            initial={false}
          />
          <p className="absolute bottom-4 left-4 font-mono text-sm text-accent">
            {project.subtitle}
          </p>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="03. Projects"
          title="Featured Work"
          subtitle="A selection of projects I've built and shipped"
        />

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
