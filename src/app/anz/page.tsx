import type { Metadata } from "next";
import {
  CaseStudyHero,
  CaseStudySection,
  SubHeading,
  CaseStudyImage,
  BulletList,
  PrincipleList,
  CaseStudyFooter,
} from "@/components/CaseStudyLayout";
import { ANZ_IMAGES } from "@/lib/anz-images";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Toan / ANZ Bank Case Study",
  description:
    "Balancing innovation with practicality within legacy banking systems during the peak of the COVID-19 pandemic.",
};

const stakeholderPrinciples = [
  {
    title: "Do your homework",
    description:
      "Invest time upfront to prepare and align with stakeholders. It speeds up sign-off down the line.",
  },
  {
    title: "Waste no time",
    description:
      "Streamline meetings by trimming unnecessary participants and appointing a coordinator to keep things on track.",
  },
  {
    title: "Use tools wisely",
    description:
      "Choose the most suitable communication method—whether it's email, one-on-one chats, or group meetings.",
  },
  {
    title: "Done is better than perfect",
    description:
      "Accept that not everything can be resolved. Prioritise tasks by impact using frameworks like MoSCoW.",
  },
  {
    title: "Show, don't tell",
    description:
      "Support design decisions with data and user research. Real-world examples or case studies can make a big difference.",
  },
  {
    title: "Build relationships",
    description:
      "Get to know key decision-makers and don't hesitate to lean on them to help resolve disputes.",
  },
];

