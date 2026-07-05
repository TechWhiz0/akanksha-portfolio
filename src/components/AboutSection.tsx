import { SITE } from "@/lib/constants";
import { ContactLinks } from "./ContactLinks";
import { Reveal } from "./Reveal";

const skillGroups = [
  {
    label: "Design Tools",
    items: ["Figma", "Adobe XD", "Sketch", "Canva", "Adobe Photoshop"],
  },
  {
    label: "Specialties",
    items: [
      "UX Design",
      "UI Design",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Information Architecture",
    ],
  },
  {
    label: "Professional",
    items: [
      "Cross-functional Collaboration",
      "Data-driven Design",
      "Stakeholder Presentation",
      "Agile",
    ],
  },
];

function Row({
  heading,
  children,
  last = false,
}: {
  heading: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <Reveal
      className={`grid gap-8 py-12 md:grid-cols-[1fr_2fr] md:gap-16 ${
        last ? "" : "border-b border-border"
      }`}
    >
      <h2 className="text-2xl font-semibold md:text-3xl">{heading}</h2>
      <div>{children}</div>
    </Reveal>
  );
}

export function AboutSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10">
        <Row heading="Hello.">
          <p className="text-xl leading-relaxed text-muted md:text-2xl">
            I&apos;m Akanksha, a UX &amp; product designer from Allahabad,
            India. I&apos;m pursuing my Bachelor&apos;s at Ewing Christian
            College, recently completed a UI/UX design internship at CodeAlpha,
            and I love turning research into intuitive, accessible interfaces.
          </p>
        </Row>

        <Row heading="How I Can Help">
          <p className="text-base leading-relaxed text-muted md:text-lg">
            I take products from{" "}
            <strong className="font-semibold text-foreground">
              user research and competitive analysis
            </strong>{" "}
            through{" "}
            <strong className="font-semibold text-foreground">
              wireframes and interactive prototypes
            </strong>{" "}
            to polished, developer-ready UI. I build{" "}
            <strong className="font-semibold text-foreground">
              scalable design systems
            </strong>
            , design to{" "}
            <strong className="font-semibold text-foreground">
              WCAG 2.1 accessibility standards
            </strong>
            , and validate decisions with{" "}
            <strong className="font-semibold text-foreground">
              usability testing
            </strong>{" "}
            — across both web and mobile.
          </p>
        </Row>

        <Row heading="Experience">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold md:text-xl">
                UI/UX Design Intern — CodeAlpha
              </h3>
              <span className="text-sm text-muted">
                Jan – April 2026 · Remote, India
              </span>
            </div>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="leading-relaxed">
                Architected and launched a community-driven website, improving
                user retention by{" "}
                <strong className="font-semibold text-foreground">35%</strong>{" "}
                and engagement by{" "}
                <strong className="font-semibold text-foreground">42%</strong>.
              </li>
              <li className="leading-relaxed">
                Redesigned an existing product with user-centered principles,
                cutting drop-off by{" "}
                <strong className="font-semibold text-foreground">25%</strong>{" "}
                across 3 critical conversion funnels.
              </li>
              <li className="leading-relaxed">
                Ran competitive analysis of 4+ platforms and shipped 8 web and
                mobile interface improvements through research, wireframing,
                and rapid prototyping.
              </li>
              <li className="leading-relaxed">
                Produced 15+ visual assets — logos, promotional materials, and
                brochures — keeping the brand consistent across 6 digital
                platforms.
              </li>
            </ul>
          </div>
        </Row>

        <Row heading="Skills">
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="section-label mb-3">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-white/50 px-4 py-1.5 text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Row>

        <Row heading="Education & Recognition">
          <div className="space-y-6 text-muted">
            <div>
              <p className="font-semibold text-foreground">
                B.Sc. — Ewing Christian College
              </p>
              <p className="text-sm">
                Allahabad, Uttar Pradesh · May 2024 – June 2027
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Google UX Design Certificate
              </p>
              <p className="leading-relaxed">
                Comprehensive training in user research, wireframing,
                prototyping, usability testing, and user-centered design.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Top 15 — State-Level Design Competition
              </p>
              <p className="leading-relaxed">
                Placed among 200+ participants for visual design, user
                research, and interaction design. Led end-to-end design for 3+
                projects with developers and stakeholders.
              </p>
            </div>
          </div>
        </Row>

        <Row heading="Let's Connect" last>
          <ContactLinks />
        </Row>

        <p className="pt-8 text-sm text-muted">{SITE.copyright}</p>
      </div>
    </section>
  );
}
