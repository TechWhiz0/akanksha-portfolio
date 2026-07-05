import { Hero } from "@/components/Hero";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { AboutSection } from "@/components/AboutSection";
import { Reveal } from "@/components/Reveal";

const caseStudies = [
  {
    title: "PulseBoard — Customer Success Platform",
    subtitle:
      "An end-to-end CSM platform for monitoring customer health, product adoption, renewals, and churn risk.",
    meta: "May 2026 — Present",
    href: "/pulseboard",
    coverTitle: "PulseBoard",
    coverNote:
      "Dashboards and reporting that turn customer data into actionable retention insights.",
    coverLabel: "Case Study",
    coverBg: "#24493a",
    coverText: "#e9f2ec",
    backColor: "#44805a",
    tags: ["Figma", "Design System", "UX Writing"],
  },
  {
    title: "Furni — Furniture E-Commerce",
    subtitle:
      "A 12-page responsive shopping experience — 40% better task completion in usability testing with 20 participants.",
    meta: "April — July 2025",
    coverTitle: "Furni",
    coverNote:
      "Clean visual hierarchy, WCAG 2.1 accessibility, and a mobile-first design system for furniture retail.",
    coverLabel: "Case Study",
    coverBg: "#e2d9c8",
    coverText: "#2b241c",
    backColor: "#b08968",
    tags: ["Figma", "Prototyping", "Responsive"],
  },
  {
    title: "CodeAlpha — UI/UX Design Internship",
    subtitle:
      "Community platform design that lifted user retention by 35% and engagement by 42%, plus 15+ brand assets.",
    meta: "Jan — April 2026",
    coverTitle: "Community, by design",
    coverNote:
      "Research, wireframes, and redesigns across 8 web and mobile interfaces at CodeAlpha.",
    coverLabel: "Internship",
    coverBg: "#c14e44",
    coverText: "#f9ecea",
    backColor: "#8f362e",
    tags: ["User Research", "Wireframing", "UI Design"],
  },
  {
    title: "The Next Chapter",
    subtitle: "A new case study is in the works — check back soon.",
    meta: "Coming 2026",
    coverTitle: "Untitled, for now",
    coverNote: "Something new is being researched, sketched, and prototyped.",
    coverLabel: "In Progress",
    coverBg: "#2a2a2a",
    coverText: "#e8e8e8",
    backColor: "#161616",
    tags: ["Stay Tuned"],
    comingSoon: true,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <Reveal>
            <p className="section-label mb-4">Selected Work</p>
            <p className="text-muted max-w-2xl mb-14 leading-relaxed">
              Every project here is a book —{" "}
              <strong className="text-foreground font-semibold">
                hover to peek inside.
              </strong>{" "}
              I care as much about the research and thinking behind a design as
              the pixels themselves, so each case study tells the full story.
            </p>
          </Reveal>

          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <Reveal key={study.title} delay={(i % 2) * 0.12}>
                <CaseStudyCard {...study} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
    </>
  );
}
