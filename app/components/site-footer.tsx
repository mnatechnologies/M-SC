import Link from "next/link";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="relative bg-burgundy text-cream mt-20">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2 flex flex-col gap-5">
          <div className="text-cream">
            <Wordmark size="md" tone="cream" asLink={false} />
          </div>
          <p className="max-w-sm font-serif italic text-cream/80 leading-relaxed">
            A neighbourhood sweets house and cafe. Cakes and milkshakes,
            crêpes, açaí, fresh juice, mocktails and iced coffee &mdash;
            made to order.
          </p>
          <p className="eyebrow text-gold-light mt-2">
            Opening 26 April 2026
          </p>
        </div>

        <div>
          <p className="eyebrow text-cream/70">Visit</p>
          <address className="not-italic mt-4 font-serif text-cream/90 leading-relaxed">
            156 Fairfield Street
            <br />
            Fairfield East 2165
          </address>
          <p className="mt-4 text-sm text-cream/70">
            Mon&ndash;Sun · 12pm &ndash; 11pm
            <br />
          </p>
        </div>

        <div>
          <p className="eyebrow text-cream/70">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="mailto:hello@manhalsweets.com.au" className="link-underline text-cream/90">
                hello@manhalsweets.com.au
              </a>
            </li>
            <li>
              <a href="tel:+61200000000" className="link-underline text-cream/90">
                (03) 0000 0000
              </a>
            </li>
            <li>
              <Link href="/contact" className="link-underline text-cream/90">
                Order a cake
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex gap-4">
            <a
              href="https://instagram.com"
              className="link-underline text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              className="link-underline text-[0.72rem] font-medium uppercase tracking-[0.22em] text-gold-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col md:flex-row justify-between items-start md:items-center gap-3 py-6 text-xs text-cream/60">
          <p>&copy; {new Date().getFullYear()} Manhal&rsquo;s Sweets &amp; Cafe. All rights reserved.</p>
          <p className="font-serif italic">Made with patience.</p>
        </div>
      </div>
    </footer>
  );
}
