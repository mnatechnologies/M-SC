import Link from "next/link";
import Image from "next/image";
import { Ornament } from "../components/photo";
import { Video } from "../components/video";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drinks",
  description:
    "Mocktails, cold-pressed juices, açaí, ice cream and iced coffee — the drinks list at Manhal's Sweets & Cafe.",
};

type Tone = "rose" | "cream" | "cocoa" | "pistachio";
type Drink = {
  name: string;
  tone: Tone;
  note: string;
  /** Slug under /public/product-images/drinks/. If present renders a real PNG on the chip. */
  photo?: string;
};

type Group = {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
  items: Drink[];
  footnote?: string;
};

// Drop a bg-removed PNG into /public/product-images/drinks/ with a matching
// filename to swap the empty chip for a real photo. No code change required.
const groups: Group[] = [
  {
    id: "mocktails",
    eyebrow: "House mixes",
    title: "Mocktails",
    blurb:
      "Bright, layered, and built to share — zero alcohol, all colour.",
    items: [
      { name: "Kiwi Strawberry Wave", tone: "pistachio", note: "Kiwi, strawberry, lime", photo: "/product-images/drinks/kiwi-strawberry-wave.png" },
      { name: "Strawberry Lemon Twist", tone: "rose", note: "Strawberry, lemon, soda", photo: "/product-images/drinks/strawberry-lemon-twist.png" },
      { name: "Strawberry Mojito", tone: "pistachio", note: "Strawberry, mint, lime", photo: "/product-images/drinks/strawberry-mojito.png" },
      { name: "Strawberry Energy", tone: "rose", note: "Strawberry, energy, ice", photo: "/product-images/drinks/strawberry-energy.png" },
      { name: "Pineapple Dream", tone: "cream", note: "Pineapple, coconut, mint", photo: "/product-images/drinks/pineapple-dream.png" },
      { name: "Passionfruit", tone: "cream", note: "Passionfruit, lemon, honey", photo: "/product-images/drinks/passionfruit.png" },
      { name: "Sunset Spark", tone: "rose", note: "Orange, grenadine, citrus" },
      { name: "Blue Ocean", tone: "cream", note: "Blue curaçao, pineapple, lemon" },
      { name: "Blush Lemon Fizz", tone: "rose", note: "Rose, lemon, soda" },
      { name: "Curaco Lemonade", tone: "cream", note: "Blue curaçao over lemonade" },
      { name: "Jamaica", tone: "cocoa", note: "Hibiscus, citrus, mint" },
      { name: "Blueberry Energy", tone: "cocoa", note: "Blueberry, energy, ice" },
      { name: "Iced Tea with Orange & Lemon", tone: "cream", note: "Black tea, orange, lemon" },
    ],
  },
  {
    id: "juices",
    eyebrow: "Fresh-pressed",
    title: "Fresh juices",
    blurb:
      "Cold-pressed to order. Pick up to three flavours in one cup.",
    items: [
      { name: "Watermelon", tone: "rose", note: "Sweet, light, ice-cold" },
      { name: "Lemon & Mint", tone: "pistachio", note: "Sharp, herbal, bright" },
      { name: "Rockmelon", tone: "cream", note: "Soft, floral, mellow" },
      { name: "Apple", tone: "pistachio", note: "Crisp, clean" },
      { name: "Pineapple", tone: "cream", note: "Tropical, a little tart" },
      { name: "Orange", tone: "cream", note: "Fresh-squeezed" },
      { name: "Carrot", tone: "rose", note: "Earthy, subtly sweet" },
    ],
    footnote: "Mix any three into one cup.",
  },
  {
    id: "acai",
    eyebrow: "Chilled",
    title: "Açaí & ice cream",
    blurb:
      "Thick blended açaí, Dubai-strawberry cups, cones and scoops.",
    items: [
      { name: "Dubai Strawberry Cup", tone: "rose", note: "Strawberry, pistachio, kataifi", photo: "/product-images/drinks/dubai-strawberry-cup.png" },
      { name: "Tuti Frutie", tone: "rose", note: "Mixed berries over açaí", photo: "/product-images/drinks/tuti-frutie.png" },
      { name: "Pistachio Ice Cream", tone: "pistachio", note: "Scoop or cone", photo: "/product-images/drinks/pistachio-ice-cream.png" },
      { name: "Vanilla Ice Cream", tone: "cream", note: "Soft-serve with pistachio crumb", photo: "/product-images/drinks/vanilla-ice-cream.png" },
      { name: "Dubai Açaí", tone: "cocoa", note: "Açaí with pistachio kataifi" },
      { name: "Açaí — Small", tone: "cocoa", note: "Build it your way" },
      { name: "Açaí — Large", tone: "cocoa", note: "Build it your way" },
      { name: "Açaí Cone", tone: "cocoa", note: "Soft-serve açaí" },
    ],
    footnote:
      "Sauces: Nutella, Peanut Butter, Biscoff, Pistachio, Kinder Bueno, White Chocolate, Honey. Extras: Strawberries & Bananas. Add-ons: Blueberry, Kiwi, Almond Flakes, Chia Seeds, Coconut Flakes.",
  },
  {
    id: "coffee",
    eyebrow: "Cold & creamy",
    title: "Cocktails & iced coffee",
    blurb:
      "Layered blends with almond, honey and fresh fruit — plus the classics.",
    items: [
      { name: "Trio Twist", tone: "pistachio", note: "Avocado, strawberry, mango, almond, honey", photo: "/product-images/drinks/trio-twist.png" },
      { name: "Caramel Iced Coffee", tone: "cocoa", note: "Espresso, milk, caramel, ice", photo: "/product-images/drinks/caramel-iced-coffee.png" },
      { name: "Iced Coffee", tone: "cocoa", note: "Espresso, milk, ice", photo: "/product-images/drinks/iced-coffee.png" },
      { name: "Shako Mako", tone: "pistachio", note: "Avocado, strawberry, mango, banana, almond, honey" },
      { name: "Strawberry Rush", tone: "rose", note: "Strawberry blend, almond, honey" },
    ],
  },
];

