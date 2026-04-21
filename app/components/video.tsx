"use client";

import { useEffect, useRef } from "react";

type Ratio = "square" | "portrait" | "landscape" | "wide" | "tall" | "vertical";

const ratioClass: Record<Ratio, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  tall: "aspect-[2/3]",
  vertical: "aspect-[9/16]",
};

/**
 * Looping, muted, auto-playing atmosphere video.
 *
 * - Honours prefers-reduced-motion: holds on the poster instead of playing.
 * - Pauses when fully off-screen to save battery.
 * - Falls back to the poster when source fails.
 *
 * Source files live in /public/renders/web as {slug}.mp4 + {slug}.jpg.
 */
export function Video({
  src,
  poster,
  ratio = "vertical",
  caption,
  className = "",
  objectPosition = "center",
}: {
  /** Slug under /renders/web, e.g. "cakes-and-milkshake". */
  src: string;
  /** Optional explicit poster; defaults to the matching .jpg next to the mp4. */
  poster?: string;
  ratio?: Ratio;
  caption?: string;
  className?: string;
  /** CSS object-position for framing — e.g. "center 30%". */
  objectPosition?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mp4 = `/Renders/web/${src}.mp4`;
  const jpg = poster ?? `/Renders/web/${src}.jpg`;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.pause();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Swallow the promise — autoplay may be blocked on first load.
            void el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure
      className={`photo ${ratioClass[ratio]} w-full ${className}`}
      style={{ backgroundColor: "var(--cream-deep)" }}
    >
      <video
        ref={videoRef}
        src={mp4}
        poster={jpg}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-hidden={!caption}
        aria-label={caption}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition }}
      />
      {caption ? <figcaption className="photo-caption">{caption}</figcaption> : null}
    </figure>
  );
}
