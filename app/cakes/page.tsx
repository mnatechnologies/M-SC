import Link from "next/link";
import Image from "next/image";
import { Photo, Ornament } from "../components/photo";
import { Video } from "../components/video";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cakes",
  description:
    "Twelve signature cake flavours from Manhal's Sweets & Cafe — by the slice, blended into a milkshake, or made to order as a whole cake.",
};

type Tone = "rose" | "cream" | "cocoa" | "pistachio";
type Cake = { name: string; tone: Tone; note: string; photo?: string };

// Photos are pre-cropped AI renders living in /public/product-images/cakes.
// Cakes without a `photo` fall back to the tonal gradient placeholder until
// real photography arrives.
const cakes: Cake[] = [
  { name: "Red Velvet", tone: "rose", note: "Cream cheese layers, velvet crumb", photo: "/product-images/cakes/red-velvet.jpeg" },
  { name: "Pistachio Cheesecake", tone: "pistachio", note: "Pistachio top, biscuit base", photo: "/product-images/cakes/pistachio-cheesecake.jpeg" },
  { name: "Mango Cheesecake", tone: "cream", note: "Mango glaze, vanilla cheese", photo: "/product-images/cakes/mango-cheesecake.jpeg" },
  { name: "Tiramisu", tone: "cocoa", note: "Coffee-soaked sponge, mascarpone, cocoa", photo: "/product-images/cakes/tiramisu.jpeg" },
  { name: "Ashtota", tone: "cream", note: "Milk-soaked Arabic sponge with caramel", photo: "/product-images/cakes/ashtota.jpeg" },
  { name: "Banana Caramel", tone: "cream", note: "Fresh banana, caramel, butter cream", photo: "/product-images/cakes/banana-caramel.jpeg" },
  { name: "Strawberry", tone: "rose", note: "Fresh strawberries, light sponge" },
  { name: "Pistachio", tone: "pistachio", note: "Pistachio cream, chopped nuts" },
  { name: "Kinder", tone: "cream", note: "Milk chocolate, hazelnut" },
  { name: "Peanut Butter", tone: "cocoa", note: "Peanut butter ganache, salted finish" },
  { name: "Biscoff", tone: "cocoa", note: "Lotus Biscoff spread, speculoos crumb" },
  { name: "Oreo", tone: "cocoa", note: "Oreo cream, cookie crumb" },
];

export default function CakesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-deep grain">
        <div className="container-x relative z-10 pt-20 md:pt-32 pb-24 md:pb-32 grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 flex flex-col gap-6 reveal">
            <p className="eyebrow text-burgundy">The cake list</p>
            <h1
              className="font-serif text-6xl md:text-[7.5rem] lg:text-[9rem] leading-[0.92] text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              Twelve flavours,
              <br />
              <span className="italic text-burgundy">one at a time.</span>
            </h1>
            <p className="max-w-md text-ink-soft text-lg leading-relaxed">
              Every slice is cut from a whole cake we baked that morning.
              Want the whole thing? Order ahead &mdash; we&rsquo;ll have
              it ready.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link href="/contact" className="btn btn-primary">
                Order a cake
              </Link>
              <Link href="/menu#cakes-milkshakes" className="btn btn-outline">
                See the menu
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 reveal reveal-delay-1">
            <Video
              src="cakes-and-milkshake"
              ratio="vertical"
              caption="Cakes & milkshakes"
              className="shadow-[0_30px_60px_-30px_rgba(86,27,13,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* CAKE GRID */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
            <div className="max-w-xl">
              <p className="eyebrow text-gold">On rotation</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.05]">
                The twelve.
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Each is available by the slice or as a milkshake. Whole
                cakes to order &mdash; see lead times below.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
            {cakes.map((cake, i) => (
              <li key={cake.name} className={`flex flex-col gap-4 reveal reveal-delay-${(i % 3) + 1}`}>
                {cake.photo ? (
                  <figure className="photo aspect-[2/3] w-full relative overflow-hidden">
                    <Image
                      src={cake.photo}
                      alt={cake.name}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 46vw"
                      className="object-cover"
                    />
                  </figure>
                ) : (
                  <Photo tone={cake.tone} ratio="tall" />
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-xl leading-tight">{cake.name}</h3>
                  <p className="text-ink-muted italic text-sm leading-relaxed">
                    {cake.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-cream-soft py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col items-center text-center gap-3 mb-14">
            <Ornament />
            <p className="eyebrow text-gold">How it works</p>
            <h2 className="font-serif text-3xl md:text-4xl max-w-xl">
              Three ways to have your cake.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                n: "01",
                t: "By the slice",
                d: "Walk in and take your pick of what&rsquo;s cut that day.",
              },
              {
                n: "02",
                t: "As a milkshake",
                d: "Same twelve flavours, blended with ice cream and milk.",
              },
              {
                n: "03",
                t: "Whole cake",
                d: "Any flavour, made to order. 24 hours&rsquo; notice.",
              },
            ].map((step) => (
              <div key={step.n} className="flex flex-col gap-3 border-t border-line pt-6">
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

      {/* CUSTOM CTA */}
      <section className="relative bg-burgundy text-cream overflow-hidden">
        <div className="container-x py-20 md:py-28 grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="eyebrow text-gold-light">Custom cakes</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              Something special?
              <br />
              <span className="italic text-gold-light">We&rsquo;ll make it.</span>
            </h2>
            <p className="max-w-md text-cream/80 leading-relaxed">
              Birthday, engagement, anniversary &mdash; tell us the
              flavour, the size, and the occasion. We&rsquo;ll design it
              with you. Three days&rsquo; notice minimum for bespoke
              cakes.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link href="/contact" className="btn btn-inverse">
                Start an order
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <Video src="crepes" ratio="vertical" caption="Folded to order" />
          </div>
        </div>
      </section>
    </>
  );
}
