import Link from "next/link";
import { Ornament } from "../components/photo";
import { Video } from "../components/video";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The full menu at Manhal's Sweets & Cafe — cakes & milkshakes, crêpes, açaí & ice cream, fresh juices, mocktails, cocktails and iced coffee.",
};

type Item = { name: string; detail?: string };
type Section = {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
  video: { src: string; caption?: string };
  items: Item[];
  footnote?: string;
};

const sections: Section[] = [
  {
    id: "cakes-milkshakes",
    eyebrow: "Sweets",
    title: "Cakes & milkshakes",
    blurb:
      "Twelve signature flavours, served by the slice or blended into a milkshake. Whole cakes made to order.",
    video: { src: "cakes-and-milkshake", caption: "Red velvet — by the slice" },
    items: [
      { name: "Red Velvet" },
      { name: "Pistachio Cheesecake" },
      { name: "Mango Cheesecake" },
      { name: "Tiramisu" },
      { name: "Ashtota" },
      { name: "Banana Caramel" },
      { name: "Strawberry" },
      { name: "Pistachio" },
      { name: "Kinder" },
      { name: "Peanut Butter" },
      { name: "Biscoff" },
      { name: "Oreo" },
    ],
  },
  {
    id: "crepes",
    eyebrow: "Hot off the pan",
    title: "Crêpes, pancakes & waffles",
    blurb:
      "Folded to order with your pick of flavour. Add a sauce for the full treatment.",
    video: { src: "crepes", caption: "Dubai crêpe" },
    items: [
      { name: "Crêpe Dubai", detail: "Medium or large" },
      { name: "Biscoff Crêpe", detail: "Medium or large" },
      { name: "Nutella Crêpe", detail: "Medium or large" },
      { name: "Pistachio Crêpe", detail: "Medium or large" },
      { name: "Dubai Cake", detail: "Large only" },
      { name: "Crêpe Cake Dubai", detail: "Large only" },
      { name: "Mini Pancakes", detail: "12 pack" },
      { name: "Waffles" },
    ],
    footnote:
      "Flavours: Nutella, Kinder Bueno, Lotus Biscoff, Pistachio. Sauces: Pistachio, Kinder Bueno, Biscoff, Nutella, Belgian Chocolate, White Chocolate.",
  },
  {
    id: "acai",
    eyebrow: "Chilled",
    title: "Açaí & ice cream",
    blurb:
      "Thick blended açaí bowls and cups, soft-serve cones, and classic scoops. Build it your way.",
    video: { src: "acai-ice-cream", caption: "Dubai strawberry cup" },
    items: [
      { name: "Dubai Strawberry Cup" },
      { name: "Dubai Açaí" },
      { name: "Açaí Cone" },
      { name: "Açaí — Small" },
      { name: "Açaí — Large" },
      { name: "Vanilla Ice Cream" },
      { name: "Pistachio Ice Cream" },
      { name: "Tutti Fruitie" },
    ],
    footnote:
      "Sauces: Nutella, Peanut Butter, Biscoff, Pistachio, Kinder Bueno, White Chocolate, Honey. Extras: sauces plus Strawberries & Bananas. Add-ons: Blueberry, Kiwi, Almond Flakes, Chia Seeds, Coconut Flakes.",
  },
  {
    id: "juices",
    eyebrow: "Fresh-pressed",
    title: "Fresh juices",
    blurb:
      "Cold-pressed to order. Pick up to three flavours in one cup.",
    video: { src: "fresh-juice", caption: "Watermelon, fresh-pressed" },
    items: [
      { name: "Watermelon" },
      { name: "Lemon & Mint" },
      { name: "Rockmelon" },
      { name: "Apple" },
      { name: "Pineapple" },
      { name: "Orange" },
      { name: "Carrot" },
    ],
  },
  {
    id: "mocktails",
    eyebrow: "House mixes",
    title: "Mocktails",
    blurb:
      "Bright, layered and built to share — zero alcohol, all colour.",
    video: { src: "moctails", caption: "Kiwi strawberry wave" },
    items: [
      { name: "Curaco Lemonade" },
      { name: "Strawberry Energy" },
      { name: "Strawberry Mojito" },
      { name: "Blue Ocean" },
      { name: "Passionfruit" },
      { name: "Jamaica" },
      { name: "Blueberry Energy" },
      { name: "Sunset Spark" },
      { name: "Iced Tea with Orange & Lemon" },
      { name: "Strawberry Lemon Twist" },
      { name: "Pineapple Dream" },
      { name: "Kiwi Strawberry Wave" },
      { name: "Blush Lemon Fizz" },
    ],
  },
  {
    id: "coffee",
    eyebrow: "Cold & creamy",
    title: "Cocktails & iced coffee",
    blurb:
      "Layered blends with almond, honey and fresh fruit — plus the classics.",
    video: { src: "cocktails-iced-coffee", caption: "Shako mako" },
    items: [
      {
        name: "Shako Mako",
        detail:
          "Avocado, strawberry, mango & banana blend, almond, honey, strawberry & kiwi pieces",
      },
      {
        name: "Trio Twist",
        detail:
          "Avocado, strawberry & mango blend, almond, honey, strawberry & kiwi pieces",
      },
      {
        name: "Strawberry Rush",
        detail: "Strawberry blend, almond, honey, strawberry & kiwi pieces",
      },
      { name: "Caramel Iced Coffee" },
      { name: "Iced Coffee" },
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
            <p className="eyebrow text-burgundy">The full menu</p>
            <h1
              className="font-serif text-6xl md:text-[7.2rem] lg:text-[8.5rem] leading-[0.94] text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              Sweet things,
              <br />
              <span className="italic text-burgundy">cold drinks.</span>
            </h1>
            <p className="max-w-md text-ink-soft text-lg leading-relaxed">
              Cakes and milkshakes, Dubai-style crêpes, thick açaí,
              fresh-pressed juice, mocktails and iced coffee &mdash;
              made to order, all day.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link href="/contact" className="btn btn-primary">
                Order a cake
              </Link>
              <a href="#cakes-milkshakes" className="btn btn-outline">
                Jump to menu
              </a>
            </div>
          </div>

          <div className="md:col-span-5 reveal reveal-delay-1">
            <Video src="cakes-and-milkshake" ratio="vertical" caption="Cakes & milkshakes" />
          </div>
        </div>
      </section>

      {/* OPENING-DAY NOTICE */}
      <section className="py-10 border-b border-line-soft">
        <div className="container-x flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <Ornament />
          <p className="font-serif italic text-xl md:text-2xl text-ink leading-snug">
            Doors open 26 April &mdash; ready to serve.
          </p>
          <Link
            href="/contact"
            className="md:ml-auto link-underline text-sm font-medium uppercase tracking-[0.22em] text-burgundy"
          >
            Plan a visit
          </Link>
        </div>
      </section>

      {/* MENU SECTIONS */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-24">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="grid gap-10 md:grid-cols-12 items-start"
            >
              <div className="md:col-span-4 md:sticky md:top-28 flex flex-col gap-4">
                <p className="eyebrow text-gold">{section.eyebrow}</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
                  {section.title}
                </h2>
                <p className="text-ink-soft leading-relaxed">{section.blurb}</p>
                <Video
                  src={section.video.src}
                  caption={section.video.caption}
                  ratio="vertical"
                  className="mt-4"
                />
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <ul className="flex flex-col">
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
                    </li>
                  ))}
                </ul>
                {section.footnote ? (
                  <p className="mt-6 text-sm text-ink-muted italic leading-relaxed border-t border-line-soft pt-5">
                    {section.footnote}
                  </p>
                ) : null}
              </div>
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
