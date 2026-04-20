import Link from "next/link";
import { Photo, Ornament } from "./components/photo";

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------
          HERO — full-bleed warm wash, opening-date announcement
          --------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-cream-deep grain">
        <div className="container-x relative z-10 pt-20 pb-24 md:pt-32 md:pb-40 grid gap-12 md:grid-cols-12 items-end">
          <div className="md:col-span-7 flex flex-col gap-6 reveal">
            <p className="eyebrow text-burgundy">Opening 26 April 2026</p>
            <h1
              className="font-serif text-[12vw] leading-[0.92] md:text-[7.2rem] lg:text-[9rem] text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              Sweet
              <br />
              patience,
              <br />
              <span className="italic text-burgundy">served daily.</span>
            </h1>
            <p className="max-w-md text-lg text-ink-soft leading-relaxed">
              A neighbourhood sweets and coffee house in the making.
              Cakes, Middle Eastern pastries, and slow-pulled coffee
              &mdash; crafted in small batches, one tray at a time.
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
            <Photo
              tone="rose"
              ratio="portrait"
              caption="Rose & pistachio layer cake"
              className="shadow-[0_30px_60px_-30px_rgba(86,27,13,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SIGNATURE STRIP — three pillars
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
                tone: "pistachio" as const,
                eyebrow: "01 — Cakes",
                title: "Cakes & celebrations",
                copy:
                  "Whole cakes made to order. Think rose & pistachio, fig & honey, chocolate &  cardamom.",
                href: "/cakes",
                cta: "See the cakes",
              },
              {
                tone: "cream" as const,
                eyebrow: "02 — Pastries",
                title: "Middle Eastern pastries",
                copy:
                  "Baklava, ma'amoul, kanafeh, and knafeh-inspired croissants &mdash; made fresh each morning.",
                href: "/menu",
                cta: "Browse the menu",
              },
              {
                tone: "cocoa" as const,
                eyebrow: "03 — Coffee",
                title: "Slow-pulled coffee",
                copy:
                  "Specialty espresso, filter, and Turkish coffee brewed with a patient hand.",
                href: "/menu",
                cta: "See drinks",
              },
            ].map((col, i) => (
              <article key={col.title} className={`flex flex-col gap-5 reveal reveal-delay-${i + 1}`}>
                <Photo tone={col.tone} ratio="landscape" />
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
            <Photo tone="cocoa" ratio="portrait" caption="The morning bake" />
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
              Manhal&rsquo;s began as a family tradition &mdash; weekend
              trays of baklava, long afternoons around a coffee pot.
              We&rsquo;re bringing that rhythm to a small corner of the
              neighbourhood, with recipes passed down, butter folded by
              hand, and coffee poured with care.
            </p>
            <p className="text-ink-soft leading-relaxed">
              Doors open 26 April. We can&rsquo;t wait to share the first tray.
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
            </div>
            <Link href="/cakes" className="btn btn-outline self-start">
              See all cakes
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <Photo tone="rose" ratio="tall" caption="Rose & pistachio" />
            <Photo tone="cream" ratio="tall" caption="Orange-blossom tres leches" />
            <Photo tone="cocoa" ratio="tall" caption="Chocolate & cardamom" />
            <Photo tone="pistachio" ratio="tall" caption="Fig, honey & thyme" />
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
              We&rsquo;re on Lygon Street, Melbourne. Dine in for cakes
              and coffee, or order ahead for something special.
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
            <p>Tuesday &ndash; Sunday</p>
            <p>7am &ndash; 5pm</p>
            <p className="mt-3 italic">Closed Mondays</p>
            <p className="eyebrow text-gold-light mt-8 mb-3">Address</p>
            <p>123 Lygon Street</p>
            <p>Melbourne VIC 3000</p>
          </div>
        </div>
      </section>
    </>
  );
}