export default function AnzPage() {
  return (
    <article className="bg-white">
      <CaseStudyHero
        breadcrumb="ANZ Bank"
        title="Balancing Innovation with Legacy Systems"
        section="01. Overview"
        description={
          <>
            This case study showcases how I balanced innovation with practicality
            within legacy banking systems during the peak of the COVID-19 pandemic.
            Discover the tools and processes that made this possible through the{" "}
            <strong className="text-foreground">Your Monthly Wrap-Up</strong>{" "}
            feature for ANZ Bank.
          </>
        }
      />

      <CaseStudySection number="02" label="Role" title="Beyond Design Limits">
        <p>
          At ANZ Bank—Australia&apos;s smallest of the &apos;Big Four&apos; banks
          by market capitalisation—we operate with a lean digital team. Just seven
          designers handle both UX and UI for the mobile app, and my role often
          extended beyond traditional design boundaries.
        </p>
        <SubHeading level={5}>My Role Beyond UX Design</SubHeading>
        <p>
          I wore many hats: facilitating workshops, managing stakeholders,
          developing processes, and championing UX psychology principles. This
          multifaceted role required balancing creative innovation with the
          practical realities of a large financial institution.
        </p>
      </CaseStudySection>

      <CaseStudySection
        number="03"
        label="Key Challenges"
        title="Breaking Legacy Barriers"
      >
        <SubHeading level={4}>Challenge</SubHeading>
        <p>
          ANZ relies on some outdated systems, which can limit our ability to
          roll out innovative ideas. My challenge was to drive innovation while
          navigating these technical constraints.
        </p>
        <SubHeading level={4}>Solution</SubHeading>
        <p>
          To strike the right balance between constraints and creativity, I
          developed a UX Prioritisation Model. We start with baseline
          requirements to ensure core needs are met. Then, a small team explores
          innovative ideas in parallel, ensuring we don&apos;t sacrifice
          creativity for practicality.
        </p>
        <SubHeading level={5}>UX Prioritisation Model</SubHeading>
        <CaseStudyImage
          src={ANZ_IMAGES.prioritisation}
          alt="UX Prioritisation Model diagram"
        />

        <SubHeading level={2}>A thousand minds, one heartbeat</SubHeading>
        <SubHeading level={4}>Challenge</SubHeading>
        <p>
          Getting design approval was a complex process involving design leads,
          product owners, legal, tech leads, accessibility, and security teams.
          It was time-consuming, and the diverse feedback often added complexity.
        </p>
        <SubHeading level={4}>Solution</SubHeading>
        <p>
          I developed a set of principles to improve sign-off efficiency,
          enabling better time management and ensuring stakeholders receive
          maximum value with minimal time investment.
        </p>
        <SubHeading level={2}>Stakeholder Management Principles</SubHeading>
        <PrincipleList items={stakeholderPrinciples} />
        <CaseStudyImage
          src={ANZ_IMAGES.stakeholder}
          alt="Stakeholder management principles"
        />
      </CaseStudySection>

      <CaseStudySection
        number="04"
        label="Process"
        title="Challenges Spark Innovation"
      >
        <SubHeading level={2}>Challenges</SubHeading>
        <SubHeading level={4}>Inheriting a Pre-Designed Solution</SubHeading>
        <p>
          We were handed a solution crafted by another team. This was both a
          hurdle and an opportunity. With fresh eyes, we could refine the design
          and spot areas ripe for improvement.
        </p>
        <SubHeading level={4}>Navigating Remote Work During COVID-19</SubHeading>
        <p>
          The pandemic changed how we work, pushing us to adapt our workflow to
          a fully remote environment.
        </p>

        <SubHeading level={2}>Solution</SubHeading>
        <SubHeading level={3}>The Discovery Sprint Process</SubHeading>
        <p>
          To tackle these challenges head-on, I developed the Discovery Sprint
          process—a remote-friendly twist on the Google Design Sprint. This
          approach leverages asynchronous activities and digital tools to keep
          teams aligned and productive.
        </p>
        <SubHeading level={4}>Key Features</SubHeading>
        <BulletList
          items={[
            "Fully Remote: Every aspect is handled remotely—no office required.",
            "Efficient Meetings: We keep meetings under an hour to respect everyone's time.",
            "Pre-Reading Provided: Materials are shared beforehand so the team hits the ground running.",
            "Structured Presentations: Team members present their findings and recommendations in allocated slots, keeping things organised.",
            "Task Assignments: We assign tasks to individuals or small groups, promoting ownership and efficiency.",
          ]}
        />
        <SubHeading level={5}>Process Overview</SubHeading>
        <CaseStudyImage
          src={ANZ_IMAGES.discoverySprint}
          alt="Discovery Sprint process"
        />
        <CaseStudyImage
          src={ANZ_IMAGES.processOverview}
          alt="Process overview diagram"
        />
      </CaseStudySection>

      <CaseStudySection
        number="05"
        label="Design Discovery"
        title="The Art of Reduction"
      >
        <SubHeading level={2}>Discovery Sprint 1</SubHeading>
        <p>
          In this sprint, we honed in on the essentials. By focusing on the MVP,
          we ensured core needs were met and brought all stakeholders into
          alignment.
        </p>
        <SubHeading level={2}>UX Outcomes</SubHeading>
        <BulletList
          items={[
            "Business Case: Covering viability, desirability, and feasibility.",
            "Key Insights, Hypotheses, and UX Strategy",
            "Three Lo-Fi Design Concepts",
          ]}
        />

        <SubHeading level={2}>Key Insights</SubHeading>
        <p className="font-semibold text-foreground">
          Financial Stress is Widespread
        </p>
        <BulletList
          items={[
            "33% of Australians say financial issues are their biggest stress",
            "Many households live pay cheque to pay cheque",
          ]}
        />
        <p className="font-semibold text-foreground">
          Common Financial Struggles
        </p>
        <BulletList
          items={[
            "20% lack emergency funds.",
            "15% struggle to afford essentials like food and basics.",
            "15% feel the strain from unpaid bills.",
          ]}
        />
        <p className="font-semibold text-foreground">
          Financial Strain in Relationships
        </p>
        <BulletList
          items={[
            "35% of couples say money is their main stress factor.",
            "50% have different spending habits.",
            "33% don't consult their partner before making big purchases.",
          ]}
        />
        <p className="font-semibold text-foreground">
          Wealth Perception and Spending
        </p>
        <BulletList
          items={[
            "Those who feel wealthy often overspend, a classic case of sudden wealth syndrome.",
            "Social media amplifies FOMO, leading to unplanned splurges.",
          ]}
        />

        <SubHeading level={2}>Hypotheses</SubHeading>
        <BulletList
          items={[
            "Busy Lives and Distractions: Customers might struggle with managing their finances because life is hectic and full of distractions.",
            "Lack of Financial Literacy: Without a solid grasp of financial concepts, making informed money decisions becomes tricky.",
            "Procrastination: Some may delay financial decisions or avoid dealing with their finances altogether.",
            "Inadequate Financial Tools: Existing tools might be too complicated or not user-friendly.",
            "Emotional Spending: Purchases based on emotional states rather than actual needs or goals can lead to impulsive decisions.",
          ]}
        />

        <SubHeading level={2}>UX Strategy</SubHeading>
        <p>
          <strong className="text-foreground">Leverage Behavioural Science:</strong>{" "}
          Integrate behavioural science principles into our UX design. By adopting
          a science-backed approach, we aim to boost financial literacy and support
          informed decision-making.
        </p>
        <p>
          <strong className="text-foreground">Bite-Sized Financial Wellness:</strong>{" "}
          Tackling financial wellbeing can feel overwhelming. By breaking down
          education and tasks into manageable chunks, users can handle their
          finances in small, achievable steps.
        </p>

        <SubHeading level={2}>Design Concepts</SubHeading>
        <SubHeading level={2}>Glimpse of a Dream</SubHeading>
        <p>
          We brought our vision to life with three lo-fi design concepts, each
          offering a unique way to help users engage with their finances.
        </p>

        <SubHeading level={4}>The Baseline Concept</SubHeading>
        <p>
          We incorporated the original team&apos;s design but made tweaks to
          improve discoverability and usability. This concept was about
          speed—getting a solution to market quickly.
        </p>
        <CaseStudyImage src={ANZ_IMAGES.baseline} alt="Baseline concept design" />

        <SubHeading level={4}>Your Monthly Wrap-Up</SubHeading>
        <p>
          Aimed to make financial check-ins a breeze. Your Monthly Wrap-Up allowed
          customers to review their finances each month in just 3 to 15 minutes.
        </p>
        <CaseStudyImage
          src={ANZ_IMAGES.monthlyWrap}
          alt="Your Monthly Wrap-Up concept"
        />

        <SubHeading level={4}>Your Financial Fitness</SubHeading>
        <p>
          We reimagined financial management as a health and fitness journey. By
          making finance more engaging and goal-driven, we encouraged users to set
          financial goals and track their progress.
        </p>
        <CaseStudyImage
          src={ANZ_IMAGES.financialFitness}
          alt="Your Financial Fitness concept"
        />

        <SubHeading level={2}>The Recommendation</SubHeading>
        <p>
          After weighing our options, we realised that while the Baseline concept
          wasn&apos;t perfect, it was sufficient as an MVP. However, we were
          excited about the Your Monthly Wrap-Up concept—it had the potential to
          truly differentiate ANZ in the market.
        </p>
      </CaseStudySection>

      <CaseStudySection
        number="06"
        label="Design Enhancement"
        title="Creativity Without Limits"
        className="bg-background"
      >
        <SubHeading level={2}>Discovery Sprint 2</SubHeading>
        <p>
          In this sprint, we set out to generate innovative ideas that deliver
          exceptional customer experiences and uncover new business opportunities,
          all without letting technical limitations hold us back.
        </p>
        <SubHeading level={2}>UX Outcomes</SubHeading>
        <BulletList
          items={[
            "UX Psychology Toolkit",
            "Design Principles",
            "Content Framework",
            "Extended Design Exploration: Your Monthly Wrap-Up",
          ]}
        />

        <SubHeading level={2}>UX Psychology Toolkit</SubHeading>
        <p>
          I compiled a list of UX psychology principles to guide and enhance our
          solution. While we might not use every single one, this toolbox serves
          as a valuable resource to inform and strengthen our design decisions.
        </p>
        <CaseStudyImage
          src={ANZ_IMAGES.psychologyToolkit}
          alt="UX Psychology Toolkit"
        />

        <SubHeading level={2}>Design Principles</SubHeading>
        <SubHeading level={2}>Embracing UX</SubHeading>
        <p>
          While UX anti-patterns are usually seen as &apos;design don&apos;ts,&apos;
          we believe they can be harnessed as innovative solutions when used
          thoughtfully.
        </p>
        <BulletList
          items={[
            "Add Friction to Entry: Introduce some friction to encourage users to invest in the process.",
            "Use Weird Interactions: Add a sense of fun and uniqueness to the experience.",
            "Reduce Time on App: Let users achieve their goals quickly.",
            "Don't Follow Brand Guidelines: Step outside the brand's standard look for more engaging experiences.",
            "Don't Make Use of Space: Intentionally limit what's displayed to reduce clutter.",
            "Use Very Long Buttons: Offer extra context with longer, more conversational CTAs.",
          ]}
        />
        <CaseStudyImage
          src={ANZ_IMAGES.designPrinciples}
          alt="Design principles"
        />

        <SubHeading level={2}>Content Framework</SubHeading>
        <SubHeading level={4}>The iACT Formula</SubHeading>
        <p>
          To deliver concise content that packs a punch, I developed the iACT
          (Insight, Action, Consequence, Twist) formula.
        </p>
        <BulletList
          items={[
            'Insight: "Dining out dropped $105, but food delivery jumped $82."',
            'Action: "Cook twice a week."',
            'Consequence: "Pocket $150."',
            'Twist: "Deliciously profitable!"',
          ]}
        />
        <CaseStudyImage
          src={ANZ_IMAGES.contentFramework}
          alt="iACT content framework"
        />

        <SubHeading level={2}>Shaping the Dream with Your Monthly Wrap-Up</SubHeading>
        <SubHeading level={2}>At a Glance</SubHeading>
        <p>
          Your Monthly Wrap-Up is designed for today&apos;s fast-paced world. It
          cuts through the noise, acting as a visual data album where users can
          spend just 3–15 minutes reflecting on their finances.
        </p>
        <SubHeading level={4}>Key Features</SubHeading>
        <BulletList
          items={[
            "Quick Reflection: Just 3–15 minutes needed each month.",
            "Simplified Breakdown: Instantly breaks down income, spending, and savings.",
            "Actionable Insights: Provides clear insights and next steps.",
            "Future Forecasting: Forecasts the upcoming month to keep users prepared.",
            "Quick Tips: Offers 30-second tips for immediate financial improvements.",
            "Automated Actions: Simplifies money management with automated actions.",
          ]}
        />

        <SubHeading level={2}>Feature Home</SubHeading>
        <p>
          We&apos;ve transformed daunting monthly financial reviews into an
          artful gallery, with each month&apos;s cover art capturing the essence
          of the changing seasons.
        </p>
        <CaseStudyImage src={ANZ_IMAGES.featureHome} alt="Feature Home screen" />

        <SubHeading level={2}>Monthly Snapshot</SubHeading>
        <p>
          Monthly snapshots of savings, spending, and income. We intentionally
          used only 40% of the screen to highlight key information and keep it
          distraction-free.
        </p>
        <CaseStudyImage
          src={ANZ_IMAGES.monthlySnapshot}
          alt="Monthly Snapshot screen"
        />

        <SubHeading level={2}>Financial Forecast</SubHeading>
        <p>
          This section provides forecasts on financial insights and upcoming
          payments. Each card focuses on one theme, offering data and actionable
          tips to help users prepare.
        </p>
        <CaseStudyImage
          src={ANZ_IMAGES.financialForecast}
          alt="Financial Forecast screen"
        />

        <SubHeading level={2}>Tips and Challenges</SubHeading>
        <p>
          Between sections, we offer a refreshing &apos;spark,&apos; with each
          card featuring a thought-provoking fact or an actionable tip.
        </p>
        <CaseStudyImage
          src={ANZ_IMAGES.tipsChallenges}
          alt="Tips and Challenges screen"
        />

        <SubHeading level={2}>Quick Actions</SubHeading>
        <p>
          We provide a concise list of immediate actions, followed by a satisfying
          completion screen that acknowledges users&apos; efforts.
        </p>

        <SubHeading level={2}>New Business Potential Unlocked</SubHeading>
        <SubHeading level={4}>Social Engagement</SubHeading>
        <p>
          This light-hearted approach encourages users to start conversations
          about money with loved ones.
        </p>
        <SubHeading level={4}>Product Cross-Selling</SubHeading>
        <p>
          The Spark section and Quick Actions are ideal spots to offer relevant
          products or services tailored to users&apos; financial situations.
        </p>
        <SubHeading level={4}>Boosting Savings</SubHeading>
        <p>
          Our app encourages users to save more, which also increases the
          bank&apos;s capital reserves.
        </p>
      </CaseStudySection>

      <CaseStudySection number="07" label="Closing" title="The Final Call">
        <p>
          Ultimately, our team proceeded with the Baseline MVP concept. While
          innovative ideas like Your Monthly Wrap-Up showed promise, the Baseline
          MVP aligned better with ANZ&apos;s strategy to encourage users to engage
          more deeply with the mobile app.
        </p>
        <SubHeading level={4}>Winning Moments</SubHeading>
        <BulletList
          items={[
            "Discovery Sprint Process: Enabled remote collaboration, keeping the team aligned and productive.",
            "UX Psychology Principles: Provided a science-backed design framework.",
            "UX Prioritisation Model: Successfully balanced exploration of new ideas with MVP requirements.",
          ]}
        />
        <SubHeading level={4}>Lessons Learned</SubHeading>
        <BulletList
          items={[
            "Embracing Unconventional Approaches: Exploring UX anti-patterns led to fresh solutions.",
            "Stakeholder Management: Managing multiple stakeholders was crucial in keeping the project on track.",
            "For the Greater Good: We recognised the need to make decisions for the bigger picture.",
          ]}
        />
      </CaseStudySection>

      <CaseStudyFooter
        nextHref="/pi"
        nextImage={IMAGES.piCard}
        nextTitle="Property Analytics Case Study"
      />
    </article>
  );
}
