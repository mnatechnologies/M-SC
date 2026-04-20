import Link from "next/link";
import { Photo, Ornament } from "../components/photo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "A preview of what we'll be serving at Manhal's Sweets & Cafe — pastries, cakes, coffee, and more. Full menu launches 26 April.",
};

type Item = { name: string; detail?: string; price?: string };
type Section = { eyebrow: string; title: string; blurb: string; items: Item[] };

const sections: Section[] = [
  {
    eyebrow: "Morning",
    title: "Pastries",
    blurb: "Baked from 7am. When they&rsquo;re gone, they&rsquo;re gone.",
    items: [
      { name: "Baklava", detail: "Pistachio, walnut, orange-blossom" },
      { name: "Knafeh croissant", detail: "Buttery croissant, sweet cheese, kataifi" },
      { name: "Ma'amoul", detail: "Date, walnut, or pistachio" },
      { name: "Pistachio croissant" },
      { name: "Orange-blossom brioche" },
      { name: "Labneh & za'atar danish" },
    ],
  },
  {
    eyebrow: "All day",
    title: "Cakes by the slice",
    blurb: "Changing daily. Whole cakes to order &mdash; see the cakes page.",
    items: [
      { name: "Rose & pistachio" },
      { name: "Orange-blossom tres leches" },
      { name: "Chocolate & cardamom" },
      { name: "Fig, honey & thyme" },
      { name: "Knafeh cheesecake" },
    ],
  },
  {
    eyebrow: "Sweets",
    title: "Smaller things",
    blurb: "For a quick sweet with coffee.",
    items: [
      { name: "Pistachio kunafa cups" },
      { name: "Sesame-honey truffle" },
      { name: "Orange-almond biscotti" },
      { name: "Rose & raspberry macaron" },
    ],
  },
  {
    eyebrow: "Coffee & tea",
    title: "The drinks",
    blurb: "Specialty espresso and a slow Turkish brew.",
    items: [
      { name: "Espresso / macchiato / piccolo" },
      { name: "Flat white / cappuccino / latte" },
      { name: "Filter coffee", detail: "Single-origin, changing weekly" },
      { name: "Turkish coffee", detail: "Served with Turkish delight" },
      { name: "Cardamom latte" },
      { name: "Rose & pistachio iced latte" },
      { name: "Mint tea / black tea" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-deep grain">
        <div className="container-x relative z-10 pt-20 md:pt-32 pb-20 md:pb-28 grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 flex flex-col gap-6 reveal">
            <p className="eyebrow text-burgundy">A preview</p>
            <h1
              className="font-serif text-6xl md:text-[7.2rem] lg:text-[8.5rem] leading-[0.94] text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              The menu,
              <br />
              <span className="italic text-burgundy">in sketches.</span>
            </h1>
            <p className="max-w-md text-ink-soft text-lg leading-relaxed">
              Here&rsquo;s a taste of what we&rsquo;ll be serving from
              opening day. The full menu &mdash; with prices, seasonal
              specials, and the weekend pastry flight &mdash; arrives
              26 April.
            </p>
            <div className="flex gap-3 mt-2">
              <Link href="/contact" className="btn btn-primary">
                Order a cake
              </Link>
              <a href="#pastries" className="btn btn-outline">
                Jump to pastries
              </a>
            </div>
          </div>

          <div className="md:col-span-5 reveal reveal-delay-1">
            <Photo tone="cream" ratio="portrait" caption="Morning bake" />
          </div>
        </div>
      </section>

      {/* OPENING-DAY NOTICE */}
      <section className="py-14 border-b border-line-soft">
        <div className="container-x flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <Ornament />
          <p className="font-serif italic text-xl md:text-2xl text-ink leading-snug">
            Full menu &amp; pricing published 26 April &mdash; opening day.
          </p>
          <Link
            href="/contact"
            className="md:ml-auto link-underline text-sm font-medium uppercase tracking-[0.22em] text-burgundy"
          >
            Get updates
          </Link>
        </div>
      </section>

      {/* MENU SECTIONS */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-20">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              id={section.title.toLowerCase().replace(/\s+/g, "-")}
              className="grid gap-10 md:grid-cols-12 items-start"
            >
              <div className="md:col-span-4 md:sticky md:top-28 flex flex-col gap-4">
                <p className="eyebrow text-gold">{section.eyebrow}</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
                  {section.title}
                </h2>
                <p
                  className="text-ink-soft leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.blurb }}
                />
                <Photo
                  tone={(["rose", "cream", "cocoa", "pistachio"] as const)[idx % 4]}
                  ratio="landscape"
                  className="mt-4"
                />
              </div>

              <ul className="md:col-span-7 md:col-start-6 flex flex-col">
                {section.items.map((item, i) => (
                  <li
                    key={item.name}
                    className={[
                      "flex items-start justify-between gap-6 py-5",
                      i !== section.items.length - 1 ? "border-b border-line-soft" : "",
                    ].join(" ")}
                  >
                    <div className="flex flex-col gap-1">
                      <p className="font-serif text-xl leading-tight">
                        {item.name}
                      </p>
                      {item.detail ? (
                        <p className="text-ink-muted italic">{item.detail}</p>
                      ) : null}
                    </div>
                    {item.price ? (
                      <span className="font-serif text-ink text-lg whitespace-nowrap">
                        {item.price}
                      </span>
                    ) : (
                      <span className="text-ink-muted text-sm whitespace-nowrap mt-2">
                        &mdash;
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* DIETARY NOTE */}
      <section className="bg-cream-soft py-16">
        <div className="container-x grid gap-6 md:grid-cols-12 items-start">
          <p className="eyebrow text-burgundy md:col-span-3">A note on allergens</p>
          <p className="md:col-span-9 font-serif text-lg italic text-ink-soft leading-relaxed">
            Our kitchen handles nuts, sesame, dairy, eggs, and wheat.
            Please ask us if you have specific dietary needs &mdash;
            we&rsquo;ll do our best to guide you.
          </p>
        </div>
      </section>
    </>
  );
}
