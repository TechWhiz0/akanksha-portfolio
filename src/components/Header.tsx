"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { SITE } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 fade-in">
      <nav className="max-w-container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="text-foreground" />
          <span className="text-sm md:text-base">
            <span className="font-medium">{SITE.name}</span>
            <span className="text-muted"> — UX Designer</span>
          </span>
        </Link>
        {isHome && (
          <Link
            href={`mailto:${SITE.email}`}
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full border border-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            Get in Touch
          </Link>
        )}
      </nav>
    </header>
  );
}
