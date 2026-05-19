import { motion } from "framer-motion";
import { Code2 as GithubIcon, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { siteConfig } from "../../config/site";

const username = siteConfig.githubUsername;

export default function GitHub() {
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=react&hide_border=true&bg_color=0b0f14&title_color=95D1D1&icon_color=95D1D1&text_color=ffffff`;
  const streakUrl = `https://github-readme-streak-stats.demolab.com/?user=${username}&theme=react&hide_border=true&background=0b0f14&ring=0C5252&fire=95D1D1&currStreakLabel=95D1D1&sideLabels=94a3b8&dates=94a3b8&stroke=0C5252`;
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=react&hide_border=true&bg_color=0b0f14&title_color=95D1D1&text_color=ffffff`;
  const activityUrl = `https://ghchart.rshah.org/${username}`;

  const repos = [
    { name: "relaxa", desc: "AI Mental Wellness Web App" },
    { name: "civicconnect", desc: "Smart City Services Portal" },
    { name: "mern-projects", desc: "Full Stack MERN Applications" },
  ];

  return (
    <section id="github" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="05. GitHub"
          title="Open Source Activity"
          subtitle="My coding activity and repositories"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <Button href={siteConfig.github} variant="secondary">
            <GithubIcon className="w-4 h-4" />
            @{username}
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-4 overflow-hidden"
          >
            <img
              src={statsUrl}
              alt="GitHub stats"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-4 overflow-hidden"
          >
            <img
              src={streakUrl}
              alt="GitHub streak"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <h3 className="font-mono text-sm text-accent mb-4">Contribution Graph</h3>
          <img
            src={activityUrl}
            alt="GitHub contribution graph"
            className="w-full h-auto rounded-lg opacity-90"
            loading="lazy"
          />
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-4"
          >
            <h3 className="font-mono text-sm text-accent mb-4 px-2">Most Used Languages</h3>
            <img src={langsUrl} alt="Top languages" className="w-full rounded-xl" loading="lazy" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-mono text-sm text-accent mb-4">Recent Repositories</h3>
            <ul className="space-y-4">
              {repos.map((repo, i) => (
                <motion.li
                  key={repo.name}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={`${siteConfig.github}/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/5 hover:border-accent/30 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-accent group-hover:underline">
                        {repo.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-muted mt-1">{repo.desc}</p>
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="text-xs text-muted mt-4 font-mono">
              Update repo names in src/components/sections/GitHub.jsx
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
