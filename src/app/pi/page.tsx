import type { Metadata } from "next";
import {
  CaseStudyHero,
  CaseStudySection,
  SubHeading,
  CaseStudyImage,
  BulletList,
  CaseStudyFooter,
} from "@/components/CaseStudyLayout";
import { PI_IMAGES } from "@/lib/pi-images";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Toan / Property Analytics Case Study",
  description:
    "Six-month contract as the sole UX designer at a commercial property analytics startup.",
};

export default function PiPage() {
  return (
    <article className="bg-white">
      <CaseStudyHero
        breadcrumb="Property Analytics"
        title="Six Months. Four Projects. One Designer."
        section="01. Overview"
        description={
          <>
            This case study shares my six-month contract as the sole UX designer
            at a{" "}
            <strong className="text-foreground">
              commercial property analytics startup
            </strong>
            . It details how I juggled multiple projects in a new industry,
            developed tools and processes, and applied technical UI skills to
            tackle real-world challenges.
          </>
        }
        note="Note: I've left out the company's name to respect confidentiality and keep the focus on the work rather than any brand associations."
      />

      <CaseStudyImage
        src={PI_IMAGES.hero}
        alt="Property analytics dashboard"
      />

      <CaseStudySection number="02" label="Role" title="Uncharted Territory">
        <p>
          After spending years in the banking sector, I felt it was time to shake
          things up. So, I took on a six-month contract with a proptech
          company—my first venture into this industry. This role wasn&apos;t just
          about design; it was about adapting quickly, learning a new domain, and
          delivering results as the sole designer.
        </p>
        <SubHeading level={4}>Outcomes</SubHeading>
        <BulletList
          items={[
            "Leasing Data Project: Developed a business case that laid the groundwork for a potentially game-changing feature in commercial real estate management.",
            "Charts and Tables Enhancement: Designed improvements to data visualisation, making complex property data more accessible.",
            "Retail Experience: Proposed strategies to maintain momentum and ensure our retail experience remained a core offering.",
            "Process and Ways of Working: Delivered recommendations aimed at streamlining the design process, setting the stage for scalable growth.",
          ]}
        />
        <CaseStudyImage src={PI_IMAGES.outcomes} alt="Project outcomes" />
      </CaseStudySection>

      <CaseStudySection
        number="03"
        label="Key Challenges"
        title="Chaos Meets Simplicity"
        className="bg-background"
      >
        <SubHeading level={4}>Challenge</SubHeading>
        <p>
          As the only UX designer for the entire product, I found myself
          simultaneously working on four projects:
        </p>
        <BulletList
          items={[
            "Leasing Data Project",
            "Charts and Table Enhancement",
            "Retail Experience Enhancements",
            "Process and Ways of Working Recommendation",
          ]}
        />
        <p>
          Each project had its own challenges, stakeholders, and tight deadlines.
          The pressure was on to deliver top-notch work across the board while
          getting up to speed with the ins and outs of the commercial real estate
          industry.
        </p>

        <SubHeading level={4}>Solution</SubHeading>
        <p>
          Realising I needed a game plan to stay sane and productive, I turned to
          the 70-20-10 Rule to prioritise my efforts:
        </p>
        <BulletList
          items={[
            "70% on the highest priority (Leasing Data Project)",
            "20% on the second priority (Charts and Table Enhancement)",
            "10% split between the remaining two (Retail Experience and Process Improvement)",
          ]}
        />
        <p>
          This wasn&apos;t a rigid rule but gave me a solid framework to manage my
          time and energy effectively.
        </p>

        <SubHeading level={2}>The 70-20-10 Rule</SubHeading>
        <CaseStudyImage src={PI_IMAGES.rule702010} alt="70-20-10 Rule diagram" />

        <SubHeading level={4}>Weekly Breakdown</SubHeading>
        <p>
          I organised my days around 90- to 120-minute &apos;deep work&apos;
          sessions. While surprises did pop up, I made sure to reserve at least
          two blocks for high-priority tasks.
        </p>
        <p className="font-semibold text-foreground">Monday-Thursday</p>
        <BulletList
          items={[
            "4-6 hours: Deep work on high-priority tasks",
            "2 hours: Work on second priority",
            "1 hour: Tertiary tasks",
          ]}
        />
        <p className="font-semibold text-foreground">Friday</p>
        <BulletList
          items={[
            "Morning: Retail Experience and Process Improvement",
            "Afternoon: Plan for the next week and tie up loose ends",
          ]}
        />
        <CaseStudyImage
          src={PI_IMAGES.weeklyBreakdown}
          alt="Weekly breakdown schedule"
        />

        <SubHeading level={4}>Dealing with Reality</SubHeading>
        <p>No week ever went exactly as planned. Here&apos;s how I handled the curveballs:</p>
        <BulletList
          items={[
            "Urgent Requests: I built in a buffer during afternoon sessions for any urgent issues.",
            "Shifting Priorities: If a project needed more attention, I'd adjust my 70-20-10 split and keep stakeholders in the loop.",
            "Energy Levels: I'd tackle high-energy tasks when at my peak and saved less demanding tasks for when I needed a breather.",
          ]}
        />
        <p>
          This system wasn&apos;t perfect, but it helped me keep all the plates
          spinning without losing focus. Flexibility within a structured framework
          was key.
        </p>
      </CaseStudySection>

      <CaseStudySection
        number="05"
        label="UX Design"
        title="No Scenic Route, Just Speed"
      >
        <p>
          Solving core problems goes beyond design—it starts with effective
          resource allocation. With a fresh perspective, I identified key
          process improvements to accelerate the work.
        </p>

        <SubHeading level={4}>Problem</SubHeading>
        <BulletList
          items={[
            "Resource Crunch: Being the lone designer, the workload was hefty. Designs often weren't fully fleshed out before hitting development.",
            "Design-Development Disconnect: The process didn't facilitate smooth collaboration between design and development.",
            "Lack of User Testing: Without formal research and testing, we risked building features that might miss the mark.",
          ]}
        />

        <SubHeading level={4}>Solution</SubHeading>
        <BulletList
          items={[
            "Out-of-the-Box Efficiency: Rather than building everything from scratch, I recommended using off-the-shelf solutions to cover about 70% of our needs immediately.",
            "Design Tokens for Consistency: Proposed implementing design tokens to unify design and development.",
            "Rapid Prototyping and Testing: By leveraging existing solutions, we could quickly create prototypes and present them to customers sooner.",
          ]}
        />
        <CaseStudyImage src={PI_IMAGES.process} alt="Process improvements" />

        <SubHeading level={4}>Payoff</SubHeading>
        <BulletList
          items={[
            "Jumpstart Efficiency: Meeting 70% of our requirements upfront would mean starting each project with a running start.",
            "Focus on the Critical 30%: Freeing up time to polish the customer experience where it really counted.",
            "Faster Discovery and Iteration: Early testing and feedback loops would help us spot new opportunities quicker.",
          ]}
        />

        <SubHeading level={2}>UX Strategy</SubHeading>
        <SubHeading level={2}>70% Boring</SubHeading>
        <p>
          Our UX strategy centres on Jakob&apos;s Law, which states: &quot;Users
          spend most of their time on other websites, so they expect your site to
          work like all the others they already know.&quot;
        </p>
        <p>
          By mirroring design elements from popular websites and apps, we&apos;re
          aiming to make our users feel right at home. This approach taps into
          their existing mental models and learned behaviours.
        </p>

        <SubHeading level={2}>30% Magic</SubHeading>
        <p>
          In data visualisation, it&apos;s often the small UI decisions that make
          all the difference. Elements like typography, spacing, and content play
          crucial roles in how users perceive and interpret data.
        </p>

        <SubHeading level={2}>Design Foundation</SubHeading>
        <SubHeading level={2}>The Power of Boring</SubHeading>
        <p>
          With no design resources and no room for deep-dive user research, we
          anchored our UX strategy in Jakob&apos;s Law: users spend most of their
          time on other sites, so they expect ours to feel familiar.
        </p>
        <p>
          Inspired by YouTube, the second most visited site in the world, I
          designed an experience with zero learning curve. This approach aims to
          minimise onboarding time and streamline future development.
        </p>

        <SubHeading level={3}>The UX Model (YouTube)</SubHeading>
        <CaseStudyImage src={PI_IMAGES.uxModel} alt="YouTube UX model comparison" />

        <SubHeading level={3}>The Design</SubHeading>
        <BulletList
          items={[
            "Font: We used the Inter font for its readability and flexibility.",
            "Icons: Google Material Icons were used due to their extensive library and seamless Figma integration.",
            "Colours: Colours were kept consistent with common perceptions—green for positive, orange for warnings, and red for alerts.",
            "Layout Grid: Designed at 1,440px with a 1,016px container to maintain flexibility for smaller devices.",
          ]}
        />
        <CaseStudyImage src={PI_IMAGES.design} alt="Design system foundations" />

        <SubHeading level={2}>Tiny Details. Big Impact.</SubHeading>
        <p>
          I zeroed in on the small yet impactful aspects of the UI to ensure
          effective data visualisation.
        </p>
        <BulletList
          items={[
            "Disambiguation: Used an alternate glyph set to clearly distinguish similar characters.",
            "Open Digits: We used open digits (3, 4, 6, 9) for better legibility at smaller sizes.",
            "Tabular Number Spacing: Used fixed-width numbers for better alignment in tables.",
            "Text Alignment: Numeric data is right-aligned for comparison, while text is left-aligned.",
            "Date Formatting: Ensured clarity by using consistent date formats.",
            "Casing: All caps for metric card titles and CTAs. Sentence case for readability.",
          ]}
        />
        <CaseStudyImage src={PI_IMAGES.tinyDetails} alt="Typography details" />

        <SubHeading level={2}>Categorical Colours</SubHeading>
        <p>
          Selected 10 main colours using Jakob&apos;s Law, ensuring intuitive
          associations. Pattern overlays can be added when there are more than 10
          categories.
        </p>
        <CaseStudyImage src={PI_IMAGES.categorical} alt="Categorical colour palette" />

        <SubHeading level={2}>Sequential Colours</SubHeading>
        <p>
          Can be used for relationship and trend charts. In light themes, the
          darkest colour represents the largest values.
        </p>
        <CaseStudyImage src={PI_IMAGES.sequential} alt="Sequential colour palette" />

        <SubHeading level={2}>Diverging Colours</SubHeading>
        <p>
          Can be used for visualising positive and negative changes. They use
          contrasting colours to highlight differences.
        </p>
        <CaseStudyImage src={PI_IMAGES.diverging} alt="Diverging colour palette" />

        <SubHeading level={2}>The Magic 30%</SubHeading>
        <p>
          With the UI fundamentals in place, let&apos;s see the magic unfold as
          they transform property data into something far more usable.
        </p>

        <SubHeading level={2}>Charts</SubHeading>
        <p>
          The system handles all types of complex data. We offer three chart
          options: small, medium, and full. They&apos;re clean and minimal to
          balance data-heavy content.
        </p>
        <CaseStudyImage src={PI_IMAGES.charts} alt="Chart components" />

        <SubHeading level={2}>Tables</SubHeading>
        <p>
          Property data&apos;s often dense and complex. Instead of starting fresh,
          we&apos;ve refined off-the-shelf tables with our UI tweaks.
        </p>
        <CaseStudyImage src={PI_IMAGES.tables} alt="Table components" />
      </CaseStudySection>

      <CaseStudySection
        number="06"
        label="Closing"
        title="Journey Ends"
        className="bg-background"
      >
        <p>
          This journey was a test of adaptability and focus, pushing me to grow in
          unexpected ways. Here are some standout moments.
        </p>
        <SubHeading level={4}>Winning Moments</SubHeading>
        <BulletList
          items={[
            "Delivered Solo: Covered all project requirements as the sole designer across four major projects.",
            "Sanity with 70-20-10: The 70-20-10 rule kept me organised.",
            "Adapted Beyond Fintech: Quickly learned the nuances of commercial real estate.",
          ]}
        />
        <SubHeading level={4}>Lessons Learned</SubHeading>
        <BulletList
          items={[
            "Strategy and Details Matter: Balancing overarching strategies with UI details is crucial.",
            "Progress Within Constraints: Found ways to drive progress despite limited resources.",
            "Stay Flexible: Adjusted the 70-20-10 rule as project priorities shifted.",
          ]}
        />
      </CaseStudySection>

      <CaseStudyFooter
        nextHref="/anz"
        nextImage={IMAGES.anzCard}
        nextTitle="ANZ Bank Case Study"
      />
    </article>
  );
}
