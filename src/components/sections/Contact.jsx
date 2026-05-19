import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Code2, Network, Mail, MapPin, CheckCircle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { siteConfig } from "../../config/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const links = [
    { icon: Code2, label: "GitHub", href: siteConfig.github },
    { icon: Network, label: "LinkedIn", href: siteConfig.linkedin },
    { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: siteConfig.location, href: null },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="05. Contact"
          title="Get In Touch"
          subtitle="Have a project or opportunity? I'd love to hear from you."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-10 glow-ring"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-body mb-2 font-mono">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-body mb-2 font-mono">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="form-input"
                  placeholder="you@email.com"
                />
              </div>
            </motion.div>

            <div>
              <label htmlFor="message" className="block text-sm text-body mb-2 font-mono">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="form-input resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button type="submit" variant="primary" className="w-full md:w-auto">
              {sent ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Opening email client...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-theme">
            <div className="flex flex-wrap justify-center gap-6">
              {links.map(({ icon: Icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-body hover:text-accent transition-colors group"
                  >
                    <span className="p-2 rounded-lg glass group-hover:border-accent/30">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-sm">{label}</span>
                  </a>
                ) : (
                  <span
                    key={label}
                    className="flex items-center gap-2 text-body"
                  >
                    <span className="p-2 rounded-lg glass">
                      <Icon className="w-5 h-5 text-accent" />
                    </span>
                    <span className="text-sm">{label}</span>
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
