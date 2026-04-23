import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Manhal's Sweets & Cafe",
    short_name: "Manhal's",
    description:
      "A neighbourhood sweets house and cafe in Fairfield — cakes and milkshakes, crêpes, açaí, juice, mocktails and iced coffee.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6efe3",
    theme_color: "#561b0d",
    icons: [
      {
        src: "/brand/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/brand/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
