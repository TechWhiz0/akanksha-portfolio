export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="6" width="20" height="5" rx="2.5" fill="currentColor" />
      <rect x="2" y="13" width="20" height="5" rx="2.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
