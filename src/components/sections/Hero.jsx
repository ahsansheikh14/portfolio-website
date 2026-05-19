import { motion } from "framer-motion";
import {
  Download,
  Mail,
  FolderKanban,
  Code2,
  Database,
  Cpu,
  Braces,
  Server,
} from "lucide-react";
import { siteConfig } from "../../config/site";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import Button from "../ui/Button";

const floatingIcons = [
  { Icon: Code2, x: "10%", y: "20%", delay: 0 },
  { Icon: Database, x: "85%", y: "15%", delay: 0.3 },
  { Icon: Cpu, x: "75%", y: "70%", delay: 0.6 },
  { Icon: Braces, x: "5%", y: "65%", delay: 0.9 },
  { Icon: Server, x: "90%", y: "45%", delay: 1.2 },
];

export default function Hero() {
  const typedRole = useTypingEffect(siteConfig.roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex glass p-3 rounded-xl text-accent/70"
          style={{ left: x, top: y }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay }}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-accent text-sm mb-4"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
            >
              <span className="gradient-text">{siteConfig.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 h-10 md:h-12"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-heading">
                <span className="text-body">I'm a </span>
                <span className="text-accent font-mono">
                  {typedRole}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-6 text-lg text-body max-w-xl leading-relaxed"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="#projects" variant="primary">
                <FolderKanban className="w-4 h-4" />
                View Projects
              </Button>
              <Button href="#contact" variant="secondary">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              <Button
                href={siteConfig.cvPath}
                download={siteConfig.cvFileName}
                variant="accent"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/20 blur-2xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative w-full h-full rounded-full glass glow-ring flex items-center justify-center overflow-hidden">
                <div className="absolute inset-4 rounded-full border border-accent/20" />
                <div className="text-center z-10 p-8">
                  <motion.div
                    className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent/60 flex items-center justify-center text-5xl font-bold text-white shadow-2xl"
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    AS
                  </motion.div>
                  <p className="mt-4 font-mono text-sm text-accent">MERN Developer</p>
                  <p className="text-xs text-body mt-1">Bahria University · SE since 2023</p>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl text-xs font-mono text-accent"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Open to opportunities
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
