import type { Metadata } from "next";
import {
  CaseStudyHero,
  CaseStudySection,
  SubHeading,
  BulletList,
  PrincipleList,
  CaseStudyFooter,
} from "@/components/CaseStudyLayout";
import { PulseboardMock } from "@/components/PulseboardMock";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Akanksha / PulseBoard Case Study",
  description:
    "Designing an end-to-end Customer Success Management platform that helps CSMs monitor customer health, adoption, renewals, and churn risk.",
};

const researchInsights = [
  {
    title: "Churn is discovered, not predicted.",
    description:
      "CSMs told me they usually learned an account was unhappy when the cancellation email arrived. The data existed — logins, feature usage, support tickets — but it lived in five different tools.",
  },
  {
    title: "Dashboards get opened twice a week, alerts get read daily.",
    description:
      "Watching CSMs work made it clear the dashboard isn't the product; the nudge is. If PulseBoard couldn't reach people at the right moment, no amount of charts would matter.",
  },
  {
    title: "A single number builds trust slowly and loses it fast.",
    description:
      "Existing tools condense everything into one health score. Every CSM I spoke to had a story about the score being wrong — and once it was wrong, they stopped believing it entirely.",
  },
];

const designPrinciples = [
  {
    title: "Health at a glance, evidence on demand",
    description:
      "The health score is always paired with its ingredients — adoption, engagement, support sentiment, billing signals — one click away. Trust the number because you can interrogate it.",
  },
  {
    title: "Action over analysis",
    description:
      "Every risk signal ships with a next step: launch a playbook, schedule a check-in, escalate. A dashboard that only informs quietly becomes a dashboard nobody opens.",
  },
  {
    title: "Progressive disclosure",
    description:
      "Portfolio → segment → account → signal. Each level answers one question and offers exactly one deeper level, so new CSMs never face a wall of data.",
  },
  {
    title: "Calm by default",
    description:
      "Muted greens and generous whitespace keep the interface quiet so that warning amber and critical red actually mean something when they appear.",
  },
];

const keyScreens = [
  {
    title: "Portfolio Overview",
    description:
      "The morning-coffee view: health distribution across all accounts, adoption trends, and a ranked \"attention needed\" list so the first click of the day is always the right one.",
  },
  {
    title: "Account 360",
    description:
      "A single page that tells one customer's whole story — health score breakdown, usage timeline, stakeholder map, open tickets, renewal date, and every past touchpoint.",
  },
  {
    title: "Renewal Pipeline",
    description:
      "A kanban-style view of upcoming renewals weighted by ARR and risk, letting CSMs and leadership agree on where the next quarter's effort goes.",
  },
  {
    title: "Playbooks",
    description:
      "Reusable intervention templates — onboarding rescue, champion change, low adoption — with tracked outcomes, so the team learns which plays actually save accounts.",
  },
];

