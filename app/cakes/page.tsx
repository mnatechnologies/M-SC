import Link from "next/link";
import { Photo, Ornament } from "../components/photo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cakes",
  description:
    "Whole cakes made to order at Manhal's Sweets & Cafe — rose & pistachio, orange-blossom tres leches, chocolate & cardamom, and more.",
};

type Cake = {
  name: string;
  italic?: string;
  description: string;
  tone: "rose" | "cream" | "cocoa" | "pistachio" | "default";
  tags: string[];
};

const cakes: Cake[] = [
  {
    name: "Rose & pistachio",
    italic: "layer cake",
    description:
      "Pistachio sponge, rosewater cream, candied rose petals. Our most asked-for cake.",
    tone: "rose",
    tags: ["Nuts"],
  },
  {
    name: "Orange-blossom tres leches",
    description:
      "Milk-soaked sponge with orange-blossom syrup, finished with cardamom whipped cream.",
    tone: "cream",
    tags: ["Gluten", "Dairy"],
  },
  {
    name: "Chocolate & cardamom",
    italic: "dark",
    description:
      "A dark, fudgy chocolate cake with cardamom, tahini caramel, and flaked sea salt.",
    tone: "cocoa",
    tags: ["Sesame"],
  },
  {
    name: "Fig, honey & thyme",
    description:
      "Brown butter sponge, roasted black figs, thyme-infused honey, crème fraîche.",
    tone: "pistachio",
    tags: ["Seasonal"],
  },
  {
    name: "Knafeh cheesecake",
    italic: "signature",
    description:
      "Baked cheesecake wrapped in golden kataifi, pistachio crumb, orange-blossom syrup.",
    tone: "default",
    tags: ["Dairy", "Nuts"],
  },
  {
    name: "Date & walnut",
    description:
      "Sticky date cake with toasted walnut and a warm burnt-butter toffee.",
    tone: "cocoa",
    tags: ["Nuts"],
  },
  {
    name: "Lemon, olive oil & labneh",
    description:
      "Delicate olive-oil sponge with whipped labneh and candied Meyer lemon.",
    tone: "cream",
    tags: ["Dairy"],
  },
  {
    name: "Dark chocolate & tahini",
    italic: "gateau",
    description:
      "Three layers of dark chocolate with tahini-halva cream and cocoa nib crunch.",
    tone: "cocoa",
    tags: ["Sesame"],
  },
  {
    name: "Pistachio & raspberry",
    description:
      "Pistachio genoise, raspberry gel, white chocolate-rose ganache.",
    tone: "rose",
    tags: ["Nuts", "Seasonal"],
  },
];

export default function CakesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-deep grain">
        <div className="container-x relative z-10 pt-20 md:pt-32 pb-20 md:pb-28 grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 flex flex-col gap-6 reveal">
            <p className="eyebrow text-burgundy">Cakes &amp; celebrations</p>
            <h1
              className="font-serif text-6xl md:text-[7.2rem] lg:text-[8.5rem] leading-[0.94] text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              Cakes made
              <br />
              <span className="italic text-burgundy">for the occasion.</span>
            </h1>
            <p className="max-w-md text-ink-soft text-lg leading-relaxed">
              Every cake is baked to order, finished by hand, and built
              around the produce of the season. Order a day ahead for
              pickup from the shop.
            </p>
            <div className="flex gap-3 mt-2">
              <Link href="/contact" className="btn btn-primary">
                Order a cake
              </Link>
              <a href="#selection" className="btn btn-outline">
                See the selection
              </a>
            </div>
          </div>

          <div className="md:col-span-5 reveal reveal-delay-1">
            <Photo tone="rose" ratio="portrait" caption="Rose & pistachio — made to order" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-3 gap-10">
          {[
            {
              n: "01",
              t: "Choose a cake",
              d: "Pick from the selection below, or tell us what you have in mind.",
            },
            {
              n: "02",
              t: "Order a day ahead",
              d: "Standard cakes need 24 hours. Custom cakes, 3 days.",
            },
            {
              n: "03",
              t: "Collect from the shop",
              d: "We&rsquo;ll have your cake boxed and ready from 9am.",
            },
          ].map((step) => (
            <div key={step.n} className="flex flex-col gap-3 border-t border-line pt-6">
              <span className="font-serif text-gold text-3xl">{step.n}</span>
              <h3 className="font-serif text-xl">{step.t}</h3>
              <p
                className="text-ink-soft leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.d }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SELECTION GRID */}
      <section id="selection" className="bg-cream-soft py-24 md:py-32 scroll-mt-20">
        <div className="container-x">
          <div className="flex flex-col items-center text-center gap-3 mb-16">
            <Ornament />
            <p className="eyebrow text-gold">The selection</p>
            <h2 className="font-serif text-4xl md:text-5xl max-w-2xl">
              Nine cakes on rotation, plus whatever the season brings.
            </h2>
          </div>

          <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {cakes.map((cake) => (
              <article key={cake.name} className="flex flex-col gap-4">
                <Photo tone={cake.tone} ratio="square" />
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl leading-tight">
                    {cake.name}
                    {cake.italic ? (
                      <>
                        <br />
                        <span className="italic text-ink-soft text-lg">
                          {cake.italic}
                        </span>
                      </>
                    ) : null}
                  </h3>
                  {cake.tags.length > 0 && (
                    <ul className="flex flex-wrap gap-1 text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted mt-1">
                      {cake.tags.map((t) => (
                        <li key={t} className="border border-line px-2 py-0.5 rounded-sm">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <p className="text-ink-soft leading-relaxed">{cake.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM CTA */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-5">
            <Photo tone="cocoa" ratio="portrait" caption="Custom orders welcome" />
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6">
            <p className="eyebrow text-burgundy">
              <span className="hairline" /> Something custom?
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              Birthdays, engagements,
              <br />
              <span className="italic">and quiet Tuesdays.</span>
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed">
              Tell us the story &mdash; the guest of honour, the flavour
              notes, the feeling &mdash; and we&rsquo;ll build a cake
              around it. Three days&rsquo; notice, please.
            </p>
            <Link href="/contact" className="btn btn-primary self-start">
              Start an order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
