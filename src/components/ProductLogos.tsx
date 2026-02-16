interface ProductLogoProps {
  size?: number;
  className?: string;
}

export function ExcelLogo({ size = 28, className = "" }: ProductLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`inline-block opacity-75 ${className}`}
      aria-label="Microsoft Excel"
    >
      <rect width="32" height="32" rx="4" fill="#217346" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill="white"
        fontSize="18"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        X
      </text>
    </svg>
  );
}

export function PowerPointLogo({
  size = 28,
  className = "",
}: ProductLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`inline-block opacity-75 ${className}`}
      aria-label="Microsoft PowerPoint"
    >
      <rect width="32" height="32" rx="4" fill="#D24726" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill="white"
        fontSize="18"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        P
      </text>
    </svg>
  );
}

export function WordLogo({ size = 28, className = "" }: ProductLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`inline-block opacity-75 ${className}`}
      aria-label="Microsoft Word"
    >
      <rect width="32" height="32" rx="4" fill="#2B579A" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill="white"
        fontSize="18"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        W
      </text>
    </svg>
  );
}