export default function DrinksPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-deep grain">
        <div className="container-x relative z-10 pt-20 md:pt-32 pb-24 md:pb-32 grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 flex flex-col gap-6 reveal">
            <p className="eyebrow text-burgundy">The drinks list</p>
            <h1
              className="font-serif text-6xl md:text-[7.2rem] lg:text-[8.5rem] leading-[0.92] text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              Cold, bright,
              <br />
              <span className="italic text-burgundy">poured to order.</span>
            </h1>
            <p className="max-w-md text-ink-soft text-lg leading-relaxed">
              Layered mocktails, cold-pressed juices, thick açaí, and an
              iced coffee that doesn&rsquo;t cut corners.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a href="#mocktails" className="btn btn-primary">
                Jump to mocktails
              </a>
              <Link href="/menu" className="btn btn-outline">
                See the full menu
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 reveal reveal-delay-1">
            <Video
              src="cocktails-iced-coffee"
              ratio="vertical"
              caption="Shako mako blend"
              className="shadow-[0_30px_60px_-30px_rgba(86,27,13,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      {groups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`py-20 md:py-28 ${gi % 2 === 1 ? "bg-cream-soft" : ""}`}
        >
          <div className="container-x">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
              <div className="max-w-xl">
                <p className="eyebrow text-gold">{group.eyebrow}</p>
                <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.05]">
                  {group.title}
                </h2>
                <p className="mt-4 text-ink-soft leading-relaxed">
                  {group.blurb}
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
              {group.items.map((item, i) => (
                <li
                  key={item.name}
                  className={`flex flex-col gap-4 reveal reveal-delay-${(i % 3) + 1}`}
                >
                  <figure
                    className={`chip chip--${item.tone} aspect-[2/3] w-full relative`}
                  >
                    {item.photo ? (
                      <Image
                        src={item.photo}
                        alt={item.name}
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 46vw"
                        className="object-contain p-5 md:p-7 drop-shadow-[0_20px_24px_rgba(86,27,13,0.22)]"
                      />
                    ) : null}
                  </figure>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-xl leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-ink-muted italic text-sm leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {group.footnote ? (
              <p className="mt-10 text-sm text-ink-muted italic leading-relaxed max-w-3xl">
                {group.footnote}
              </p>
            ) : null}
          </div>
        </section>
      ))}

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col items-center text-center gap-3 mb-14">
            <Ornament />
            <p className="eyebrow text-gold">How we pour</p>
            <h2 className="font-serif text-3xl md:text-4xl max-w-xl">
              Made to order, one at a time.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                n: "01",
                t: "Layered by hand",
                d: "Mocktails are built in the glass so the colours stay honest.",
              },
              {
                n: "02",
                t: "Pressed to order",
                d: "Juices are cold-pressed when you ask &mdash; nothing sits.",
              },
              {
                n: "03",
                t: "Blended thick",
                d: "Açaí and cocktails go into the blender with real fruit and ice.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="flex flex-col gap-3 border-t border-line pt-6"
              >
                <p className="eyebrow text-burgundy">{step.n}</p>
                <h3 className="font-serif text-2xl">{step.t}</h3>
                <p
                  className="text-ink-soft leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.d }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-burgundy text-cream overflow-hidden">
        <div className="container-x py-20 md:py-28 grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="eyebrow text-gold-light">Come in for one</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              Cold drinks,
              <br />
              <span className="italic text-gold-light">slow afternoons.</span>
            </h2>
            <p className="max-w-md text-cream/80 leading-relaxed">
              Every drink goes together when you order. Pull up, pick a
              flavour, and let us pour.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link href="/contact" className="btn btn-inverse">
                Plan a visit
              </Link>
              <Link href="/menu" className="btn btn-outline-cream">
                See the full menu
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <Video src="moctails" ratio="vertical" caption="Kiwi strawberry wave" />
          </div>
        </div>
      </section>
    </>
  );
}
