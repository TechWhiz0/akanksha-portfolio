"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const SKILLS = [
  "User Experience Design",
  "User Interface Design",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Information Architecture",
  "Interaction Design",
  "UX Writing",
  "Responsive Design",
  "Figma",
  "Adobe XD",
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

export function Hero() {
  return (
    <section className="pt-36 pb-0 md:pt-44">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/50 px-4 py-2 text-xs font-medium text-muted">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Open to New Opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 text-[clamp(2.75rem,7.5vw,5.5rem)] font-semibold leading-[1.03] tracking-tight text-balance"
          >
            Designing digital products{" "}
            <em className="font-serif font-normal italic">people love</em> to
            use.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          >
            I&apos;m Akanksha Nishad — a UX &amp; product designer crafting
            research-driven, accessible experiences across web and mobile.
            Google UX certified, currently designing{" "}
            <strong className="font-semibold text-foreground">
              PulseBoard
            </strong>
            , a customer success platform.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Get in Touch
              <ArrowIcon />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground px-7 py-3.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              LinkedIn
              <ArrowIcon />
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-10 text-sm text-muted"
          >
            {SITE.location} &middot;{" "}
            <a href={`tel:${SITE.phoneHref}`} className="hover:text-foreground">
              {SITE.phone}
            </a>
          </motion.p>
        </motion.div>
      </div>

      {/* Skills ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-16 overflow-hidden border-y border-border py-4 md:mt-20"
      >
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center whitespace-nowrap">
              {SKILLS.map((skill) => (
                <span
                  key={`${i}-${skill}`}
                  className="flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-muted"
                >
                  <span className="px-5">{skill}</span>
                  <span aria-hidden="true" className="text-border">
                    ✦
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
