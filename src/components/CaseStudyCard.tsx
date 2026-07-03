import Image from "next/image";
import Link from "next/link";

type CaseStudyCardProps = {
  title: string;
  subtitle: string;
  readTime: string;
  href?: string;
  image: string;
  bgColor: string;
  textColor?: string;
  comingSoon?: boolean;
};

export function CaseStudyCard({
  title,
  subtitle,
  readTime,
  href,
  image,
  bgColor,
  textColor = "#1a1a1a",
  comingSoon = false,
}: CaseStudyCardProps) {
  const content = (
    <article
      className="case-card h-full min-h-[420px] md:min-h-[520px] flex flex-col"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="w-8 h-8 rounded-full bg-white/20" />
          <span className="text-xs font-medium opacity-70">{readTime}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-3">
          {title}
        </h3>
        <p className="text-sm md:text-base opacity-80 leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-auto pt-8 relative">
          {comingSoon && (
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 flex justify-center">
              <span className="bg-black text-white text-xs font-bold tracking-[0.2em] px-6 py-2">
                COMING SOON
              </span>
            </div>
          )}
          <div
            className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden ${comingSoon ? "opacity-40" : ""}`}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </article>
  );

  if (href && !comingSoon) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return <div className="h-full cursor-default">{content}</div>;
}
