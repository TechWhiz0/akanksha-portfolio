import Link from "next/link";
import { createElement, type ReactNode } from "react";
import { ContactLinks } from "./ContactLinks";
import { SITE } from "@/lib/constants";

type MetaItem = { label: string; value: string };

type CaseStudyHeroProps = {
  breadcrumb: string;
  title: string;
  section: string;
  description: ReactNode;
  meta?: MetaItem[];
  note?: string;
};

export function CaseStudyHero({
  breadcrumb,
  title,
  section,
  description,
  meta,
  note,
}: CaseStudyHeroProps) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-background px-6 pb-16 pt-24 text-center md:px-12">
      <nav className="fixed left-6 top-6 z-50 flex items-center gap-2 text-sm md:left-12">
        <Link
          href="/"
          className="font-medium transition-opacity hover:opacity-60"
        >
          Akanksha
        </Link>
        <span className="text-muted">/</span>
        <span className="text-muted">{breadcrumb}</span>
      </nav>

      <div className="mx-auto max-w-3xl">
        <p className="section-label mb-6">{section}</p>
        <h1 className="mb-8 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          {title}
        </h1>
        <div className="text-lg leading-relaxed text-muted md:text-xl">
          {description}
        </div>

        {meta && (
          <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 text-left sm:grid-cols-4">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="section-label mb-1">{item.label}</dt>
                <dd className="text-sm font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {note && <p className="mt-8 text-sm italic text-muted">{note}</p>}
      </div>
    </section>
  );
}

type SectionProps = {
  number: string;
  label: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function CaseStudySection({
  number,
  label,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-container px-6 md:px-12">
        <p className="section-label mb-4">
          {number}. {label}
        </p>
        {title && (
          <h2 className="mb-8 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            {title}
          </h2>
        )}
        <div className="max-w-3xl space-y-6 leading-relaxed text-muted">
          {children}
        </div>
      </div>
    </section>
  );
}

export function SubHeading({
  children,
  level = 2,
}: {
  children: ReactNode;
  level?: 2 | 3 | 4 | 5;
}) {
  const classes = {
    2: "text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-4",
    3: "text-xl md:text-2xl font-semibold text-foreground mt-10 mb-3",
    4: "text-lg font-semibold text-foreground mt-8 mb-2",
    5: "text-base font-semibold text-foreground mt-6 mb-2",
  };
  return createElement(`h${level}`, { className: classes[level] }, children);
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-1.5 text-foreground">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PrincipleList({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="my-8 space-y-6">
      {items.map((item) => (
        <div key={item.title}>
          <p className="font-semibold text-foreground">{item.title}</p>
          <p className="mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-container px-6 py-16 md:px-12">
        <Link
          href="/"
          className="mb-16 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
        >
          ← Go Back Home
        </Link>

        <div className="grid gap-8 border-t border-border py-12 md:grid-cols-[1fr_2fr]">
          <h2 className="text-2xl font-semibold">Let&apos;s Connect</h2>
          <ContactLinks />
        </div>
        <p className="text-sm text-muted">{SITE.copyright}</p>
      </div>
    </footer>
  );
}