export default function PulseboardPage() {
  return (
    <>
      <CaseStudyHero
        breadcrumb="PulseBoard"
        section="Case Study — 10 min read"
        title="Designing PulseBoard: a home base for Customer Success"
        description={
          <p>
            Customer Success Managers are asked to prevent churn armed with
            spreadsheets, five browser tabs, and intuition. I designed
            PulseBoard end-to-end — an platform that turns scattered customer
            signals into health scores, renewal pipelines, and playbooks CSMs
            act on daily.
          </p>
        }
        meta={[
          { label: "Role", value: "Product Designer" },
          { label: "Timeline", value: "May 2026 — Present" },
          { label: "Tools", value: "Figma" },
          { label: "Platform", value: "Web App" },
        ]}
        note="This is an ongoing self-driven product project — research, flows, design system, and prototypes are all my own work."
      />

      <Reveal className="mx-auto max-w-4xl px-6 md:px-12">
        <PulseboardMock caption="The Portfolio Overview — health distribution, adoption trend, and a ranked attention list." />
      </Reveal>

      <CaseStudySection
        number="01"
        label="The Problem"
        title="Churn is a lagging indicator of a relationship that broke months earlier."
      >
        <p>
          In most SaaS companies, the signals that predict churn — falling
          logins, an unanswered QBR invite, a champion who left — are scattered
          across the CRM, the product analytics tool, the support desk, and
          someone&apos;s memory. By the time these signals are assembled, the
          customer has already decided.
        </p>
        <p>
          The brief I set myself: design a workspace where a CSM managing 40+
          accounts can answer three questions in under a minute —{" "}
          <strong className="font-semibold text-foreground">
            who needs me today, why, and what should I do about it?
          </strong>
        </p>
      </CaseStudySection>

      <CaseStudySection
        number="02"
        label="Research & Discovery"
        title="I interviewed CSMs and audited four competing platforms before drawing a single screen."
      >
        <p>
          I ran interviews with customer success practitioners and studied how
          Gainsight, ChurnZero, Totango, and Planhat each approach health
          scoring, segmentation, and workflows. Three insights shaped
          everything that followed:
        </p>
        <PrincipleList items={researchInsights} />
        <p>
          I also mapped the CSM&apos;s week hour-by-hour. The pattern was
          striking: mornings are triage, afternoons are meetings, and deep
          analysis happens almost never. PulseBoard had to fit triage, not
          demand analysis.
        </p>
      </CaseStudySection>

      <CaseStudySection
        number="03"
        label="Defining the Experience"
        title="One information architecture, four altitudes."
        className="border-t border-border"
      >
        <p>
          I structured the entire product as a descent through four altitudes,
          and built the user flows around them:
        </p>
        <BulletList
          items={[
            "Portfolio — every account I own, ranked by urgency.",
            "Segment — slices I care about: enterprise, onboarding, renewing this quarter.",
            "Account — the full story of one customer in one place.",
            "Signal — the single event or metric behind an alert, with its recommended action.",
          ]}
        />
        <p>
          This altitude model became the navigation, the permission model, and
          even the UX writing guide — every page title answers &quot;where am I
          and what question does this level answer?&quot;
        </p>
      </CaseStudySection>

      <CaseStudySection
        number="04"
        label="Design Decisions"
        title="Four principles kept every screen honest."
      >
        <PrincipleList items={designPrinciples} />
      </CaseStudySection>

      <CaseStudySection
        number="05"
        label="Key Screens"
        title="Designed in Figma as high-fidelity, prototyped flows."
        className="border-t border-border"
      >
        <div className="my-8 grid gap-6 sm:grid-cols-2">
          {keyScreens.map((screen) => (
            <div
              key={screen.title}
              className="rounded-2xl border border-border bg-white/50 p-6"
            >
              <SubHeading level={4}>{screen.title}</SubHeading>
              <p className="mt-2 text-sm leading-relaxed">
                {screen.description}
              </p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        number="06"
        label="Design System & UX Writing"
        title="A small system that scales with the product."
      >
        <p>
          I built a component library in Figma — tokens for the calm-by-default
          palette, a health-pill component with strict usage rules, data-table
          and chart patterns, and empty/loading/error states for every module.
        </p>
        <p>
          UX writing got the same rigor: alerts lead with the account name and
          the recommended action, never the metric. &quot;Marrow Health needs a
          check-in — usage down 40% since the champion left&quot; beats
          &quot;Health score changed from 61 to 23.&quot;
        </p>
      </CaseStudySection>

      <CaseStudySection
        number="07"
        label="Outcomes & Learnings"
        title="What this project taught me."
        className="border-t border-border"
      >
        <BulletList
          items={[
            "Designing for trust is different from designing for clarity — a legible wrong number is worse than a slower right one.",
            "Information architecture is the product. The altitude model did more for usability than any individual screen.",
            "Writing the alert copy first, before the dashboard layout, kept the design anchored to moments of action rather than displays of data.",
            "Prototyping full flows in Figma — not isolated screens — surfaced navigation dead-ends I would never have caught in static mockups.",
          ]}
        />
        <p>
          PulseBoard is ongoing: I&apos;m currently testing the renewal
          pipeline flow with CSM practitioners and iterating on the health
          score explainability view.
        </p>
      </CaseStudySection>

      <CaseStudyFooter />
    </>
  );
}
