interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  return (
    <span
      className={`font-serif tracking-tight select-none ${sizes[size]} ${className}`}
    >
      <span className="text-cream">Mauric</span>
      <span className="text-gold font-serif">IA</span>
    </span>
  );
}
