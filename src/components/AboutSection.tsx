import { SITE } from "@/lib/constants";
import { ContactLinks } from "./ContactLinks";

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 py-12 border-b border-border">
          <h2 className="text-3xl md:text-4xl font-semibold">Hello.</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-muted">
            I&apos;m Toan, a designer from Melbourne. I spent the last 10 years
            crafting designs in the fintech space. After taking a year off to be
            a full-time dad, I&apos;m now looking for something exciting to work
            on.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 py-12 border-b border-border">
          <h2 className="text-2xl md:text-3xl font-semibold">How I Can Help</h2>
          <p className="text-base md:text-lg leading-relaxed text-muted">
            I help teams{" "}
            <strong className="text-foreground font-semibold">
              identify business opportunities
            </strong>{" "}
            and{" "}
            <strong className="text-foreground font-semibold">
              collaborate with stakeholders
            </strong>{" "}
            to develop effective solutions. From{" "}
            <strong className="text-foreground font-semibold">
              user research and design strategy
            </strong>{" "}
            to{" "}
            <strong className="text-foreground font-semibold">
              UI/UX design and testing
            </strong>
            , I streamline projects to{" "}
            <strong className="text-foreground font-semibold">
              deliver products to market efficiently
            </strong>{" "}
            across both web and mobile apps.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Let&apos;s Connect
          </h2>
          <ContactLinks />
        </div>

        <p className="text-sm text-muted pt-8">{SITE.copyright}</p>
      </div>
    </section>
  );
}
