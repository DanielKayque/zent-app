import { Link } from "@tanstack/react-router";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };
  return (
    <Link to="/" className="inline-flex items-center gap-2 group">
      <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-display font-bold">
        z
      </span>
      <span className={`font-display font-bold tracking-tight ${sizes[size]}`}>
        zent<span className="text-primary">.</span>
      </span>
    </Link>
  );
}
