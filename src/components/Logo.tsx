import { Link } from "@tanstack/react-router";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };
  return (
    <Link to="/" className="inline-flex items-center gap-2 group">
      <span className="relative inline-block">
        <span className="absolute -inset-1 bg-gradient-festive blob opacity-80 group-hover:animate-wiggle" />
        <span className="relative px-2 font-display font-black text-primary-foreground">z</span>
      </span>
      <span className={`font-display font-black tracking-tight ${sizes[size]}`}>
        zent<span className="text-coral">.</span>
      </span>
    </Link>
  );
}
