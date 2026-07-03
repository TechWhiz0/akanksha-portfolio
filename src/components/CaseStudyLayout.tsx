import Image from "next/image";
import Link from "next/link";
import { createElement, type ReactNode } from "react";
import { ContactLinks } from "./ContactLinks";
import { SITE } from "@/lib/constants";

type CaseStudyHeroProps = {
  breadcrumb: string;
  title: string;
  section: string;
  description: ReactNode;
  note?: string;
};

export function CaseStudyHero({
  breadcrumb,
  title,
  section,
  description,
  note,
}: CaseStudyHeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-24 pb-16 bg-background text-center">
      <nav className="fixed top-6 left-6 md:left-12 flex items-center gap-2 text-sm z-50">
        <Link href="/" className="font-medium hover:opacity-60 transition-opacity">
          Toan
        </Link>
        <span className="text-muted">/</span>
        <span className="text-muted">{breadcrumb}</span>
      </nav>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-8">
          {title}
        </h1>
        <p className="section-label mb-6">{section}</p>
        <div className="text-lg md:text-xl leading-relaxed text-muted">
          {description}
        </div>
        {note && (
          <p className="mt-6 text-sm text-muted italic">{note}</p>
        )}
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
      <div className="max-w-container mx-auto px-6 md:px-12">
        <p className="section-label mb-4">
          {number}. {label}
        </p>
        {title && (
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-8 max-w-4xl">
            {title}
          </h2>
        )}
        <div className="max-w-3xl space-y-6 text-muted leading-relaxed">
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

export function CaseStudyImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-12 -mx-6 md:mx-0">
      <div className="relative w-full aspect-[16/10] md:rounded-2xl overflow-hidden bg-white/50">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-muted mt-3 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 my-6">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="text-foreground mt-1.5">•</span>
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
    <div className="space-y-6 my-8">
      {items.map((item) => (
        <div key={item.title}>
          <p className="font-semibold text-foreground">{item.title}</p>
          <p className="mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyFooter({
  nextHref,
  nextImage,
  nextTitle,
}: {
  nextHref?: string;
  nextImage?: string;
  nextTitle?: string;
}) {
  return (
    <footer className="border-t border-border">
      <div className="max-w-container mx-auto px-6 md:px-12 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity mb-16"
        >
          ← Go Back Home
        </Link>

        {nextHref && nextImage && nextTitle && (
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Up Next</h2>
            <Link href={nextHref} className="block group">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={nextImage}
                  alt={nextTitle}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>
        )}

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 py-12 border-t border-border">
          <h2 className="text-2xl font-semibold">Let&apos;s Connect</h2>
          <ContactLinks />
        </div>
        <p className="text-sm text-muted">{SITE.copyright}</p>
      </div>
    </footer>
  );
}
