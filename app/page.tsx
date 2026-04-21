import Link from "next/link";
import Image from "next/image";
import { Ornament } from "./components/photo";
import { Video } from "./components/video";

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------
          HERO — full-bleed warm wash, opening-day announcement
          --------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-cream-deep grain">
        <div className="container-x relative z-10 pt-20 pb-24 md:pt-32 md:pb-40 grid gap-12 md:grid-cols-12 items-end">
          <div className="md:col-span-7 flex flex-col gap-6 reveal">
            <p className="eyebrow text-burgundy">Opening 26 April 2026</p>
            <h1
              className="font-serif text-[12vw] leading-[0.92] md:text-[7.2rem] lg:text-[9rem] text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              Sweet things,
              <br />
              <span className="italic text-burgundy">cold drinks.</span>
            </h1>
            <p className="max-w-md text-lg text-ink-soft leading-relaxed">
              A neighbourhood sweets house and cafe. Cakes and milkshakes,
              Dubai-style crêpes, thick açaí, fresh-pressed juice,
              mocktails and iced coffee &mdash; made to order.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <Link href="/menu" className="btn btn-primary">
                See the menu
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Order a cake
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 reveal reveal-delay-1">
            <figure className="photo aspect-[3/4] w-full shadow-[0_30px_60px_-30px_rgba(86,27,13,0.45)]">
              <Image
                src="/spotlight.jpeg"
                alt="Three signature milkshakes in Manhal's-branded glasses — biscoff, pistachio and kinder."
                fill
                priority
                sizes="(min-width: 768px) 42vw, 90vw"
                className="object-cover"
              />
              <figcaption className="photo-caption">Signature milkshakes</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SIGNATURE STRIP — three pillars (Sweets / Chilled / Drinks)
          --------------------------------------------------------------- */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col items-center text-center gap-3 mb-16">
            <Ornament />
            <p className="eyebrow text-gold">What we make</p>
            <h2 className="font-serif text-4xl md:text-5xl max-w-xl">
              Three quiet obsessions.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                video: "cakes-and-milkshake",
                eyebrow: "01 — Sweets",
                title: "Cakes, crêpes & waffles",
                copy:
                  "Twelve cake flavours by the slice or blended into a milkshake. Dubai-style crêpes folded to order. Waffles and mini pancakes for the table.",
                href: "/cakes",
                cta: "See the cakes",
                caption: "Red velvet, by the slice",
              },
              {
                video: "acai-ice-cream",
                eyebrow: "02 — Chilled",
                title: "Açaí & ice cream",
                copy:
                  "Thick blended açaí cups and bowls, Dubai-strawberry cups, cones and scoops. Build it your way with sauces and add-ons.",
                href: "/menu#acai",
                cta: "Build a bowl",
                caption: "Dubai strawberry cup",
              },
              {
                video: "cocktails-iced-coffee",
                eyebrow: "03 — Drinks",
                title: "Iced coffee, mocktails, juice",
                copy:
                  "Cold-pressed juices, layered mocktails, cocktail-style blends with almond and honey, and an iced coffee that doesn&rsquo;t cut corners.",
                href: "/menu#coffee",
                cta: "See drinks",
                caption: "Shako mako blend",
              },
            ].map((col, i) => (
              <article
                key={col.title}
                className={`flex flex-col gap-5 reveal reveal-delay-${i + 1}`}
              >
                <Video src={col.video} ratio="vertical" caption={col.caption} />
                <p className="eyebrow text-gold">{col.eyebrow}</p>
                <h3 className="font-serif text-2xl leading-tight">{col.title}</h3>
                <p
                  className="text-ink-soft leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: col.copy }}
                />
                <Link
                  href={col.href}
                  className="link-underline text-sm font-medium uppercase tracking-[0.22em] self-start text-burgundy"
                >
                  {col.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          STORY — editorial two-column
          --------------------------------------------------------------- */}
      <section className="bg-cream-soft py-24 md:py-32">
        <div className="container-x grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-5">
            <Video src="crepes" ratio="vertical" caption="Dubai crêpe, folded to order" />
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6">
            <p className="eyebrow text-burgundy">
              <span className="hairline" /> Our story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
              A sweets house that
              <br />
              <span className="italic">takes its time.</span>
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed">
              Manhal&rsquo;s started with a simple idea &mdash; the sweets
              and drinks we grew up wanting, done properly. Pistachio
              everywhere. Real fruit, cold-pressed. Cakes you actually
              want a second slice of.
            </p>
            <p className="text-ink-soft leading-relaxed">
              We fold crêpes to order, blend açaí thick, and pour coffee
              with care. Doors open 26 April.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          FEATURED CAKES STRIP
          --------------------------------------------------------------- */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
            <div className="max-w-xl">
              <p className="eyebrow text-gold">Cakes we&rsquo;re proud of</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-3">
                A handful of favourites.
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Twelve flavours on rotation. Available by the slice, or
                as a whole cake with 24 hours&rsquo; notice.
              </p>
            </div>
            <Link href="/cakes" className="btn btn-outline self-start">
              See all cakes
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { photo: "/product-images/cakes/red-velvet.jpeg", caption: "Red velvet" },
              { photo: "/product-images/cakes/pistachio-cheesecake.jpeg", caption: "Pistachio cheesecake" },
              { photo: "/product-images/cakes/tiramisu.jpeg", caption: "Tiramisu" },
              { photo: "/product-images/cakes/mango-cheesecake.jpeg", caption: "Mango cheesecake" },
            ].map((c) => (
              <figure
                key={c.caption}
                className="photo aspect-[2/3] w-full relative overflow-hidden"
              >
                <Image
                  src={c.photo}
                  alt={c.caption}
                  fill
                  sizes="(min-width: 768px) 22vw, 46vw"
                  className="object-cover"
                />
                <figcaption className="photo-caption">{c.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          VISIT — closing CTA
          --------------------------------------------------------------- */}
      <section className="relative bg-burgundy text-cream overflow-hidden">
        <div className="container-x py-24 md:py-32 grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="eyebrow text-gold-light">Visit us</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.02]">
              Come in for a
              <br />
              <span className="italic text-gold-light">slow afternoon.</span>
            </h2>
            <p className="max-w-md text-cream/80 leading-relaxed">
              We&rsquo;re on Fairfield Street, Fairfield East. Dine in for cake
              and a cold drink, or order ahead for something special.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <Link href="/contact" className="btn btn-inverse">
                Plan a visit
              </Link>
              <Link href="/contact" className="btn btn-outline-cream">
                Order a cake
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 text-sm font-serif text-cream/80 leading-loose md:pl-8 md:border-l md:border-cream/20">
            <p className="eyebrow text-gold-light mb-3">Hours</p>
            <p>Monday &ndash; Saturday</p>
            <p>12pm &ndash; 11pm</p>
            <p className="mt-3 italic">Closed Sundays</p>
            <p className="eyebrow text-gold-light mt-8 mb-3">Address</p>
            <p>154 Fairfield Street</p>
            <p>Fairfield East, NSW 2176 </p>
          </div>
        </div>
      </section>
    </>
  );
}
