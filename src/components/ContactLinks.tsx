import { SITE } from "@/lib/constants";

const links = [
  { label: "Email", href: `mailto:${SITE.email}` },
  { label: "Phone", href: `tel:${SITE.phoneHref}` },
  { label: "LinkedIn", href: SITE.linkedin },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactLinks() {
  return (
    <div>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="contact-link group"
        >
          <span className="text-lg font-medium">{link.label}</span>
          <ArrowIcon />
        </a>
      ))}
    </div>
  );
}
