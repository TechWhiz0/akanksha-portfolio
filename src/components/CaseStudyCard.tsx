import Link from "next/link";

type CaseStudyCardProps = {
  title: string;
  subtitle: string;
  meta: string;
  href?: string;
  coverTitle: string;
  coverNote: string;
  coverLabel: string;
  coverBg: string;
  coverText: string;
  backColor: string;
  tags: string[];
  comingSoon?: boolean;
};

// Staggered right insets create the fanned page-stack edge, as on the
// original Framer site (pages at 10/13/16/19/22px).
const PAGE_INSETS = [22, 19, 16, 13, 10];

export function CaseStudyCard({
  title,
  subtitle,
  meta,
  href,
  coverTitle,
  coverNote,
  coverLabel,
  coverBg,
  coverText,
  backColor,
  tags,
  comingSoon = false,
}: CaseStudyCardProps) {
  const book = (
    <div className="book relative w-full select-none" style={{ aspectRatio: "0.7" }}>
      {/* Back board */}
      <div
        className="absolute"
        style={{
          inset: "3px 3px 2px 0",
          backgroundColor: backColor,
          borderRadius: "0 36px 36px 0",
          boxShadow: "1px 0 5px 0 rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* Page stack */}
      {PAGE_INSETS.map((right) => (
        <div
          key={right}
          className="absolute"
          style={{
            top: 8,
            bottom: 8,
            left: 0,
            right,
            backgroundColor: "rgb(220, 220, 220)",
            border: "1px solid rgb(197, 197, 197)",
            borderRadius: "0 36px 36px 0",
          }}
        />
      ))}

      {/* Cover — swings open on hover, hinged by perspective */}
      <div
        className="book-cover absolute inset-0"
        style={{
          borderRadius: "4px 40px 40px 4px",
          boxShadow:
            "0.3px 0.6px 1.21px -0.5px rgba(0,0,0,0.162), 1.14px 2.29px 4.61px -1px rgba(0,0,0,0.196), 5px 10px 20.12px -1.5px rgba(0,0,0,0.35)",
        }}
      >
        <div
          className="absolute inset-0 flex flex-col overflow-hidden p-7 pl-9 md:p-8 md:pl-11"
          style={{
            borderRadius: "inherit",
            backgroundColor: coverBg,
            color: coverText,
          }}
        >
          <div className="flex items-start justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.2em] opacity-70">
            <span>{coverLabel}</span>
            <span className="text-right">{meta}</span>
          </div>

          <h4 className="mt-auto text-[clamp(1.6rem,3.2vw,2.2rem)] font-semibold leading-[1.15] tracking-tight">
            {coverTitle}
          </h4>
          <p className="mt-4 text-sm leading-relaxed opacity-75">{coverNote}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-[11px] font-medium"
                style={{ border: "1px solid currentColor", opacity: 0.7 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Shader — edge border + right-edge highlight */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: "inherit",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "inset -2px 0 2px 0 rgba(255, 255, 255, 0.5)",
          }}
        />

        {/* Spine ridge gradient */}
        <div
          className="pointer-events-none absolute inset-y-0 left-[3%] right-0"
          style={{
            borderRadius: "0 8px 8px 0",
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.08) 0.41%, rgba(255,255,255,0.1) 0.64%, rgba(0,36,121,0) 8.2%, rgba(0,36,121,0) 98%, rgba(255,255,255,0.1) 100%)",
          }}
        />
      </div>

      {comingSoon && (
        <div
          className="absolute z-10 flex items-center justify-center bg-black text-white"
          style={{
            top: "39%",
            height: "12%",
            left: "-0.5%",
            right: "-0.5%",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
          }}
        >
          <span className="text-xs font-bold tracking-[0.25em]">
            COMING SOON
          </span>
        </div>
      )}
    </div>
  );

  const caption = (
    <div className="mt-6">
      <h3 className="text-xl md:text-2xl font-semibold leading-tight">
        {title}
      </h3>
      <p className="text-muted mt-2 leading-relaxed">{subtitle}</p>
      <p className="text-sm text-muted mt-3">{meta}</p>
    </div>
  );

  if (href && !comingSoon) {
    return (
      <Link href={href} className="group block">
        {book}
        {caption}
      </Link>
    );
  }

  return (
    <div className="group cursor-default">
      {book}
      {caption}
    </div>
  );
}
