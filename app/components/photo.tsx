import { ReactNode } from "react";

type Tone = "default" | "cream" | "cocoa" | "rose" | "pistachio";
type Ratio = "square" | "portrait" | "landscape" | "wide" | "tall";

const ratioClass: Record<Ratio, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  tall: "aspect-[2/3]",
};

const toneClass: Record<Tone, string> = {
  default: "",
  cream: "photo--cream",
  cocoa: "photo--cocoa",
  rose: "photo--rose",
  pistachio: "photo--pistachio",
};

/**
 * Warm, editorial placeholder photo block. Replace by swapping an <img>
 * inside, or replacing with <Image/> when real photography arrives.
 *
 * Usage:
 *   <Photo tone="rose" ratio="portrait" caption="Rose & pistachio gateau" />
 */
export function Photo({
  tone = "default",
  ratio = "landscape",
  caption,
  className = "",
  children,
}: {
  tone?: Tone;
  ratio?: Ratio;
  caption?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <figure
      className={`photo ${toneClass[tone]} ${ratioClass[ratio]} w-full ${className}`}
    >
      {children}
      {caption ? <figcaption className="photo-caption">{caption}</figcaption> : null}
    </figure>
  );
}

/** Small gold ornamental divider */
export function Ornament() {
  return (
    <div className="ornament" aria-hidden>
      <svg viewBox="0 0 12 12">
        <path d="M6 0 L7.2 4.8 L12 6 L7.2 7.2 L6 12 L4.8 7.2 L0 6 L4.8 4.8 Z" />
      </svg>
    </div>
  );
}
