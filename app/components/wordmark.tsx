import Link from "next/link";
import Image from "next/image";

type WordmarkProps = {
  size?: "sm" | "md" | "lg";
  /** `cream` renders the mark on a cream pill so colours stay legible on dark backgrounds. */
  tone?: "ink" | "cream";
  asLink?: boolean;
};

// Logo native is 1200 × 882 — ~1.36 aspect.
const sizeMap: Record<"sm" | "md" | "lg", { h: number; w: number }> = {
  sm: { h: 88, w: 120 },
  md: { h: 120, w: 164 },
  lg: { h: 168, w: 229 },
};

/**
 * Brand mark. Renders /public/brand/logo.svg — the illustrated Manhal's
 * logo (gold wreath + burgundy wordmark). On `tone="cream"` we wrap it
 * in a cream pill so the colours remain legible on the burgundy footer.
 */
export function Wordmark({ size = "md", tone = "ink", asLink = true }: WordmarkProps) {
  const { h, w } = sizeMap[size];
  const inner = (
    <Image
      src="/brand/logo.png"
      alt="Manhal's Sweets and Cafe"
      width={w}
      height={h}
      priority
      className="block h-auto"
      style={{ height: h, width: "auto" }}
    />
  );

  const wrapped =
    tone === "cream" ? (
      <span
        className="inline-flex items-center justify-center bg-cream rounded-full px-4 py-2"
        style={{ lineHeight: 0 }}
      >
        {inner}
      </span>
    ) : (
      <span className="inline-block" style={{ lineHeight: 0 }}>
        {inner}
      </span>
    );

  if (!asLink) return wrapped;
  return (
    <Link
      href="/"
      aria-label="Manhal's Sweets and Cafe — home"
      className="inline-block"
    >
      {wrapped}
    </Link>
  );
}
