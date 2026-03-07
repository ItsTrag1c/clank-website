export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Llama head silhouette */}
      <path
        d="M30 70C30 70 25 60 25 50C25 40 30 30 40 25C45 22 50 22 55 25C60 28 65 35 70 40C75 45 75 55 70 60C65 65 60 70 55 75C50 80 45 80 40 75C35 70 30 70 30 70Z"
        fill="url(#gradient)"
      />
      {/* Ears */}
      <path
        d="M35 30L30 15L40 25"
        fill="url(#gradient)"
      />
      <path
        d="M60 28L70 15L65 32"
        fill="url(#gradient)"
      />
      {/* Eye */}
      <circle cx="45" cy="45" r="3" fill="white" />
      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
