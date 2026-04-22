import { Ornament } from "../components/photo";
import { Video } from "../components/video";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Order a cake, ask a question, or plan a visit. Manhal's Sweets & Cafe is on Lygon Street, Melbourne — opening 26 April.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-deep grain">
        <div className="container-x relative z-10 pt-20 md:pt-32 pb-20 md:pb-28 grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 flex flex-col gap-6 reveal">
            <p className="eyebrow text-burgundy">Get in touch</p>
            <h1
              className="font-serif text-6xl md:text-[7.2rem] lg:text-[8.5rem] leading-[0.94] text-ink"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              Say hello,
              <br />
              <span className="italic text-burgundy">or order a cake.</span>
            </h1>
            <p className="max-w-md text-ink-soft text-lg leading-relaxed">
              Order a cake ahead, book a celebration, or ask us anything
              about the menu. We usually reply within the day.
            </p>
          </div>

          <div className="md:col-span-5 reveal reveal-delay-1">
            <Video src="acai-ice-cream" ratio="vertical" caption="Custom orders welcome" />
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-16 md:grid-cols-12">
          {/* Order form */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-gold" />
              <p className="eyebrow text-burgundy">Pastry &amp; cake orders</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
              Tell us what you have in mind.
            </h2>

            <form className="grid gap-6" action="mailto:hello@manhalsweets.com.au" method="post" encType="text/plain">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Your name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Pickup date" name="date" type="date" />
              </div>
              <Field
                label="What would you like to order?"
                name="order"
                as="textarea"
                placeholder="e.g. A 20cm rose & pistachio cake for 10, with 'Happy Birthday Farah' on top."
                required
              />

              <fieldset className="flex flex-wrap gap-5 mt-2">
                <legend className="eyebrow text-ink-muted mb-3 w-full">Order type</legend>
                {["Whole cake", "Milkshake order", "Custom cake", "Something else"].map(
                  (label) => (
                    <label
                      key={label}
                      className="inline-flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="type"
                        value={label}
                        className="accent-burgundy w-4 h-4"
                      />
                      {label}
                    </label>
                  )
                )}
              </fieldset>

              <div className="flex items-center gap-4 mt-4">
                <button type="submit" className="btn btn-primary">
                  Send enquiry
                </button>
                <p className="text-sm text-ink-muted italic">
                  Or email us at{" "}
                  <a
                    href="mailto:hello@manhalsweets.com.au"
                    className="link-underline text-burgundy not-italic"
                  >
                    hello@manhalsweets.com.au
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Details */}
          <aside className="md:col-span-4 md:col-start-9 flex flex-col gap-12">
            <div>
              <p className="eyebrow text-gold mb-3">Visit</p>
              <address className="not-italic font-serif text-xl leading-relaxed text-ink">
                156 Fairfield Street
                <br />
                Fairfield East NSW 2165
              </address>
            </div>

            <div>
              <p className="eyebrow text-gold mb-3">Hours</p>
              <p className="font-serif text-lg leading-relaxed text-ink">
                Monday &ndash; Sunday
                <br />
                12pm &ndash; 11pm
              </p>

            </div>

            <div>
              <p className="eyebrow text-gold mb-3">Direct</p>
              <ul className="space-y-2 font-serif text-lg text-ink">
                <li>
                  <a
                    href="mailto:hello@manhalsweets.com.au"
                    className="link-underline"
                  >
                    hello@manhalsweets.com.au
                  </a>
                </li>
                <li>
                  <a href="tel:+61300000000" className="link-underline">
                    (02) 0000 0000
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-gold mb-3">Follow</p>
              <ul className="flex gap-5">
                {[
                  { href: "https://instagram.com", label: "Instagram" },
                  { href: "https://facebook.com", label: "Facebook" },
                ].map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="link-underline text-sm font-medium uppercase tracking-[0.22em] text-burgundy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* LEAD TIMES */}
      <section className="bg-cream-soft py-20">
        <div className="container-x">
          <div className="flex flex-col items-center text-center gap-3 mb-14">
            <Ornament />
            <p className="eyebrow text-gold">Lead times</p>
            <h2 className="font-serif text-3xl md:text-4xl max-w-xl">
              A little patience, for the best result.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                t: "Walk-in",
                d: "Slices, drinks and everything à la carte &mdash; just come in from 7am.",
              },
              {
                t: "Signature cakes",
                d: "Any whole cake from our twelve: 24 hours&rsquo; notice.",
              },
              {
                t: "Custom cakes",
                d: "Bespoke designs and flavours: 3 days&rsquo; notice minimum.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="flex flex-col gap-3 border-t border-line pt-6"
              >
                <h3 className="font-serif text-xl">{item.t}</h3>
                <p
                  className="text-ink-soft leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.d }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------- */

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  as?: "input" | "textarea";
};

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  as = "input",
}: FieldProps) {
  const base =
    "w-full bg-transparent border-b border-line focus:border-burgundy outline-none py-3 font-serif text-lg text-ink placeholder:text-ink-muted/70 transition-colors";
  return (
    <label className="flex flex-col gap-2">
      <span className="eyebrow text-ink-muted">
        {label}
        {required ? <span className="text-burgundy ml-1">*</span> : null}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}
