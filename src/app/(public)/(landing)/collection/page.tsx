import type { Metadata } from "next";
import Image from "next/image";
import { stones } from "@/lib/stones";

export const metadata: Metadata = {
  title: "The Collection — Verdant & Ore Gemstones",
  description:
    "This season's gemstones: carat, species, habitat and origin recorded for every raw and lightly cut stone.",
  openGraph: {
    title: "The Collection — Verdant & Ore Gemstones",
    description:
      "Carat, species, habitat and origin recorded for every raw and lightly cut stone.",
  },
};

export default function Collection() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-8 pt-24">
      <p className="label-eyebrow text-moss">Ledger of the season</p>
      <h1 className="mt-6 max-w-2xl text-5xl leading-tight md:text-6xl">
        Every stone, with the <span className="italic">ground it slept in</span>
      </h1>
      <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
        Small numbers, honestly listed. When a stone leaves us, its entry stays in the
        ledger with the coordinates of the pit or stream it came from.
      </p>

      <div className="rule-vine mt-16" />

      <div className="mt-16 space-y-24">
        {stones.map((stone, i) => (
          <article
            key={stone.slug}
            className={`grid items-center gap-12 md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="leaf-mask relative aspect-[5/4] w-full">
              <Image
                src={stone.image}
                alt={`${stone.name} resting in its natural habitat`}
                fill
                className="object-cover"
              />
            </figure>

            <div>
              <p className="label-eyebrow text-clay">{stone.species}</p>
              <h2 className="mt-4 text-3xl md:text-4xl">{stone.name}</h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {stone.note}
              </p>

              <dl className="mt-9 grid grid-cols-2 gap-y-5 border-t border-border pt-7 text-sm">
                <div>
                  <dt className="label-eyebrow text-muted-foreground">Weight</dt>
                  <dd className="mt-2">{stone.carat}</dd>
                </div>
                <div>
                  <dt className="label-eyebrow text-muted-foreground">Origin</dt>
                  <dd className="mt-2">{stone.origin}</dd>
                </div>
                <div>
                  <dt className="label-eyebrow text-muted-foreground">Habitat</dt>
                  <dd className="mt-2">{stone.habitat}</dd>
                </div>
                <div>
                  <dt className="label-eyebrow text-muted-foreground">Cut</dt>
                  <dd className="mt-2">{stone.cut}</dd>
                </div>
              </dl>

              <p className="mt-9 font-display text-2xl text-clay">{stone.price}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
