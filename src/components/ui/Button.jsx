import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-primary text-white border border-primary/50 hover:bg-primary-light shadow-[0_0_30px_rgba(12,82,82,0.5)]",
  secondary:
    "glass text-white hover:border-accent/40 hover:shadow-[0_0_25px_rgba(149,209,209,0.2)]",
  accent:
    "bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25",
};

export default function Button({
  children,
  variant = "primary",
  href,
  download,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
