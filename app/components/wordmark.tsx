import Link from "next/link";

type WordmarkProps = {
  size?: "sm" | "md" | "lg";
  tone?: "ink" | "cream";
  asLink?: boolean;
};

const sizeMap = {
  sm: "text-lg tracking-[0.18em]",
  md: "text-xl tracking-[0.2em]",
  lg: "text-3xl md:text-4xl tracking-[0.22em]",
};

/**
 * A compact text-based wordmark. The full illustrated logo lives in
 * /public/brand/logo.svg and is used at feature moments (hero, contact).
 */
export function Wordmark({ size = "md", tone = "ink", asLink = true }: WordmarkProps) {
  const color = tone === "cream" ? "text-cream" : "text-ink";
  const content = (
    <span className={`inline-flex items-baseline gap-[0.35em] ${color}`}>
      <span
        className={`font-serif font-medium ${sizeMap[size]}`}
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
      >
        Manhal&rsquo;s
      </span>
      <span
        aria-hidden
        className="text-gold"
        style={{ fontFamily: "var(--font-display)", fontSize: "1.2em", lineHeight: 1 }}
      >
        ·
      </span>
      <span
        className={`font-serif italic text-[0.78em] ${sizeMap[size]} text-ink-soft`}
        style={{ letterSpacing: "0.04em" }}
      >
        Sweets &amp; Cafe
      </span>
    </span>
  );

  if (!asLink) return content;
  return (
    <Link href="/" aria-label="Manhal's Sweets & Cafe — home" className="inline-block">
      {content}
    </Link>
  );
}
