"use client";

import { SITE } from "@/lib/constants";

export function HeroMarquee() {
  const text = SITE.tagline;

  return (
    <section className="pt-32 pb-16 overflow-hidden">
      <div className="marquee-track">
        {[...Array(4)].map((_, i) => (
          <h1
            key={i}
            className="text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.1] tracking-tight whitespace-nowrap px-8"
          >
            {text}
          </h1>
        ))}
      </div>
      <div className="max-w-container mx-auto px-6 md:px-12 mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex items-center px-6 py-3 rounded-full border border-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
        >
          Get in Touch
        </a>
        <div className="flex items-center gap-2 text-sm text-muted">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Open to New Opportunities
        </div>
      </div>
    </section>
  );
}
