import { HeroMarquee } from "@/components/HeroMarquee";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { AboutSection } from "@/components/AboutSection";
import { IMAGES } from "@/lib/constants";

const caseStudies = [
  {
    title: "Balancing Innovation with Legacy Systems",
    subtitle: "My journey in creating effective designs at ANZ Bank.",
    readTime: "15 min read",
    href: "/anz",
    image: IMAGES.anzCard,
    bgColor: "#f5b5b0",
  },
  {
    title: "Six Months. Four Projects. One Designer.",
    subtitle:
      "My six-month role shaping UX at a property analytics startup.",
    readTime: "8 min read",
    href: "/pi",
    image: IMAGES.piCard,
    bgColor: "#a8d4b8",
  },
  {
    title: "Crafting the Ultimate Espresso App",
    subtitle:
      "Building software to fine-tune home espresso machines to perfection.",
    readTime: "5 min read",
    image: IMAGES.espressoCard,
    bgColor: "#2a2a2a",
    textColor: "#ffffff",
    comingSoon: true,
  },
  {
    title: "A UX Tool Powered by Psychology and AI",
    subtitle:
      "A side project exploring UX tools centred on UX psychology.",
    readTime: "5 min read",
    image: IMAGES.psychologyCard,
    bgColor: "#f5d76e",
    comingSoon: true,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroMarquee />

      <section className="py-16 md:py-24">
        <div className="max-w-container mx-auto px-6 md:px-12">
          <p className="section-label mb-4">Case Studies</p>
          <p className="text-muted max-w-2xl mb-12 leading-relaxed">
            <strong className="text-foreground font-semibold">Heads up!</strong>{" "}
            These case studies are a bit lengthy. I share a lot about my approach
            and design thinking. Not a ton of pictures, but hopefully plenty of
            insights. Thanks for stopping by—I hope you find something useful.
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
    </>
  );
}
